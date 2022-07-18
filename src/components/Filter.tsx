import React from 'react'
import Categories from './Categories'
import Search from './Search'

const Filter = () => {
  return (
    <div className='flex justify-between my-10'>
        <Search />
        <Categories />
    </div>
  )
}

export default Filter