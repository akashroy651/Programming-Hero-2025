"use client"
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Swal from 'sweetalert2';

export const SocialButtons = () => {

const searchParams = useSearchParams();
console.log(searchParams.get("callbackUrl") || "")
    const handleSignin = async()=> {
        const result = await signIn("google", {
            redirect: "false",
            callbackUrl: searchParams.get("callbackUrl") || "/",
        })
        if (result.ok) {
            Swal.fire("success", "Welcome", "Success" );
        }else{
            Swal.fire("error", "Sorry", "error" );
        }

        console.log("hi - result",result)
    }


    return (
        <div className='flex gap-3 mt-4'>
            <button onClick={handleSignin} className='btn btn-outline btn-error flex-1'>
                <FaGoogle className='text-lg'/>
                    Google
                {/* </FaGoogle> */}
            </button>
        </div>
    );
};

