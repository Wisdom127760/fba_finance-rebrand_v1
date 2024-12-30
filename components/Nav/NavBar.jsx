import * as React from 'react'

const navigationItems = [
  { label: 'About', href: '#' },
  { label: 'Features', href: '#' },
  { label: 'Contact Us', href: '#' }
]

export default function NavigationBar() {
  return (
    <nav className='z-10 flex w-full flex-wrap items-center justify-between gap-5 self-start px-40 py-40 text-base text-white max-md:max-w-full'>
      <img
        loading='lazy'
        src='assets/icons/logo_coloured_&_white.svg'
        alt='FBA Finance Company Logo'
        height={50}
        className='mr-2'
      />
      <div className='my-auto flex items-center justify-center gap-10 self-stretch text-center font-normal max-md:max-w-full'>
        {navigationItems.map(item => (
          <a
            key={item.label}
            href={item.href}
            className='my-auto self-stretch font-display text-base hover:text-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'
            tabIndex='0'
          >
            {item.label}
          </a>
        ))}
      </div>
      <button className='navBtn rounded-lg bg-blue-600 px-6 py-2 font-display text-base text-white transition-colors hover:bg-blue-700'>
        Get Started
      </button>
    </nav>
  )
}
