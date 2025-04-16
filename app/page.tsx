import HeroBlock from '@/blocks/hero-block/HeroBlock';
import FooterBar from '@/components/footer-bar/FooterBar';
import NavigationBar from '@/components/navigation-bar/NavigationBar';
import React from 'react'

const Rootpage = () => {
  return <div className='flex flex-col items-stretch'>
  
  <NavigationBar/>
  <HeroBlock/>
  <div className='h-48 bg-purple-500'/>
  <div className='h-28 bg-green-500'/>
  <FooterBar/>

  </div>


};

export default Rootpage;