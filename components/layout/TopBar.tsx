'use client'

import { navLinks } from '@/lib/constants'
import { UserButton } from '@clerk/nextjs'
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const TopBar = () => {

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const pathname = usePathname();

  return (
    <div className='sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-blue-2 shadow-xl lg:hidden'>
      <Image src='/logo.png' alt='logo' height={70} width={150} />
      <div className='flex gap-8 max-md:hidden'>
        {navLinks.map((link) => (
          <Link href={link.url} key={link.label} className={`flex gap-4 text-body-medium ${pathname===link.url ? 'text-blue-1' : 'text-gray-1'}`}><p>{link.label}</p></Link>
        ))}
      </div>
      <div className='relative flex gap-4 items-center'>
        <MenuIcon onClick={()=>setDropdownMenu(!dropdownMenu)} className='cursor-pointer md:hidden' />
          {dropdownMenu && (
            <div className='absolute top-10 right-6 flex flex-col gap-8 p-5 bg-white shadow-xl rounded-lg'>
            {navLinks.map((link) => (
              <Link href={link.url} key={link.label} className={`flex gap-4 text-body-medium ${pathname===link.url ? 'text-blue-1' : 'text-gray-1'}`}>{link.icon} <p>{link.label}</p></Link>
            ))}
          </div>
          )}
        <UserButton />
      </div>
    </div>
  )
}

export default TopBar