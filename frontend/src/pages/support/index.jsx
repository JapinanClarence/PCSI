import React from 'react'
import Hero from '@/components/common/SubPageHero';
import Header from './Header';
import Closing from './closing';
import Merchandise from './merchandise';
export default function Support() {
  return (
    <div>
      <Hero/>
      <Header/>
      <Merchandise/>
      <Closing/>
    </div>
  )
}
