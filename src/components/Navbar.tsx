import React, { useState } from 'react';
import { GiAbbotMeeple } from "react-icons/gi";

interface NavbarProps  {
  bgColor :string,
  txtColor :string,
  
}

const Navbar: React.FC<NavbarProps> = ({ bgColor  ,txtColor}) => {
  

  return (
    <>
    <div className='px-[10vw] py-[2vh] border-b-2' style={ { backgroundColor : bgColor , color : txtColor}}>
        <div className='flex justify-between'>
        
            <p className='text-xl flex items-center gap-[0.3rem]'> <GiAbbotMeeple />Prism Playground</p>
            <p></p>

        </div>
    </div>
      
    </>
  );
};

export default Navbar;
