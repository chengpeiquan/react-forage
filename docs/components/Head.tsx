import React from 'react'
import { useConfig } from 'nextra-theme-docs'
import {
  WEBSITE_DESCRIPTION,
  WEBSITE_HOST,
  WEBSITE_ORIGIN,
  WEBSITE_TITLE,
} from '../constants'

export const Head: React.FC = () => {
  const { title } = useConfig()

  const socialCard = `${WEBSITE_ORIGIN}/assets/og.jpg`

  return (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta name="description" content={WEBSITE_DESCRIPTION} />
      <meta name="og:description" content={WEBSITE_DESCRIPTION} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={socialCard} />
      <meta name="twitter:site:domain" content={WEBSITE_HOST} />
      <meta name="twitter:url" content={WEBSITE_ORIGIN} />
      <meta
        name="og:title"
        content={title ? title + ` – ${WEBSITE_TITLE}` : WEBSITE_TITLE}
      />
      <meta name="og:image" content={socialCard} />
      <meta name="apple-mobile-web-app-title" content={WEBSITE_TITLE} />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="icon"
        href="/favicon-dark.ico"
        media="(prefers-color-scheme: dark)"
      />
    </>
  )
}
