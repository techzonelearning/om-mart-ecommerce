import { Link, useNavigate } from "react-router-dom";
import { site_config } from "../config";
import { Chrome, Github, Loader } from "lucide-react";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";
export default function SignUp() {
  let [loader, setLoader] = useState(false)
  let navigate = useNavigate()
  let [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  })


  function submitHandler(e) {
    e.preventDefault()
    setLoader(true)
    createUserWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        setLoader(false)
        navigate("/login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setLoader(false)
        toast.error(errorMessage.split(":")[1])

      });

  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src={site_config.logo}
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign Up to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                Name
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  value={user.name}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  value={user.email}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                  Password
                </label>

              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  value={user.password}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#F94D1C] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-orange-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {loader ? <Loader className="animate-spin mx-auto" /> : "Sign Up"}

              </button>
            </div>
          </form>

          <div className="flex mt-5 flex-col gap-3 items-center">
            <p className="text-sm">Or continue with</p>
            <div className="flex gap-5 ">
              <button className=" border rounded-md px-3 w-46 py-1.5 text-[#F94D1C] flex items-center justify-center gap-3 border-orange-600 font-semibold"><Chrome size={19} /> Google</button>
              <button className=" border rounded-md px-3 w-46 py-1.5 text-[#F94D1C] flex items-center justify-center gap-3 border-orange-600 font-semibold"><Github size={19} /> Github</button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an Account? <Link className="font-semibold text-[#F94D1C]" to="/login">Sign In</Link>
          </p>
        </div>
      </div>
    </>
  )
}
