import React from 'react';
import { Link } from 'react-router';
import LogoImage from '../assets/logo.png';

const Logo = () => {
  return (
    <Link to="/" className='flex items-center gap-2 text-2xl font-bold'>
      <img src={LogoImage} alt="ClarityStream logo image" className='size-14'/>
      <span>Clarity<span className="text-accent drop-shadow-[0_0_8px_rgba(0,255,102,0.6)]">Stream</span></span>
    </Link>
  );
};

export default Logo;