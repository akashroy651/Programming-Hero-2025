// "use client";

// import { useState } from "react";
// import Link from "next/link";

// const LoginForm = () => {
//   const [form, setForm] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-base-200">
//       <div className="card w-full max-w-sm shadow-xl bg-base-100">
//         <div className="card-body">
//           <h2 className="text-2xl font-bold text-center mb-4">
//             Login
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               className="input input-bordered w-full"
//               onChange={handleChange}
//               required
//             />

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               className="input input-bordered w-full"
//               onChange={handleChange}
//               required
//             />

//             <button className="btn btn-error w-full text-white">
//               Login
//             </button>
//           </form>

//           <button className="btn btn-outline w-full mt-3">
//             <span className="mr-2">G</span> Google
//           </button>

//           <p className="text-center text-sm mt-4">
//             Don&apos;t have an account?{" "}
//             <Link href="/register" className="text-error font-medium">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;













// "use client";

// import { useState } from "react";
// import { signIn } from "next-auth/react";

// const LoginForm = () => {
//   const [form, setForm] = useState({ email: "", password: "" });

//   return (
//     <>
//       <h2 className="text-2xl font-bold text-center mb-4">Login</h2>

//       <input
//         name="email"
//         placeholder="Email"
//         className="input input-bordered w-full mb-3"
//       />

//       <input
//         name="password"
//         type="password"
//         placeholder="Password"
//         className="input input-bordered w-full mb-3"
//       />

//       <button className="btn btn-error w-full text-white">
//         Login
//       </button>
//     </>
//   );
// };

// export default LoginForm;













"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter, useSearchParams } from "next/navigation";
import { SocialButtons } from "./SocialButton";
import Link from "next/link";

const LoginForm = () => {
const searchParams = useSearchParams();
const callBack = searchParams.get("callbackUrl") || "/";

    const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
    //   redirect: false,
      callbackUrl:searchParams.get("callbackUrl") || "/",
    });
console.log("res", res)
    if (!res.ok) {
        Swal.fire("error", "Email PassWord not matched", "error");
    //   window.location.href = "/";
    // } else {
    //   alert("Email অথবা Password ভুল");
    }else{
        Swal.fire("success", "Welcome to Hero-Kidz", "success")
    

        // router.push("/")

    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-4">
        Login
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered w-full mb-3"
          onChange={handleChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          className="input input-bordered w-full mb-3"
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          className="btn btn-error w-full text-white"
        >
          Login
        </button>
      </form>
{/* 
        <SocialButtons></SocialButtons>

              <p className="text-center text-sm mt-4">
                Don&apos;t have an account?{" "}
                <Link
                 href={`/register?${callBack}`}
                  className="link link-primary"
                >
                  Register
                </Link>
              </p> */}



    </>
  );
};

export default LoginForm;