import Link from 'next/link'
import React from 'react';

const Header = () => {
  return (
    <div className='flex items-center content-between gap-x-4 bg-slate-400 px-8 py-4 '>
      <div className="min-w-[200px] text-white text-2xl ">
        <Link href="/" >All 12 Concepts</Link>
      </div>
      <ul className='flex items-center content-start gap-x-4 w-full justify-end '>
        <li><Link href="/" >Home</Link></li>
        <li><Link href="/posts" >Posts</Link></li>
      </ul>
    </div>
  );
};

export default Header;