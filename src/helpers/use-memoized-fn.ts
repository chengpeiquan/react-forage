// https://github.com/alibaba/hooks/blob/master/packages/hooks/src/useMemoizedFn/index.ts
import { useMemo, useRef } from 'react'
import { isDevRuntime, isTestRuntime } from '@bassist/utils'

type noop = (this: any, ...args: any[]) => any

type PickFunction<T extends noop> = (
  this: ThisParameterType<T>,
  ...args: Parameters<T>
) => ReturnType<T>

export function useMemoizedFn<T extends noop>(fn: T) {
  if (isDevRuntime || isTestRuntime) {
    if (typeof fn !== 'function') {
      console.error(
        `useMemoizedFn expected parameter is a function, got ${typeof fn}`,
      )
    }
  }

  const fnRef = useRef<T>(fn)

  // why not write `fnRef.current = fn`?
  // https://github.com/alibaba/hooks/issues/728
  fnRef.current = useMemo(() => fn, [fn])

  const memoizedFn = useRef<PickFunction<T>>()
  if (!memoizedFn.current) {
    memoizedFn.current = function (this, ...args) {
      return fnRef.current.apply(this, args)
    }
  }

  return memoizedFn.current as T
}
