import { fontBangla } from '@/app/layout';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between text-center'>
            <div className='flex-1 space-y-5'>
                <h2 className={`${fontBangla.className} text-6xl font-bold leading-18`}>Apnar sishu agami den ar <span className='text-primary'>vovissot</span></h2>
                <p>buy every toy with up to 15% discount</p>
            <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>
            <div className='flex-1'>
                <Image
                alt="buy every toy with up to 15% discount"
                 src={"/assets/hero.png"}
                width={500}
                height={400}
                ></Image>
            </div>
            
        </div>
    );
};

export default Banner;