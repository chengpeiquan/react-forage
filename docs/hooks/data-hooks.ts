import { useMemo } from 'react'
import { useTheme } from 'nextra-theme-docs'
import { isServer } from '@bassist/utils'
import { WEBSITE_LOGO_STARTSWITH } from '../constants'

export function useAppearance() {
  const { resolvedTheme } = useTheme()

  const isDark = useMemo(() => {
    if (isServer) return true
    return resolvedTheme === 'dark'
  }, [resolvedTheme])

  return {
    isDark,
  }
}

export function useLogo() {
  const logo = `/assets/${WEBSITE_LOGO_STARTSWITH}.png`

  return {
    logo,
  }
}
