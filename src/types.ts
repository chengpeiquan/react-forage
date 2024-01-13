export enum LocalForageDriverType {
  IndexedDB = 'asyncStorage',
  WebSQL = 'webSQLStorage',
  LocalStorage = 'localStorageWrapper',
}

/**
 * Since some types are not directly exported,
 * So copy types from `typing` and export it in this package.
 * This is true for the following types.
 *
 * @description The original `driver` is `string`, replaced here with `LocalForageDriverType`
 *
 * @see https://github.com/localForage/localForage/blob/1.10.0/typings/localforage.d.ts
 */

export interface LocalForageDbInstanceOptions {
  name?: string
  storeName?: string
}

export interface LocalForageOptions extends LocalForageDbInstanceOptions {
  driver?: LocalForageDriverType | LocalForageDriverType[]
  size?: number
  version?: number
  description?: string
}

export interface LocalForageDbMethodsCore {
  getItem<T>(
    key: string,
    callback?: (err: any, value: T | null) => void,
  ): Promise<T | null>

  setItem<T>(
    key: string,
    value: T,
    callback?: (err: any, value: T) => void,
  ): Promise<T>

  removeItem(key: string, callback?: (err: any) => void): Promise<void>

  clear(callback?: (err: any) => void): Promise<void>

  length(callback?: (err: any, numberOfKeys: number) => void): Promise<number>

  key(
    keyIndex: number,
    callback?: (err: any, key: string) => void,
  ): Promise<string>

  keys(callback?: (err: any, keys: string[]) => void): Promise<string[]>

  iterate<T, U>(
    iteratee: (value: T, key: string, iterationNumber: number) => U,
    callback?: (err: any, result: U) => void,
  ): Promise<U>
}

export interface LocalForageDropInstanceFn {
  (
    dbInstanceOptions?: LocalForageDbInstanceOptions,
    callback?: (err: any) => void,
  ): Promise<void>
}

export interface TypeMethodsOptional {
  dropInstance?: LocalForageDropInstanceFn
}

// duplicating TypeMethodsOptional to preserve TS v2.0 support,
// since Partial<> isn't supported there
export interface LocalForageDbMethodsOptional {
  dropInstance: LocalForageDropInstanceFn
}

export interface LocalForageDriverDbMethods
  extends LocalForageDbMethodsCore,
    LocalForageDriverMethodsOptional {}

export interface LocalForageDriverSupportFunc {
  (): Promise<boolean>
}

export interface LocalForageDriver extends LocalForageDriverDbMethods {
  _driver: LocalForageDriverType

  _initStorage(options: LocalForageOptions): void

  _support?: boolean | LocalForageDriverSupportFunc
}

export interface LocalForageSerializer {
  serialize<T>(
    value: T | ArrayBuffer | Blob,
    callback: (value: string, error: any) => void,
  ): void

  deserialize<T>(value: string): T | ArrayBuffer | Blob

  stringToBuffer(serializedString: string): ArrayBuffer

  bufferToString(buffer: ArrayBuffer): string
}

export interface LocalForageDbMethods
  extends LocalForageDbMethodsCore,
    LocalForageDbMethodsOptional {}

export interface LocalForage extends LocalForageDbMethods {
  LOCALSTORAGE: string
  WEBSQL: string
  INDEXEDDB: string

  /**
   * Set and persist localForage options. This must be called before any other calls to localForage are made, but can be called after localForage is loaded.
   * If you set any config values with this method they will persist after driver changes, so you can call config() then setDriver()
   * @param {LocalForageOptions} options?
   */
  config(options: LocalForageOptions): boolean
  config(options: string): any
  config(): LocalForageOptions

  /**
   * Create a new instance of localForage to point to a different store.
   * All the configuration options used by config are supported.
   * @param {LocalForageOptions} options
   */
  createInstance(options: LocalForageOptions): LocalForage

  driver(): LocalForageDriverType

  /**
   * Force usage of a particular driver or drivers, if available.
   * @param {string} driver
   */
  setDriver(
    driver: LocalForageDriverType | LocalForageDriverType[],
    callback?: () => void,
    errorCallback?: (error: any) => void,
  ): Promise<void>

  defineDriver(
    driver: LocalForageDriver,
    callback?: () => void,
    errorCallback?: (error: any) => void,
  ): Promise<void>

  /**
   * Return a particular driver
   * @param {string} driver
   */
  getDriver(driver: LocalForageDriverType): Promise<LocalForageDriver>

  getSerializer(
    callback?: (serializer: LocalForageSerializer) => void,
  ): Promise<LocalForageSerializer>

  supports(driverName: LocalForageDriverType): boolean

  ready(callback?: (error: any) => void): Promise<void>
}
