"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import React from 'react';

const Navbar = () => {
	const router = useRouter()
	const pathName = usePathname();
	
	
	const links= [
		{
			title:'About',
			path:'/about'
		},
	{
		   title:'Services',
			path:'/services'
	},
  {
	      title:'Contacts',
			path:'/contacts'
  },
  {
	     title:'Blogs',
	      path:'/blogs'
  }
	]
	const handler=()=>{
router.push('/about')
	}
	if(pathName.includes('dashboard'))
		return (
			<div className='bg-green-500 p-6'>
				this is conditionl layout
			</div>
		)
		
	
	return (
		<div className='bg-orange-600 px-6 py-4 flex justify-between text-white '>
			<h2 className='text-2xl'>Next Hero</h2>
 <ul className='flex justify-between  text-center space-x-4'>
	{
		links.map((link)=> <Link className={`${pathName===link.path && "text-cyan-500"}`} key={link.path} href={link.path}>{link.title}</Link>)
	}
 </ul>

 <button onClick={handler} className='border p-2'>Log In</button>
		</div>
	);
};

export default Navbar;