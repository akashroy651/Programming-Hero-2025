"use client"
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

const AuthButtons = () => {

    const session = useSession()

    console.log('session dbs', session)

//  


    return (
        <div>
            {
                session.status =="authenticated" ? (
                     <>
                <button onClick={() => signOut()} className='btn btn-primary'>Logout</button>
                </> 
                )
                : (
                     <>
                   <Link href="/login" className="btn btn-primary btn-outline">
                     Login
                    </Link>
                </>
                )
               
            }
        </div>
    );
};

export default AuthButtons;






// "use client";
// import { signOut, useSession } from "next-auth/react";
// import Link from "next/link";

// const AuthButtons = () => {
//   const { data: session, status } = useSession();

//   // ✅ IMPORTANT: loading state
//   if (status === "loading") {
//     return (
//       <button className="btn btn-primary btn-outline" disabled>
//         Loading...
//       </button>
//     );
//   }

//   if (status === "authenticated") {
//     return (
//       <button onClick={() => signOut()} className="btn btn-primary">
//         Logout
//       </button>
//     );
//   }

//   return (
//     <Link href="/login" className="btn btn-primary btn-outline">
//       Login
//     </Link>
//   );
// };

// export default AuthButtons;