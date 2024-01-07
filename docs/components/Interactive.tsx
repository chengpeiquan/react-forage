import React from 'react'
import { LocalForageProvider, useLocalForageState } from 'react-forage'
import { randomString } from '@bassist/utils'
import { Button } from './ui/button'
import { Input } from './ui/input'

const defaultMessage = 'Hello~'
const defaultArray = ['a', 'e', 'i', 'o', 'u']

export const SerializerExample = () => {
  const [message, setMessage] = useLocalForageState<string | undefined>(
    'use-local-forage-state-demo-3',
    {
      defaultValue: defaultMessage,
      serializer: (v) => v ?? '',
      deserializer: (v) => v,
    },
  )

  return (
    <div className="flex items-center gap-2">
      <Input
        value={message || ''}
        placeholder="Please enter some words..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button variant="outline" onClick={() => setMessage(defaultMessage)}>
        Reset
      </Button>

      <Button variant="outline" onClick={() => setMessage(undefined)}>
        Clear
      </Button>
    </div>
  )
}

export const ArrayExample = () => {
  const [value, setValue] = useLocalForageState<string[] | undefined>(
    'use-local-forage-state-demo-2',
    {
      defaultValue: defaultArray,
    },
  )

  return (
    <div className="flex flex-col gap-2">
      <p>{value?.join('-')}</p>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={() => setValue([...value, randomString().slice(-1)])}
        >
          push random
        </Button>

        <Button variant="outline" onClick={() => setValue(defaultArray)}>
          reset
        </Button>
      </div>
    </div>
  )
}

export const BasicExample = () => {
  const [message, setMessage] = useLocalForageState<string | undefined>(
    'use-local-forage-state-demo-1',
    {
      defaultValue: defaultMessage,
    },
  )

  return (
    <div className="flex items-center gap-2">
      <Input
        value={message || ''}
        placeholder="Please enter some words..."
        onChange={(e) => setMessage(e.target.value)}
      />

      <Button variant="outline" onClick={() => setMessage(defaultMessage)}>
        Reset
      </Button>

      <Button variant="outline" onClick={() => setMessage(undefined)}>
        Clear
      </Button>
    </div>
  )
}

interface ContainerProps {
  children: React.ReactNode
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <LocalForageProvider
      config={{
        name: 'react-forage-website',
        storeName: 'examples',
      }}
    >
      <div className="max-w-screen-md mx-auto">{children}</div>
    </LocalForageProvider>
  )
}

export const ExampleContainer: React.FC<ContainerProps> = ({ children }) => {
  return <div className="flex flex-col gap-6 w-full">{children}</div>
}
