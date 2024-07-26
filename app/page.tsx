"use client";
import { TEInput, TERipple } from "tw-elements-react";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation'

const Home = () => {
  const userName = useRef("");
  const pass = useRef("");
  const router = useRouter()

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  };
const test = (e) => {
  e.preventDefault()
  router.push("/dashboard")
}
  return (
    <div className="grid place-items-center h-screen">
      HomePage
      {/* <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white w-1/4">
        <h1 className="text-3xl font-bold my-4 text-center text-[#4ABBEC]">Connexion</h1>

        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Email"
            className="text-white placeholder:text-white bg-[#4ABBEC] rounded-md border-0 py-1.5 pl-7 pr-20"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            className="text-white placeholder:text-white bg-[#4ABBEC] rounded-md border-0 py-1.5 pl-7 pr-20"
          />
          <button className="bg-green-600 text-white font-bold cursor-pointer px-6 py-2 rounded-md" onClick={test}>
            <span className="text-center">Connexion</span>
          </button>
            <div className="bg-red-500 text-white w-fit text-sm py-1 px-3 rounded-md mt-2">
              ok
            </div>

          <Link className="text-sm mt-3 text-right" href={"/infirmiers"}>
            Don't have an account? <span className="underline text-black">Register</span>
          </Link>
        </form>
      </div> */}
    </div>

  );
};


export default Home;

{/* <section className="h-full bg-red-200 dark:bg-yellow-700  justify-center justify-self-center w-full items-center">
<div className="container h-full p-10 self-center ustify-center flex">
  <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
    <div className="w-full">
      <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
        <div className="g-0 lg:flex lg:flex-wrap">
          <div className="px-4 md:px-0 lg:w-6/12">
            <div className="md:mx-6 md:p-12">
              <div className="text-center">
                <img
                  className="mx-auto w-48"
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                  alt="logo"
                />
                <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                  We are The Lotus Team
                </h4>
              </div>

              <form>
                <p className="mb-4">Please login to your account</p>
                <TEInput
                  type="text"
                  label="Username"
                  className="mb-4"
                ></TEInput>

                <TEInput
                  type="password"
                  label="Password"
                  className="mb-4"
                ></TEInput>

                <div className="mb-12 pb-1 pt-1 text-center">
                  <TERipple rippleColor="light" className="w-full">
                    <button
                      className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="button"
                      style={{
                        background:
                          "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                      }}
                    >
                      Log in
                    </button>
                  </TERipple>
                  <a href="#!">Forgot password?</a>
                </div>

                <div className="flex items-center justify-between pb-6">
                  <p className="mb-0 mr-2">Don't have an account?</p>
                  <TERipple rippleColor="light">
                    <button
                      type="button"
                      className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                    >
                      Register
                    </button>
                  </TERipple>
                </div>
              </form>
            </div>
          </div>
          <div
            className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
            style={{
              background:
                "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
            }}
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</section> */}




// import LoginForm from "./signIn/page";
// export default function Home() {
//   return (
//     <>
//       <span className="font-bold text-4xl">Home</span>
//       <div className="border-dashed border border-zinc-500 w-full h-12 rounded-lg"></div>
//       <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//       <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//       <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//       <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//       <div className="border-dashed border border-zinc-500 w-full h-64 rounded-lg"></div>
//     </>
//   );
// }

// import SideNavbar from "./components/SideNavbar";
// import Header from "./components/Header";
// import LeftColumn from "./components/LeftColumn";
// import RightColumn from "./components/RightColumn";
// import Side from "./components/Side";

// export default function Home() {
//   return (
//         <div className="bg-red-800">
//         <Header />
//       </div>
//   );
// }