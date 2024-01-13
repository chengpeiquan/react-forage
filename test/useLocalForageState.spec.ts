import { describe, expect, it } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useLocalForageState } from '../src/hooks'

describe('test initial', () => {
  it('should be defined', () => {
    expect(useLocalForageState).toBeDefined()
  })

  it('renders the hook correctly and checks types (without default value)', () => {
    const { result } = renderHook(() => useLocalForageState('test-initial'))
    const [value, setValue] = result.current

    expect(value).toBeUndefined()
    expect(typeof value).toBe('undefined')
    expect(typeof setValue).toBe('function')
  })

  it('renders the hook correctly and checks types (with default value)', () => {
    const { result } = renderHook(() =>
      useLocalForageState('test-initial', { defaultValue: 'test' }),
    )
    const [value, setValue] = result.current

    expect(value).toBe('test')
    expect(typeof value).toBe('string')
    expect(typeof setValue).toBe('function')
  })
})

describe('test base value', () => {
  it('should change number props)', () => {
    const { result } = renderHook(() =>
      useLocalForageState<number>('test-number-value', { defaultValue: 0 }),
    )
    expect(result.current[0]).toBe(0)
    act(() => result.current[1](1))
    expect(result.current[0]).toBe(1)
  })

  it('should change string props)', () => {
    const { result } = renderHook(() =>
      useLocalForageState<string>('test-string-value', { defaultValue: '' }),
    )
    expect(result.current[0]).toBe('')
    act(() => result.current[1]('hello'))
    expect(result.current[0]).toBe('hello')
  })

  it('should change boolean props)', () => {
    const { result } = renderHook(() =>
      useLocalForageState<boolean>('test-boolean-value', {
        defaultValue: false,
      }),
    )
    expect(result.current[0]).toBeFalsy()
    act(() => result.current[1](true))
    expect(result.current[0]).toBeTruthy()
  })
})

describe('test array value', () => {
  it('should change array props', () => {
    const { result } = renderHook(() =>
      useLocalForageState<string[]>('test-array-set-value', {
        defaultValue: [],
      }),
    )

    expect(result.current[0]).toEqual([])

    act(() => {
      result.current[1](() => {
        return ['hello']
      })
    })

    expect(result.current[0]).toEqual(['hello'])
  })
})

interface ObjectValue {
  foo: string
  bar?: string
}

const defaultObjectValue: ObjectValue = {
  foo: 'foo',
}

describe('test object value', () => {
  it('should change object props', () => {
    const { result } = renderHook(() =>
      useLocalForageState<ObjectValue>('test-object-set-value', {
        defaultValue: defaultObjectValue,
      }),
    )

    expect(result.current[0]?.bar).toBeUndefined()

    act(() => {
      result.current[1](() => {
        return {
          ...defaultObjectValue,
          bar: 'bar',
        }
      })
    })

    expect(result.current[0]?.bar).toBe('bar')
  })
})

describe('test remove value', () => {
  it('should remove the default value', () => {
    const { result } = renderHook(() =>
      useLocalForageState<number>('test-remove-value', { defaultValue: 1 }),
    )

    expect(result.current[0]).toBe(1)

    act(() => {
      result.current[1](undefined)
    })

    expect(result.current[0]).toBeUndefined()
  })
})
