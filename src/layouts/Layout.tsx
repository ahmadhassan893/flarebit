import React from 'react'

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  const paddings = 'px-4 sm:px-6 md:px-8 lg:px-10 xl:px-40'
  return <div className={`max-w-[1440px] ${paddings} mx-auto`}>{children}</div>
}

export default Layout
