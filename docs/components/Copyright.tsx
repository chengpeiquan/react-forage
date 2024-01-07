import React, { useMemo } from 'react'
import pkg from '../../package.json'

export const Copyright: React.FC = () => {
  const author = useMemo(() => {
    const [name] = pkg.author.split(' ')
    return name
  }, [])

  const github = useMemo(() => {
    return `https://github.com/${author}`
  }, [author])

  return (
    <span>
      {pkg.license} 2024-PRESENT ©{' '}
      <a href={github} target="_blank" rel="noreferrer">
        {author}
      </a>
      .
    </span>
  )
}
