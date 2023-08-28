import React from 'react'

const tendencies = [
  {
    section: 'Deportes',
    title: 'Newcastle United vs Liverpool FC',
    id: 1
  },
  { section: 'Argentina', title: 'Rapallini', id: 2 },
  {
    section: 'Deportes',
    title: '#FIBAWorldCup2023',
    id: 3
  },
  {
    section: 'Argentina',
    title: 'Messi',
    id: 4
  },
  {
    section: 'Deportes',
    title: 'Selección Argentina',
    id: 5
  }
]

function Tendencies() {
  return (
    <div className='flex flex-col'>
      {tendencies.map((tendencie) => {
        return (
          <div
            key={tendencie.id}
            className='flex flex-col p-2 transition-all duration-300 hover:bg-white/10 cursor-pointer rounded-lg'
          >
            <span className='text-gray-600'>{tendencie.section}</span>
            <span className='font-bold'>{tendencie.title}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Tendencies
