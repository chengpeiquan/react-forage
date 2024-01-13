import { expect } from 'vitest'
import { type TestingLibraryMatchers } from '@testing-library/jest-dom/matchers'

// declare module 'vitest' {
//   interface Assertion<T = any>
//     extends jest.Matchers<void, T>,
//       TestingLibraryMatchers<T, void> {}
// }

declare global {
  namespace jest {
    interface Matchers<R = void>
      extends TestingLibraryMatchers<typeof expect.stringContaining, R> {}
  }
}
