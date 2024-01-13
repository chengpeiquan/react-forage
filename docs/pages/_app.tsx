import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { createBaiduAnalytics } from '@web-analytics/core'
import { BAIDU_ANALYTICS_ID } from '../constants'
import '../styles/globals.css'
import '../styles/custom.css'
import type { AppProps } from 'next/app'

const baiduAnalytics = createBaiduAnalytics({
  websiteId: BAIDU_ANALYTICS_ID,
})

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()

  useEffect(() => {
    baiduAnalytics.trackPageview({
      pageUrl: asPath,
    })
  }, [asPath])

  return <Component {...pageProps} />
}

export default MyApp
