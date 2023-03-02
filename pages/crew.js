import bgCrewDesktop from '../public/assets/crew/background-crew-desktop.jpg';
import bgCrewTablet from '../public/assets/crew/background-crew-desktop.jpg';
import bgCrewMobile from '../public/assets/crew/background-crew-mobile.jpg';

import commander from '../public/assets/crew/image-douglas-hurley.png';
import specialist from '../public/assets/crew/image-mark-shuttleworth.png';
import pilot from '../public/assets/crew/image-victor-glover.png';
import engineer from '../public/assets/crew/image-anousheh-ansari.png';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

import { container, itemBtn } from '@/animation';

const Member = ({ role, name, roleDesc }) => {
    return (
        <motion.div variants={container} initial='hidden' animate='show' className='md:mx-48 lg:mx-0 text-center lg:text-left mt-16 lg:mt-0'>
            <div className="overflow-hidden">
                <motion.h3 variants={itemBtn} className='uppercase text-navText md:text-heading4 text-white opacity-50 font-bellefair'>{role}</motion.h3>
            </div>
            <div className="overflow-hidden mt-4 mb-7">
                <motion.h2 variants={itemBtn} className='uppercase md:text-heading3 text-white font-bellefair text-2xl'>{name}</motion.h2>
            </div>
            <div className="overflow-hidden">
                <motion.p variants={itemBtn} className=' text-base md:text-bodyText text-lightViolet font-barlowCondensed lg:pr-60'>{roleDesc}</motion.p>
            </div>
        </motion.div>
    )
}

const Crew = () => {
    const [individual, setIndividual] = useState('commander')
    return (
        <>
            <Image src={bgCrewDesktop} alt="Home Background" className='hidden lg:block lg:fixed inset-0 w-screen h-screen right-0 -z-10 object-cover' />
            <Image src={bgCrewTablet} alt="Home Background" className='md:fixed md:block lg:hidden hidden inset-0 w-screen h-screen right-0 -z-10 object-cover' />
            <Image src={bgCrewMobile} alt="Home Background" className='fixed block md:hidden inset-0 w-screen h-screen right-0 -z-10 object-cover' />
            <div className="flex items-center flex-col-reverse md:gap-0 md:flex-col lg:flex-row lg:gap-20 mt-6 md:mt-16 lg:ml-[10.375rem] lg:mr-[8.625rem]">
                <div className='mb-10 lg:mb-0 border-t-2 border-[#383B4B] md:border-none mx-6 md:mx-0 pt-8 md:pt-0'>
                    <div className='overflow-hidden lg:mb-[9.625rem]'>
                        <motion.h1 className='text-navText text-center md:text-left md:text-heading5 font-barlowCondensed tracking-[0.2953em] text-white uppercase md:pl-10 lg:pl-0'
                            initial={{ y: '100%' }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <span className=' opacity-25 font-bold pr-7'>02</span>
                            Meet your crew
                        </motion.h1>
                    </div>
                    {individual === 'commander' && <Member
                        role='Commander'
                        name='Douglas Hurley'
                        roleDesc='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
                    />}
                    {individual === 'specialist' && <Member
                        role='Mission Specialist '
                        name='MARK SHUTTLEWORTH'
                        roleDesc='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
                    />}
                    {individual === 'pilot' && <Member
                        role='pilot'
                        name='Victor Glover'
                        roleDesc='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. '
                    />}
                    {individual === 'engineer' && <Member
                        role='Flight Engineer'
                        name='Anousheh Ansari'
                        roleDesc='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. '
                    />}
                    <motion.div variants={container} initial='hidden' whileInView='show' className='flex gap-6 mt-10 lg:mt-[5.5rem] pb-6 justify-center lg:justify-start'>
                        <motion.button variants={itemBtn} className={`w-4 h-4 bg-white rounded-full ${individual === 'commander' ? 'opacity-100' : 'opacity-20'}`} aria-label='commander' onClick={() => { setIndividual('commander') }}></motion.button>
                        <motion.button variants={itemBtn} className={`w-4 h-4 bg-white rounded-full ${individual === 'specialist' ? 'opacity-100' : 'opacity-20'}`} aria-label='Mission Specialist' onClick={() => { setIndividual('specialist') }}></motion.button>
                        <motion.button variants={itemBtn} className={`w-4 h-4 bg-white rounded-full ${individual === 'pilot' ? 'opacity-100' : 'opacity-20'}`} aria-label='pilot' onClick={() => { setIndividual('pilot') }}></motion.button>
                        <motion.button variants={itemBtn} className={`w-4 h-4 bg-white rounded-full ${individual === 'engineer' ? 'opacity-100' : 'opacity-20'}`} aria-label='Flight Engineer' onClick={() => { setIndividual('engineer') }}></motion.button>
                    </motion.div>
                </div>
                <Image src={individual === 'commander' ? commander : individual === 'specialist' ? specialist : individual === 'pilot' ? pilot : engineer} className={`md:border-b-2 md:border-[#383B4B] lg:border-none ${individual === 'commander' || individual === 'specialist' ? ' w-[153.92px] h-[222px]' : individual === 'pilot' ? 'w-[180.73px] h-[222px]' : 'w-[226.15px] h-[223px]'} md:w-auto md:h-auto`} alt="Crew Member" aria-live='polite'/>
            </div>
        </>
    )
}

export default Crew