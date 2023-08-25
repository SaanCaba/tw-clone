import Image from 'next/image'
import React from 'react'

interface Props {
  avatar: string
}

function Avatar({ avatar }: Props) {
  return (
    <Image
      src={avatar}
      alt='Avatar'
      width={55}
      height={55}
      className='rounded-full'
    />
  )
}

export default Avatar
