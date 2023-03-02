import bgTechnologyDesktop from '../public/assets/technology/background-technology-desktop.jpg';
import bgTechnologyTablet from '../public/assets/technology/background-technology-tablet.jpg';
import bgTechnologyMobile from '../public/assets/technology/background-technology-mobile.jpg';

import vehicle from '../public/assets/technology/image-launch-vehicle-landscape.jpg';
import spaceport from '../public/assets/technology/image-spaceport-landscape.jpg';
import capsule from '../public/assets/technology/image-space-capsule-landscape.jpg';

import vehicle1 from '../public/assets/technology/image-launch-vehicle-portrait.jpg';
import spaceport1 from '../public/assets/technology/image-spaceport-portrait.jpg';
import capsule1 from '../public/assets/technology/image-space-capsule-portrait.jpg';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

import { container, navChildren, item } from '@/animation';

const Tech = ({ title, description }) => {
    return (
        <motion.div variants={container} initial='hidden' animate='show' className='text-center lg:text-left px-6 md:px-0 mb-14 md:mb-0'>
            <div className="overflow-hidden">
                <motion.h4 variants={item} className='md:text-navText text-SubHeading2 text-lightViolet uppercase font-barlowCondensed '>THE TERMINOLOGY…</motion.h4>
            </div>
            <div className="overflow-hidden mb-4">
                <motion.h3 variants={item} className='md:text-heading3 text-2xl leading-7 uppercase text-white font-bellefair my-4 lg:mt-3'>{title}</motion.h3>
            </div>
            <div className="overflow-hidden">
                <motion.p variants={item} className='md:text-bodyText text-base font-barlowCondensed text-lightViolet lg:pr-36 md:mx-[12rem] lg:mx-0'>{description}</motion.p>
            </div>
        </motion.div>
    )
}

const Technology = () => {
    const [techActive, setTechActive] = useState('vehicle');
    return (
        <>
            <Image src={bgTechnologyDesktop} alt="Home Background" className='hidden lg:block lg:fixed inset-0 w-screen h-screen right-0 -z-10 object-cover' />
            <Image src={bgTechnologyTablet} alt="Home Background" className='md:fixed md:block lg:hidden hidden inset-0 w-screen h-screen right-0 -z-10 object-cover' />
            <Image src={bgTechnologyMobile} alt="Home Background" className='fixed block md:hidden inset-0 w-screen h-screen right-0 -z-10 object-cover' />
            <div className="lg:pl-[10.375rem]">
                <div className='overflow-hidden mb-7'>
                    <motion.h1 className='text-navText text-center md:text-left md:text-heading5 font-barlowCondensed tracking-[0.2953em] text-white uppercase lg:mt-[4.75rem] md:pl-10 lg:pl-0'
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <span className=' opacity-25 font-bold pr-7'>03</span>
                        Space launch 101
                    </motion.h1>
                </div>
                <div className='flex flex-col-reverse lg:flex-row justify-between gap-9 md:gap-14 lg:gap-[8.125rem] items-center lg:mb-[6.25rem]'>
                    <div className='flex flex-col lg:flex-row gap-11 lg:gap-20'>
                        <div>
                            <motion.ul variants={container} initial='hidden' animate='show' className='flex flex-row justify-center lg:justify-start lg:flex-col gap-8'>
                                <li className=' overflow-hidden'>
                                    <motion.button variants={item} className={`lg:py-[1.375rem] lg:px-9 md:px-[1.625rem] md:py-4 px-4 py-[0.6875rem]   text-navText md:text-heading4 ${techActive === 'vehicle' ? 'bg-white text-black' : 'text-white'} font-bellefair rounded-full border-[1px] border-white`}
                                        onClick={() => { setTechActive('vehicle') }}
                                    >1
                                    </motion.button>
                                </li>
                                <li className=' overflow-hidden'>
                                    <motion.button variants={item} className={`lg:py-6 lg:px-9 md:px-[1.625rem] md:py-4 px-4 py-[0.6875rem]   text-navText md:text-heading4 font-bellefair rounded-full border-[1px] ${techActive === 'spaceport' ? 'bg-white text-black' : 'text-white'} border-white`}
                                        onClick={() => { setTechActive('spaceport') }}
                                    >2</motion.button>
                                </li>
                                <li className=' overflow-hidden'>
                                    <motion.button variants={item} className={`lg:py-6 lg:px-9 md:px-[1.625rem] md:py-4 px-4 py-[0.6875rem]   text-navText md:text-heading4 font-bellefair rounded-full border-[1px] ${techActive === 'capsule' ? 'bg-white text-black' : 'text-white'} border-white`}
                                        onClick={() => { setTechActive('capsule') }}
                                    >3</motion.button>
                                </li>
                            </motion.ul>
                        </div>
                        <div>
                            {techActive === 'vehicle' &&
                                <Tech
                                    title='LAUNCH VEHICLE'
                                    description="A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth' s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
                                />
                            }
                            {techActive === 'spaceport' &&
                                <Tech
                                    title='SPACEPORT'
                                    description="A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
                                />
                            }
                            {techActive === 'capsule' &&
                                <Tech
                                    title='SPACE CAPSULE'
                                    description="A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
                                />
                            }
                        </div>
                    </div>
                    <Image src={techActive === 'vehicle' ? vehicle1 : techActive === 'spaceport' ? spaceport1 : capsule1} className='hidden lg:block' alt='Engine used' aria-live='polite' />
                    <Image src={techActive === 'vehicle' ? vehicle : techActive === 'spaceport' ? spaceport : capsule} className='md:h-[310px] w-full lg:hidden' alt='Engine used' aria-live='polite' />
                </div>
            </div>
        </>
    )
}

export default Technology