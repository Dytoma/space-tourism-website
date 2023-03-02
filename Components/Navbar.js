import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import logo from '../public/assets/shared/logo.svg';
import menuIcon from '../public/assets/shared/icon-hamburger.svg';
import closeIcon from "../public/assets/shared/icon-close.svg";

import { container, navChildren } from "@/animation";

import { useState } from "react";

const NavbarLink = ({ link, pageNumber, linkName }) => {
  return (
    <Link href={link} className="flex items-center gap-3">
      <span className="md:hidden lg:inline-block font-barlowCondensed text-navText font-bold text-white">{pageNumber}</span>
      <p className=" font-barlowCondensed text-navText text-white uppercase">{linkName}</p>
    </Link>
  )
}

const MobileMenu = ({ setMobileMenu }) => {
  return (
    <div className="pl-8 pr-[26px] pt-8 w-2/3 md:hidden bg-['hsla(0, 0%, 100%, 0.04)'] backdrop-blur-2xl z-10 fixed top-0 right-0 h-screen animate-slideright">
      <div className="flex justify-end items-end">
        <Image src={closeIcon} alt='Close menu' onClick={() => {
          setMobileMenu(false);
        }} />
      </div>
      <div className="mt-16">
        <motion.ul variants={container} initial='hidden' animate='show' className="flex flex-col items-start gap-8">
          <motion.li variants={navChildren} onClick={() => {
            setMobileMenu(false);
          }}>
            <NavbarLink link='/' pageNumber='00' linkName='Home' />
          </motion.li>
          <motion.li variants={navChildren} onClick={() => {
            setMobileMenu(false);
          }}>
            <NavbarLink link='/destination' pageNumber='01' linkName='Destination' />
          </motion.li>
          <motion.li variants={navChildren} onClick={() => {
            setMobileMenu(false);
          }}>
            <NavbarLink link='/crew' pageNumber='02' linkName='Crew' />
          </motion.li>
          <motion.li variants={navChildren} onClick={() => {
            setMobileMenu(false);
          }}>
            <NavbarLink link='/technology' pageNumber='03' linkName='Technology' />
          </motion.li>
        </motion.ul>
      </div>
    </div>
  )
}

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const router = useRouter();
  return (
    <motion.div className="flex items-center justify-between md:pr-0 relative line md:py-0 lg:pr-0 lg:pb-0 lg:mt-10 lg:pl-14 md:pl-10 p-6"
      initial={{ opacity: 0 }}
      animate={{ y: [20, 0], opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeInOut', delay: 0.3 }}
    >
      <div>
        <Image src={logo} alt='Logo' className="md:w-[48px] md:h-[48px] w-10 h-10" />
      </div>
      <div>
        <Image src={menuIcon} alt='Open Menu' className="md:hidden" onClick={() => {
          setMobileMenuOpen(true);
        }} />
        {mobileMenuOpen && <MobileMenu setMobileMenu={setMobileMenuOpen} />}
      </div>
      <div className="lg:pl-[7.6875rem] lg:pr-[10.3125rem] lg:py-10 bg-['hsla(0, 0%, 100%, 0.04)'] backdrop-blur-2xl md:px-12 md:py-10 hidden md:block">
        <motion.ul className="flex items-center lg:gap-12 md:gap-9"
          variants={container}
          initial='hidden'
          animate='show'
        >
          <motion.li variants={navChildren} className={`relative navLink-hover ${router.pathname === '/' ? 'active' : ''}`} >
            <NavbarLink link='/' pageNumber='00' linkName='Home' />
          </motion.li>
          <motion.li variants={navChildren} className={`relative navLink-hover ${router.pathname === '/destination' ? 'active' : ''}`} >
            <NavbarLink link='/destination' pageNumber='01' linkName='Destination' />
          </motion.li>
          <motion.li variants={navChildren} className={`relative navLink-hover ${router.pathname === '/crew' ? 'active' : ''}`} >
            <NavbarLink link='/crew' pageNumber='02' linkName='Crew' />
          </motion.li>
          <motion.li variants={navChildren} className={`relative navLink-hover ${router.pathname === '/technology' ? 'active' : ''}`} >
            <NavbarLink link='/technology' pageNumber='03' linkName='Technology' />
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  )
}

export default Navbar;
