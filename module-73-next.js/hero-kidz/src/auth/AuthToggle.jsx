// "use client";

// import { signIn } from "next-auth/react"
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function AuthToggle() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");


// //

//   const router = useRouter();
// const searchParams = useSearchParams();
// const callbackUrl = searchParams.get("callbackUrl") || "/";

// //

//   const handleSubmit =async (e) => {
//     e.preventDefault();
//    const result =await signIn("credentials", {email:email, password:password, redirect: false,})
//     if (isLogin) {
//       alert(`Logging in: ${email}`);
//       console.log({ email, password });
//         router.push(callbackUrl);
//     } else {
//       alert(`Registering: ${name}`);
//       console.log({ name, email, password });
//           router.push(callbackUrl);

//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
//       {/* Toggle Buttons */}
//       <div className="flex mb-6">
//         <button
//           onClick={() => setIsLogin(true)}
//           className={`flex-1 py-2 rounded-t ${
//             isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           Login
//         </button>
//         <button
//           onClick={() => setIsLogin(false)}
//           className={`flex-1 py-2 rounded-t ${
//             !isLogin ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
//           }`}
//         >
//           Register
//         </button>
//       </div>

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         {!isLogin && (
//           <>
//             <label className="mb-1">Full Name</label>
//             <input
//               type="text"
//               placeholder="Enter your full name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </>
//         )}

//         <label className="mb-1">Email</label>
//         <input
//           type="email"
//           placeholder="Enter your email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <label className="mb-1">Password</label>
//         <input
//           type="password"
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border rounded px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
//         >
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// }
















// "use client";

// import { signIn } from "next-auth/react";
// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function AuthToggle() {
//   const [isLogin, setIsLogin] = useState(true);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const callbackUrl = searchParams.get("callbackUrl") || "/";

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     // 👉 LOGIN
//     if (isLogin) {
//       const result = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (result?.error) {
//         setError("Invalid email or password");
//         return;
//       }

//       router.push(callbackUrl);
//       return;
//     }

//     // 👉 REGISTER
//     const res = await fetch("/api/register", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, password }),
//     });

//     if (!res.ok) {
//       setError("User already exists");
//       return;
//     }

//     // auto login after register
//     await signIn("credentials", {
//       email,
//       password,
//       redirect: false,
//     });

//     router.push(callbackUrl);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
//       {/* Toggle */}
//       <div className="flex mb-6">
//         <button
//           onClick={() => setIsLogin(true)}
//           className={`flex-1 py-2 ${
//             isLogin ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           Login
//         </button>
//         <button
//           onClick={() => setIsLogin(false)}
//           className={`flex-1 py-2 ${
//             !isLogin ? "bg-blue-600 text-white" : "bg-gray-200"
//           }`}
//         >
//           Register
//         </button>
//       </div>

//       {/* Error */}
//       {error && <p className="text-red-500 mb-3">{error}</p>}

//       {/* Form */}
//       <form onSubmit={handleSubmit} className="flex flex-col">
//         {!isLogin && (
//           <input
//             placeholder="Full Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="border px-3 py-2 mb-3"
//           />
//         )}

//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           className="border px-3 py-2 mb-3"
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           className="border px-3 py-2 mb-4"
//         />

//         <button className="bg-blue-600 text-white py-2 rounded">
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// }














// "use client";
// import { useState } from "react";

// export default function AuthToggle() {
//   const [isLogin, setIsLogin] = useState(true);

//   return (
//     <div className="max-w-md w-full p-6 bg-white rounded shadow">
//       <div className="flex mb-6">
//         <button
//           onClick={() => setIsLogin(true)}
//           className={`flex-1 py-2 ${isLogin ? "bg-blue-600 text-white" : "bg-gray-200"}`}
//         >
//           Login
//         </button>
//         <button
//           onClick={() => setIsLogin(false)}
//           className={`flex-1 py-2 ${!isLogin ? "bg-blue-600 text-white" : "bg-gray-200"}`}
//         >
//           Register
//         </button>
//       </div>

//       <form>
//         {!isLogin && <input placeholder="Name" className="input input-bordered w-full mb-3" />}
//         <input placeholder="Email" className="input input-bordered w-full mb-3" />
//         <input placeholder="Password" type="password" className="input input-bordered w-full mb-3" />
//         <button className="btn btn-primary w-full">
//           {isLogin ? "Login" : "Register"}
//         </button>
//       </form>
//     </div>
//   );
// }






///        new set 






"use client";

import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { SocialButtons } from "./SocialButton";

const AuthToggle = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card w-full max-w-sm shadow-xl bg-base-100">
        <div className="card-body">
          {isLogin ? (
            <>
              <LoginForm />
              <SocialButtons></SocialButtons>
              <p className="text-center text-sm mt-4">
                Don&apos;t have an account?{" "}
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-error font-medium"
                >
                  Register
                </button>
              </p>
            </>
          ) : (
            <>
              <RegisterForm />
                <SocialButtons></SocialButtons>
              <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-error font-medium"
                >
                  Login
                </button>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthToggle;

