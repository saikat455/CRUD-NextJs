"use client"


import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center bg-slate-600 px-8 py-3'>
            <Link className='text-white font-bold' href="/">CRUD</Link>
            <Link className='bg-white p-2 rounded-lg' href="/addTopic">Add Topic</Link>
        </div>
    );
};

export default Navbar;