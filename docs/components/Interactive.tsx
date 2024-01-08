import React, { useMemo } from 'react'
import clsx from 'clsx'
import Link, { type LinkProps } from 'next/link'
import {
  LocalForageProvider,
  useLocalForageContext,
  useLocalForageState,
} from 'react-forage'
import { randomString } from '@bassist/utils'
import { OpenNewWindowIcon, LinkIcon } from './Icons'
import { Button } from './ui/button'
import { Input } from './ui/input'

const defaultMessage = 'Hello~'
const defaultArray = ['a', 'e', 'i', 'o', 'u']

const cls = {
  wrapper: clsx('flex items-center gap-2'),
  colWrapper: clsx('flex flex-col gap-2'),
}

export const DropInstanceExample: React.FC = () => {
  const { localforage } = useLocalForageContext()

  return (
    <Button variant="outline" onClick={() => localforage.dropInstance()}>
      Drop Instance
    </Button>
  )
}

export const SerializerExample: React.FC = () => {
  const [message, setMessage] = useLocalForageState<string | undefined>(
    'use-local-forage-state-demo-3',
    {
      defaultValue: defaultMessage,
      serializer: (v) => v ?? '',
      deserializer: (v) => v,
    },
  )

  return (
    <div className={cls.wrapper}>
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

export const ArrayExample: React.FC = () => {
  const [value, setValue] = useLocalForageState<string[] | undefined>(
    'use-local-forage-state-demo-2',
    {
      defaultValue: defaultArray,
    },
  )

  return (
    <div className={cls.colWrapper}>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          onClick={() => setValue([...value, randomString().slice(-1)])}
        >
          Push Random
        </Button>

        <Button variant="outline" onClick={() => setValue(defaultArray)}>
          reset
        </Button>
      </div>
      <p>{value?.join('-')}</p>
    </div>
  )
}

export const BasicExample: React.FC = () => {
  const [message, setMessage] = useLocalForageState<string | undefined>(
    'use-local-forage-state-demo-1',
    {
      defaultValue: defaultMessage,
    },
  )

  return (
    <div className={cls.wrapper}>
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

export const ExampleList: React.FC<ContainerProps> = ({ children }) => {
  return <div className="flex flex-col w-full">{children}</div>
}

export const ExampleWrapper: React.FC<ContainerProps> = ({ children }) => {
  const cls = clsx(
    'flex flex-col gap-3 w-full box-border py-3 px-4 mt-3 rounded-xl',
    'bg-[var(--code-block-bg)]',
  )

  return <div className={cls}>{children}</div>
}

interface LinkButtonProps {
  icon?: boolean
  secondary?: boolean
  href: LinkProps['href']
  target?: '_blank'
  children: React.ReactNode
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  icon = true,
  secondary = false,
  href,
  target,
  children,
}) => {
  const variant = secondary ? 'secondary' : 'default'

  const isBlank = useMemo(() => {
    return target === '_blank'
  }, [target])

  const rel = useMemo(() => {
    return isBlank ? 'noreferrer' : undefined
  }, [isBlank])

  const currentIcon = useMemo(() => {
    if (!icon) return null
    return target ? (
      <OpenNewWindowIcon className="mr-2" />
    ) : (
      <LinkIcon className="mr-2" />
    )
  }, [icon, target])

  const cls = clsx({
    'mr-2 mt-6': secondary,
  })

  return (
    <Button asChild variant={variant} className={cls}>
      <Link href={href} target={target} rel={rel}>
        {currentIcon}
        <span className="font-bold">{children}</span>
      </Link>
    </Button>
  )
}
