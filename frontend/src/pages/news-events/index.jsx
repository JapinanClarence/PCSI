import React from 'react'
import Hero from './Hero';
import Feature from './Feature';
import { Separator } from '@/components/ui/separator';
import Publications from './Publications';
import Announcements from './Announcements';

const NewsAndEvents = () => {
  return (
    <div>
      <Hero/>
      <Publications/>
      <Feature/>
      <Announcements/>

    </div>
  )
}

export default NewsAndEvents
