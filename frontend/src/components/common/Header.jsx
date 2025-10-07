import React from 'react'

const Header = ({children}) => {
  return (
    <div className="text-xl md:text-3xl font-bold font-serif mb-5">
      {children}
    </div>
  )
}

export default Header
