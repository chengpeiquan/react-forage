import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { WEBSITE_HOST, WEBSITE_ORIGIN, WEBSITE_TITLE } from '../constants'

export const Head: React.FC = () => {
  const { route, ...others } = useRouter()
  const { title } = useConfig()

  console.log(route, others)

  const socialCard =
    route === '/' || !title
      ? `${WEBSITE_ORIGIN}/og.jpg`
      : `${WEBSITE_ORIGIN}/api/og?title=${title}`

  return (
    <>
      <meta name="msapplication-TileColor" content="#fff" />
      <meta name="theme-color" content="#fff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Create reusable React Tailwind CSS components."
      />
      <meta
        name="og:description"
        content="Create reusable React Tailwind CSS components."
      />
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
      <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      <link rel="icon" href="/favicon.png" type="image/png" />
      <link
        rel="icon"
        href="/favicon-dark.svg"
        type="image/svg+xml"
        media="(prefers-color-scheme: dark)"
      />
      <link
        rel="icon"
        href="/favicon-dark.png"
        type="image/png"
        media="(prefers-color-scheme: dark)"
      />
    </>
  )
}
