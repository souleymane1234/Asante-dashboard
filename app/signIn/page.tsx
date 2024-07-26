"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
})

  const router = useRouter();

  const onLogin = async () => {
    try {
        setLoading(true);
        const response = await axios.post('https://api-rest-a-sante-core.pretty-rattlesnake-77.telebit.io/api/v1/connect', user);
        // router.push("/");
        console.log("succes", response.data)
        
    } catch (error:any) {
        console.log("Login failed", error.message);
        
    }finally {
        setLoading(false);
    }
}


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await signIn("credentials", {
//         email,
//         password,
//         redirect: false,
//       });

//       if (res.error) {
//         setError("Invalid Credentials");
//         return;
//       }

//       router.replace("dashboard");
//     } catch (error) {
//       console.log(error);
//     }
//   };
console.log("test",email)

  return (
    <div className="grid place-items-center h-screen">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400">
        <h1 className="text-xl font-bold my-4">Login</h1>

        <form  className="flex flex-col gap-3">
          <input
            value={user.email}
            onChange={(e) => setUser({...user, email: e.target.value})}
            // onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            value={user.password}
            onChange={(e) => setUser({...user, password: e.target.value})}
            // onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2" onClick={onLogin} type="submit">
            Login
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
{/* 
          <Link className="text-sm mt-3 text-right" href={"/register"} >
            Don't have an account? <span className="underline">Register</span>
          </Link> */}
        </form>
      </div>
    </div>
  );
}








// "use client";
// import { TEInput, TERipple } from "tw-elements-react";
// import { signIn } from "next-auth/react";
// import React, { useRef } from "react";

// const LoginPage = () => {
//   const userName = useRef("");
//   const pass = useRef("");

//   const onSubmit = async () => {
//     const result = await signIn("credentials", {
//       username: userName.current,
//       password: pass.current,
//       redirect: true,
//       callbackUrl: "/",
//     });
//   };
//   return (
//     <section className="h-full bg-neutral-200 dark:bg-neutral-700">
//       <div className="container h-full p-10">
//         <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
//           <div className="w-full">
//             <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
//               <div className="g-0 lg:flex lg:flex-wrap">
//                 <div className="px-4 md:px-0 lg:w-6/12">
//                   <div className="md:mx-6 md:p-12">
//                     <div className="text-center">
//                       <img
//                         className="mx-auto w-48"
//                         src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
//                         alt="logo"
//                       />
//                       <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
//                         We are The Lotus Team
//                       </h4>
//                     </div>

//                     <form>
//                       <p className="mb-4">Please login to your account</p>
//                       <TEInput
//                         type="text"
//                         label="Username"
//                         className="mb-4"
//                       ></TEInput>

//                       <TEInput
//                         type="password"
//                         label="Password"
//                         className="mb-4"
//                       ></TEInput>

//                       <div className="mb-12 pb-1 pt-1 text-center">
//                         <TERipple rippleColor="light" className="w-full">
//                           <button
//                             className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
//                             type="button"
//                             style={{
//                               background:
//                                 "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//                             }}
//                           >
//                             Log in
//                           </button>
//                         </TERipple>
//                         <a href="#!">Forgot password?</a>
//                       </div>

//                       <div className="flex items-center justify-between pb-6">
//                         <p className="mb-0 mr-2">Don't have an account?</p>
//                         <TERipple rippleColor="light">
//                           <button
//                             type="button"
//                             className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
//                           >
//                             Register
//                           </button>
//                         </TERipple>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//                 <div
//                   className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
//                   style={{
//                     background:
//                       "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
//                   }}
//                 >
//                   <div className="px-4 py-6 text-white md:mx-6 md:p-12">
//                     <h4 className="mb-6 text-xl font-semibold">
//                       We are more than just a company
//                     </h4>
//                     <p className="text-sm">
//                       Lorem ipsum dolor sit amet, consectetur adipisicing elit,
//                       sed do eiusmod tempor incididunt ut labore et dolore magna
//                       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//                       ullamco laboris nisi ut aliquip ex ea commodo consequat.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


// export default LoginPage;