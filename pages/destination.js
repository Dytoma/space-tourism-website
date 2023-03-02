import bgDestinationDesktop from '../public/assets/destination/background-destination-desktop.jpg';
import bgDestinationTablet from '../public/assets/destination/background-destination-tablet.jpg';
import bgDestinationMobile from '../public/assets/destination/background-destination-mobile.jpg';

import { container, navChildren, item } from '@/animation';

import moon from '../public/assets/destination/image-moon.png';
import moon2 from '../public/assets/destination/image-moon.webp';
import mars from '../public/assets/destination/image-mars.png';
import europa from '../public/assets/destination/image-europa.png';
import titan from '../public/assets/destination/image-titan.png';

import { useState } from 'react';
import { motion } from 'framer-motion'
import Image from 'next/image';

const Planet = ({ title, description, distance, time }) => {
  return (
    <div>
      <motion.div variants={container} initial='hidden' animate='show' className='lg:pb-14 mt-9 border-b- border-b-2 border-solid border-b-[#383B4B] md:mx-[7.375rem] mx-6 lg:mx-0 pb-12'>
        <div className=' overflow-hidden'>
          <motion.h1 variants={item} className='md:text-heading2 text-[3.5rem] leading-[4rem] font-bellefair text-white uppercase text-center lg:text-left'>{title}</motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.p variants={item} className='text-bodyText font-barlowCondensed text-lightViolet mt-2 lg:mt-[0.875rem] text-center lg:text-left'>{description}</motion.p>
        </div>
      </motion.div>
      <motion.div variants={container} initial='hidden' animate='show' className='lg:pt-7 pt-8 flex flex-col md:flex-row items-center justify-center lg:justify-start md:gap-20 gap-8 pb-16 md:pb-0'>
        <motion.div variants={navChildren}>
          <h4 className=' text-SubHeading2 uppercase font-barlowCondensed text-lightViolet mb-3 text-center lg:text-left'>Avg. Distance</h4>
          <h3 className=' text-heading5 uppercase text-white font-bellefair text-center lg:text-left'>{distance}</h3>
        </motion.div>
        <motion.div variants={navChildren}>
          <h4 className=' text-SubHeading2 uppercase font-barlowCondensed text-lightViolet mb-3 text-center lg:text-left'>Est. travel time</h4>
          <h3 className=' text-heading5 uppercase text-white font-bellefair text-center lg:text-left'>{time}</h3>
        </motion.div>
      </motion.div>
    </div>
  )
}

const Destination = () => {
  const [activePlanet, setActivePlanet] = useState('moon');
  return (
    <>
      <Image src={bgDestinationDesktop} alt="Home Background" className='hidden lg:block lg:fixed inset-0 w-screen h-screen right-0 -z-10 object-cover' />
      <Image src={bgDestinationTablet} alt="Home Background" className='md:fixed md:block lg:hidden hidden inset-0 w-screen h-screen right-0 -z-10 object-cover' />
      <Image src={bgDestinationMobile} alt="Home Background" className='fixed block md:hidden inset-0 w-screen h-screen right-0 -z-10 object-cove' />
      <div className='lg:pl-[10.375rem] lg:pr-[10.1875rem] lg:pt-20 md:pt-10'>
        <div className='overflow-hidden'>
          <motion.h1 className='text-navText text-center md:text-left md:text-heading5 font-barlowCondensed tracking-[0.2953em] text-white uppercase py-8 md:py-0 pl-0 md:pl-10 lg:pl-0'
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className=' opacity-25 font-bold pr-7'>01</span>
            Pick your destination
          </motion.h1>
        </div>
        <div className='flex flex-col lg:flex-row lg:mt-16 lg:gap-40 items-center lg:pl-16 lg:pb-[7.375rem]'>
          <Image src={activePlanet === 'moon' ? moon : activePlanet === 'mars' ? mars : activePlanet === 'europa' ? europa : titan} className='md:mt-16 lg:mt-0 md:mb-14 lg:mb-0 w-[170px] h-[170px] md:w-auto md:h-auto' alt='Planet' aria-live='polite' />
          <div className='lg:pr-32 pt-7 md:pt-0'>
            <motion.ul variants={container} initial='hidden' animate='show' className='flex text-navText gap-x-9 text-lightViolet font-barlowCondensed justify-center lg:justify-start'>
              <motion.li variants={navChildren} className={`pb-3 planet relative ${activePlanet === 'moon' ? 'planetActive text-white' : ''}`}>
                <button className='uppercase text-SubHeading2 md:text-navText' onClick={() => { setActivePlanet('moon') }}>Moon</button>
              </motion.li>
              <motion.li variants={navChildren} className={`pb-3 planet relative ${activePlanet === 'mars' ? 'planetActive text-white' : ''}`}>
                <button className='uppercase text-SubHeading2 md:text-navText' onClick={() => { setActivePlanet('mars') }}>Mars</button>
              </motion.li>
              <motion.li variants={navChildren} className={`pb-3 planet relative ${activePlanet === 'europa' ? 'planetActive text-white' : ''}`}>
                <button className='uppercase text-SubHeading2 md:text-navText' onClick={() => { setActivePlanet('europa') }}>Europa</button>
              </motion.li>
              <motion.li variants={navChildren} className={`pb-3 planet relative ${activePlanet === 'titan' ? 'planetActive text-white' : ''}`}>
                <button className='uppercase text-SubHeading2 md:text-navText' onClick={() => { setActivePlanet('titan') }}>Titan</button>
              </motion.li>
            </motion.ul>
            {activePlanet === 'moon' && <Planet
              title='Moon'
              description='See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
              distance='384,400 km'
              time='3 days'
            />
            }
            {activePlanet === 'mars' && <Planet
              title='Mars'
              description='Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
              distance='225 MIL. km'
              time='9 months'
            />
            }
            {activePlanet === 'europa' && <Planet
              title='Europa'
              description='The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
              distance='628 MIL. km'
              time='3 years'
            />
            }
            {activePlanet === 'titan' && <Planet
              title='Titan'
              description='The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
              distance='1.6 BIL. km'
              time='7 years'
            />
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Destination