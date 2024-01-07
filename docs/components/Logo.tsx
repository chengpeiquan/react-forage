import React from 'react'
import { WEBSITE_TITLE } from '../constants'
import { useLogo } from '../hooks/data-hooks'

export const Logo: React.FC = () => {
  const { logo } = useLogo()

  return (
    <div className="flex items-center gap-3">
      <img
        className="flex flex-shrink-0 w-6 rounded select-none pointer-events-none"
        src={logo}
        alt={WEBSITE_TITLE}
      />
      <span className="luster">{WEBSITE_TITLE}</span>
    </div>
  )
}
