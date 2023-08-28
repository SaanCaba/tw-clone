import React from 'react'

function BoxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-darkgray p-4 grid gap-3 rounded-[16px]'>{children}</div>
  )
}

export default BoxLayout
