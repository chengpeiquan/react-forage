/// <reference types="./test-env.d.ts" />

import React, { useMemo } from 'react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { act, render, renderHook, screen } from '@testing-library/react'
import { LocalForageProvider, useLocalForageContext } from '../src/context'
import { useLocalForageState } from '../src/hooks'
import { LocalForageDriverType, type LocalForageOptions } from '../src/types'

const config: LocalForageOptions = {
  name: 'test-db',
  storeName: 'test-store',
}

interface TestContainerProps {
  children: React.ReactNode
}

const TestContainer: React.FC<TestContainerProps> = ({ children }) => {
  return <LocalForageProvider config={config}>{children}</LocalForageProvider>
}

interface TestComponentProps {
  defaultValue: string
}

const TestComponent: React.FC<TestComponentProps> = ({ defaultValue }) => {
  const [value, setValue] = useLocalForageState<string>('test-component', {
    defaultValue,
  })

  const { localforage } = useLocalForageContext()

  const name = useMemo(() => {
    return localforage.config('name')
  }, [localforage])

  const storeName = useMemo(() => {
    return localforage.config('storeName')
  }, [localforage])

  return (
    <>
      <div role="name">{name}</div>

      <div role="storeName">{storeName}</div>

      <div role="value">{value}</div>

      <button role="update" onClick={() => setValue('Hello World!')}>
        Update Value
      </button>

      <button role="remove" onClick={() => setValue(undefined)}>
        Remove Value
      </button>
    </>
  )
}

describe('test support drivers', () => {
  // In this runTime, only localStorage supported
  it('check drivers supported status', () => {
    const { result } = renderHook(() => useLocalForageContext())

    expect(
      result.current.localforage.supports(LocalForageDriverType.IndexedDB),
    ).toBeFalsy()

    expect(
      result.current.localforage.supports(LocalForageDriverType.WebSQL),
    ).toBeFalsy()

    expect(
      result.current.localforage.supports(LocalForageDriverType.LocalStorage),
    ).toBeTruthy()
  })

  it('get current driver', async () => {
    const { result } = renderHook(() => useLocalForageContext())

    expect(result.current.localforage.driver()).toBe(
      LocalForageDriverType.LocalStorage,
    )
  })
})

describe('test context', () => {
  it('renders without config (use default config)', async () => {
    render(<TestComponent defaultValue="hello" />)

    await screen.findByRole('name')
    expect(screen.getByRole<HTMLDivElement>('name')).toHaveTextContent(
      'localforage',
    )

    await screen.findByRole('storeName')
    expect(screen.getByRole<HTMLDivElement>('storeName')).toHaveTextContent(
      'keyvaluepairs',
    )
  })

  it('renders with config', async () => {
    render(
      <TestContainer>
        <TestComponent defaultValue="hello" />
      </TestContainer>,
    )

    await screen.findByRole('name')
    expect(screen.getByRole<HTMLDivElement>('name')).toHaveTextContent(
      config.name!,
    )

    await screen.findByRole('storeName')
    expect(screen.getByRole<HTMLDivElement>('storeName')).toHaveTextContent(
      config.storeName!,
    )
  })

  it('interact within component', async () => {
    render(
      <TestContainer>
        <TestComponent defaultValue="hello" />
      </TestContainer>,
    )

    await screen.findByRole('value')

    expect(screen.getByRole<HTMLDivElement>('value')).toHaveTextContent('hello')
    expect(screen.getByRole('update')).toBeEnabled()
    expect(screen.getByRole('remove')).toBeEnabled()

    await userEvent.click(screen.getByRole('update'))
    expect(screen.getByRole<HTMLDivElement>('value')).toHaveTextContent(
      'Hello World!',
    )

    await userEvent.click(screen.getByRole('remove'))
    expect(screen.getByRole<HTMLDivElement>('value')).toHaveTextContent('')
  })
})
