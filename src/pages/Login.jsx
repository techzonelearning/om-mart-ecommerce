import { Link, useNavigate } from "react-router-dom";
import { site_config } from "../config";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import toast from "react-hot-toast";
import { Loader } from "lucide-react";
export default function Login() {
  let [loader, setLoader] = useState(false)
  let [user, setUser] = useState({
    email: "",
    password: ""
  })
  let navigate = useNavigate()

  function submitHandler(e) {
    e.preventDefault()
    setLoader(true)
    signInWithEmailAndPassword(auth, user.email, user.password)
      .then((userCredential) => {
        const user = userCredential.user.email.split("@")[0];
        setLoader(false)
        toast.success(`welcome ${user}`)
        navigate("/")
      })
      .catch((error) => {
        const errorCode = error.code;
        toast.error(error.message.split(":")[1])
        setLoader(false)
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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={submitHandler} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  type="email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  value={user.email}
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
                <div className="text-sm">
                  <Link to={""} className="font-semibold text-[#F94D1C]">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  onChange={(e) => setUser({ ...user, password: e.target.value })}
                  value={user.password}
                  id="password"
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
                {loader ? <Loader className="animate-spin mx-auto" /> : "Sign in"}
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            You don't have an Account? <Link className="font-semibold text-[#F94D1C]" to="/signup">Sign Up</Link>

          </p>
        </div>
      </div>
    </>
  )
}
