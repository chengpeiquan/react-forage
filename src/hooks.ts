import { useEffect, useState } from 'react'
import { useLocalForageContext } from './context'
import { useMemoizedFn, useUpdateEffect } from './helpers'

export type SetStateValue<S> = (prevState?: S) => S

export type SetState<S> = S | SetStateValue<S>

export type GetDefaultValue<T> = () => T

export interface Options<T> {
  defaultValue?: T | GetDefaultValue<T>
  serializer?: (value: T) => string
  deserializer?: (value: string) => T
  onError?: (error: unknown) => void
}

export const useLocalForageState = <T>(
  key: string,
  options: Options<T> = {},
) => {
  const { localforage } = useLocalForageContext()

  const {
    onError = (e) => {
      console.error(e)
    },
  } = options

  const serializer = (value: T) => {
    if (options.serializer) {
      return options.serializer(value)
    }
    return JSON.stringify(value)
  }

  const deserializer = (value: string): T => {
    if (options.deserializer) {
      return options.deserializer(value)
    }
    return JSON.parse(value)
  }

  const getDefaultValue = () => {
    if (typeof options.defaultValue === 'function') {
      const getVal = options.defaultValue as GetDefaultValue<T>
      return getVal()
    }
    return options.defaultValue
  }

  const getStoredValue = async () => {
    try {
      const raw = await localforage?.getItem<string>(key)
      if (raw) {
        return deserializer(raw)
      }
    } catch (e) {
      onError(e)
    }
    return getDefaultValue()
  }

  const [state, setState] = useState<T | undefined>(getDefaultValue())

  const updateState = (value?: SetState<T>) => {
    const currentState =
      typeof value === 'function' ? (value as SetStateValue<T>)(state) : value
    setState(currentState)

    if (typeof currentState === 'undefined') {
      localforage?.removeItem(key)
    } else {
      try {
        localforage?.setItem(key, serializer(currentState))
      } catch (e) {
        console.error(e)
      }
    }
  }

  const onUpdate = () => {
    getStoredValue()
      .then((res) => updateState(res))
      .catch((e) => onError(e))
  }

  useEffect(() => {
    onUpdate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useUpdateEffect(() => {
    onUpdate()
  }, [key])

  return [state, useMemoizedFn(updateState)] as const
}
