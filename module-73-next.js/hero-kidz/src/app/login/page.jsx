// import AuthToggle from "@/auth/AuthToggle";
// // import AuthToggle from "@/auth/AuthToggle";
// import React from "react";

// import AuthToggle from "@/auth/AuthToggle";
import AuthToggle from "@/auth/AuthToggle";
import LoginForm from "@/auth/LoginForm";
import AuthPage from "@/auth/page";
import RegisterForm from "@/auth/RegisterForm";

// const page = () => {
//   return (
//     <div>
//       <AuthToggle></AuthToggle>
//     </div>
//   );
// };

// export default page;



export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* <AuthToggle /> */}
      {/* <AuthPage></AuthPage> */}
      <AuthToggle></AuthToggle>
      {/* <LoginForm></LoginForm> */}
      {/* <RegisterForm></RegisterForm> */}
    </div>
  );
}