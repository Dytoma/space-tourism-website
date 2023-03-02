import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css';

import homeBgDesktop from '../public/assets/home/background-home-desktop.jpg';
import homeBgTablet from '../public/assets/home/background-home-mobile.jpg';
import homeBgMobile from '../public/assets/home/background-home-tablet.jpg';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { container, item } from '@/animation';


const inter = Inter({ subsets: ['latin'] })

// w - [28.125rem]
export default function Home() {
  return (
    <>
      <Image src={homeBgDesktop} alt="Home Background" className='hidden lg:block lg:fixed inset-0 w-screen h-screen right-0 -z-10 object-cover' />
      <Image src={homeBgTablet} alt="Home Background" className='md:fixed md:block lg:hidden hidden inset-0 w-screen h-screen right-0 -z-10 object-cover' />
      <Image src={homeBgMobile} alt="Home Background" className='fixed block md:hidden inset-0 w-screen h-screen right-0 -z-10 object-cover' />
      <div className="flex flex-col items-center lg:flex-row lg:px-[10.3125rem] pt-12 md:pt-64 lg:justify-between lg:items-end lg:gap-[24.125rem] md:gap-[9.75rem] lg:pb-32">
        <motion.div className='flex gap-4 md:gap-6 flex-col md:px-[10rem] lg:px-0 items-center lg:items-start'
          variants={container}
          initial="hidden"
          animate="show"
        >
          <div className='overflow-hidden'>
            <motion.h5 variants={item} className='md:text-heading5 text-navText font-barlowCondensed text-lightViolet uppercase tracking-[0.295em]'>So, you want to travel to</motion.h5>
          </div>
          <div className='overflow-hidden'>
            <motion.h1 variants={item} className='md:text-heading1 font-bellefair text-white uppercase text-[5rem] leading-[6.25rem]'>Space</motion.h1>
          </div>
          <div className='overflow-hidden'>
            <motion.p variants={item} className='text-bodyText font-barlowCondensed text-lightViolet lg:pr-36 text-center lg:text-left md:px-24 lg:pl-0'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</motion.p>
          </div>
        </motion.div>
        <div className='mt-20 md:mt-0'>
          <Link href='/destination' >
            <motion.button className='lg:px-16 px-7 md:px-12 grid aspect-square place-items-center relative bg-white rounded-full md:text-heading4 uppercase font-bellefair explore text-[1.25rem] leading-[1.4375rem]'
              initial={{opacity: 0}}
              animate={{opacity: 1, y: [40, 0]}}
              transition={{duration: 0.3, ease: 'easeInOut'}}
            >Explore</motion.button>
          </Link>
        </div>
      </div>
    </>
  )
}
