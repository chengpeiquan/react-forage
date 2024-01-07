import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { WEBSITE_DESCRIPTION, WEBSITE_TITLE } from '../constants'
import { useAppearance, useLogo } from '../hooks/data-hooks'
import { Button } from './ui/button'

export const Hero: React.FC = () => {
  const { isDark } = useAppearance()
  const { logo } = useLogo()

  const [apertureVisible, setApertureVisible] = useState(false)

  useEffect(() => {
    setApertureVisible(isDark)
  }, [isDark])

  return (
    <div className="flex flex-col items-center gap-20 w-full text-center my-32">
      <div className="flex flex-col luster">
        <div className="w-48 h-48 mx-auto select-none">
          <img
            className="w-full h-full pointer-events-none"
            src={logo}
            alt=""
          />
        </div>
        <h2 className="font-bold headline mb-8">{WEBSITE_TITLE}</h2>
        <p className="max-w-80 lg:max-w-96 mx-auto text-sm lg:text-base select-none">
          {WEBSITE_DESCRIPTION}
        </p>
      </div>

      {apertureVisible && <div className="aperture" />}

      <Button asChild>
        <Link href="/getting-started">
          <span className="font-bold">Get Started</span>
        </Link>
      </Button>
    </div>
  )
}
