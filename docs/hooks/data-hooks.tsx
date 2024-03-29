import React, { useMemo } from 'react'
import { useConfig, useTheme } from 'nextra-theme-docs'
import { isServer } from '@bassist/utils'
import {
  WEBSITE_DESCRIPTION,
  WEBSITE_HOST,
  WEBSITE_LOGO_STARTSWITH,
  WEBSITE_ORIGIN,
  WEBSITE_TITLE,
} from '../constants'

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

export function useHead() {
  const { title } = useConfig()
  const { isDark } = useAppearance()

  const socialCard = `${WEBSITE_ORIGIN}/assets/og.jpg`

  const favicon = useMemo(() => {
    if (isDark) return '/favicon-dark.ico'
    return '/favicon.ico'
  }, [isDark])

  return (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <meta name="og:description" content={WEBSITE_DESCRIPTION} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image:src" content={socialCard} />
      <meta name="twitter:site:domain" content={WEBSITE_HOST} />
      <meta name="twitter:url" content={WEBSITE_ORIGIN} />
      <meta
        name="og:title"
        content={title ? title + ` – ${WEBSITE_TITLE}` : WEBSITE_TITLE}
      />
      <meta name="og:image" content={socialCard} />
      <meta name="apple-mobile-web-app-title" content={WEBSITE_TITLE} />
      <link rel="icon" href={favicon} />
    </>
  )
}
