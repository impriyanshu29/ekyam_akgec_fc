
import { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {Spinner} from 'flowbite-react' 

 function signup() {
  const [formData, setFormData] = useState({});
  const[error,setError] = useState(null);
  const [loading, setLoading] = useState(false);
const navigate = useNavigate();

  const handleChange =(e) =>{
    setFormData({...formData,[e.target.id]:e.target.value})
  }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    
    try{
      setLoading(true);
      setError(null);
      const res = await fetch('/api/auth/signup',{ //proxy add jarur karna hai in tailwind.config.js
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData),
      });


      if(!res.ok){
        const errorData = await res.json();
        setError(errorData.error || 'An error occurred.');
        setLoading(false);
        return;          
      }

      if(res.ok){
        navigate('/signin');
      }


      const data = await res.json();
      setLoading(false);

    }catch(error){
      console.log(error);
      setError('An error occurred.');
      setLoading(false);
    }
  };


  return (
    <section  >
      <div className=" flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">  
          <Link 
            to="/" 
            className='whitespace-nowrap self-center font-logo_font  text-[#27374D] text-sm  sm:text-xl  font-semibold '>
            <span className=' px-2  py-1  bg-[#27374D]  text-[#DDE6ED] rounded-lg'>AKGEC</span>
            -FC
          </Link>

          </div>
          <h2 className="text-center text-2xl font-bold font-heading_font leading-tight text-[#27374D]">
            Sign up to create account
          </h2>
          <p className="mt-2 text-center text-base text-[#9DB2BF]">
            Already have an account?{' '}
            <Link
              to="/signin"
              className="font-semibold text-[#27374D] hover:text-[#27374D] transition duration-100"
            >
              Sign In
            </Link>
          </p>
          
          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-body_font  text-[#27374D]">
                  {' '}
                  Username{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-body_font  text-[#27374D]">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-body_font  text-[#27374D]">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-[#27374D] px-3.5 py-2.5 font-semibold leading-7 text-[#DDE6ED] hover:bg-[#DDE6ED] hover:text-[#27374D] transition-all duration-200 "
                  disabled={loading}
                >
                  {
                    loading ?(
                      <>
                        <Spinner color='black'  size='sm'/>
                        <span className='pl-4'>Creating Account...</span>
                      </>
                    ): 'Create Account' 
                  }
                 
                </button>
              </div>
            </div>
          </form>
          
            {error && <p className="text-red-500">{error}</p>}

          <div className="mt-3 space-y-3">
            <button
              type="button"
              className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
            >
              <span className="mr-2 inline-block">
                <svg
                  className="h-6 w-6 text-rose-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                </svg>
              </span>
              Sign up with Google
            </button>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default signup;