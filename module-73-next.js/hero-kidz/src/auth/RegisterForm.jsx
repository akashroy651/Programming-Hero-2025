// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import LoginForm from "./LoginForm";

// const RegisterForm = () => {
//   const [form, setForm] = useState({
//     name: "",
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
//             Create Account
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-3">
//             <input
//               type="text"
//               name="name"
//               placeholder="Full Name"
//               className="input input-bordered w-full"
//               onChange={handleChange}
//               required
//             />

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
//               Register
//             </button>
//           </form>

//           <button className="btn btn-outline w-full mt-3">
//             <span className="mr-2">G</span> Google
//           </button>

//           <p className="text-center text-sm mt-4">
//             Already have an account?{" "}
//             <Link href="/login" className="text-error font-medium">
//               Login <LoginForm></LoginForm>
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;













// "use client";

// import { useState } from "react";

// const RegisterForm = () => {
//   return (
//     <>
//       <h2 className="text-2xl font-bold text-center mb-4">
//         Create Account
//       </h2>

//       <input
//         name="name"
//         placeholder="Full Name"
//         className="input input-bordered w-full mb-3"
//       />

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
//         Register
//       </button>
//     </>
//   );
// };

// export default RegisterForm;






















"use client";

import { postUser } from "@/actions/server/auth";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { SocialButtons } from "./SocialButton";
import Link from "next/link";
import { signIn } from "next-auth/react";

const RegisterForm = () => {
    const params = useSearchParams();
    const callbackUrl = params.get("callbackUrl") || "/";
    const router = useRouter();
  const [form, setForm] = useState({
    name: "",
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
    const result = await postUser(form)


    if(result.acknowledged) {
        // alert("successFull. please login");
        // router.push("/login")
        const result = await signIn("credentials", {
            email: form.email,
            password:form.password,
            callbackUrl:callbackUrl,
        })
                alert("successFull. ");

    }

    console.log(form); // এখন ঠিকমতো data আসবে

    // পরে এখানে /api/register fetch বসাবে
    // await fetch("/api/register", {...})
  };

  return (
    <>
      <h2 className="text-2xl font-bold text-center mb-4">
        Create Account
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="input input-bordered w-full mb-3"
          onChange={handleChange}
          required
        />

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
          Register
        </button>
      </form>
      {/* <SocialButtons></SocialButtons>

           <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link
                 href={"/login"}
                  className="text-error font-medium"
                >
                  Login
                </Link>
              </p> */}


    </>
  );
};

export default RegisterForm;