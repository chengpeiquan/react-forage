import localforage from 'localforage'
import React, { createContext, useContext } from 'react'
import { type LocalForage } from './types'

export interface LocalForageProviderProps {
  config?: LocalForageOptions
  children: React.ReactNode
}

export interface LocalForageContextProps
  extends Omit<LocalForageProviderProps, 'children'> {
  localforage: LocalForage
}

export const LocalForageContext = createContext<LocalForageContextProps>({
  config: {},
  localforage: localforage as LocalForage,
})

export const LocalForageProvider: React.FC<LocalForageProviderProps> = ({
  config = {},
  children,
}) => {
  const instance = localforage.createInstance(config) as LocalForage

  return (
    <LocalForageContext.Provider
      value={{
        config,
        localforage: instance,
      }}
    >
      {children}
    </LocalForageContext.Provider>
  )
}

export function useLocalForageContext() {
  const ctx = useContext(LocalForageContext)
  return ctx
}
