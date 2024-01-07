import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { WEBSITE_DESCRIPTION, WEBSITE_TITLE } from '../constants'
import { useAppearance, useLogo } from '../hooks/data-hooks'

export const Hero: React.FC = () => {
  const { isDark } = useAppearance()
  const { logo } = useLogo()

  const [apertureVisible, setApertureVisible] = useState(false)

  useEffect(() => {
    setApertureVisible(isDark)
  }, [isDark])

  const btnCls = clsx(
    'flex flex-shrink-0 items-center justify-center',
    'rounded-lg lg:w-[200px] max-w-full h-12 lg:h-14 px-6',
    'text-base lg:text-xl',
    '!text-white dark:!text-black font-bold',
    'bg-slate-900 hover:bg-slate-700',
    'dark:bg-zinc-100 dark:highlight-white/20 dark:hover:bg-zinc-200',
    'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ',
    'cursor-pointer !no-underline',
  )

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
    </div>
  )
}
