// import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// import React from 'react';
// import { auth } from '../firebase/firebase.init';
// import { useState } from 'react';

// const googleProvider = new GoogleAuthProvider();
// const githubProvider = new GithubAuthProvider();
// githubProvider.addScope('user:email')

// const Login = () => {

//     const [user, setUser] = useState(null)

//     const handleGoogleSignIn = ()=>{
//         // console.log('google button click')
//         signInWithPopup(auth, googleProvider)
//         .then(result =>{
//             console.log(result.user);
//             setUser(result.user)
//         })
//         .catch(error =>{
//             console.log(error)
//         })
//     }

//     const handleGithubSignIn = ()=>{
//         signInWithPopup(auth, githubProvider)
//         .then(result => {
//             console.log(result.user)
//             setUser(result.user)
//         })
//         .catch(error => {
//             console.log(error)
//         })
//     }
    

//     const handleSignOut = () =>{
//         signOut(auth)
//         .then(() =>{
//             console.log('sign out done');
//             setUser(null)
//         })
//         .catch (error =>{
//             console.log(error);
//         })
//     }

//     return (
//         <div>
//             <h2> please login</h2>
//             {/* <button onClick={handleGoogleSignIn}>Sign In With Google</button>
//             <button onClick={handleSignOut}>Sign Out</button> */}
       
//         {
//             user ? 
//             <button onClick={handleSignOut}>Sign Out</button> 
//             : 
//             <>
//              <button onClick={handleGoogleSignIn}>Sign In With Google</button>
//                 <button onClick={handleGithubSignIn}> Sign in Github</button>
//             </>
//         }

//        {user && <div>
//              <h3>{user?.displayName}</h3>
//              <h5>Email: {user?.email}</h5>
//              <img src={user.photoURL} alt="" />
//         </div>}
//         </div>
//     );
// };

// export default Login;