import Link from 'next/link';
import React from 'react';
import { BiError } from "react-icons/bi";

const Error404 = () => {
    return (
        <div className='flex flex-col min-h-screen justify-center items-center space-y-4'>
            <BiError size={100} className='text-primary' />
            <h2 className='text-4xl font-bold'>Page Not Found</h2>
            <Link href={"/"} className='btn font-bold'>Go To Home</Link>
        </div>
    );
};

export default Error404;