import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const Signup = () => {
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
    check: false,
  });

  const navigate = useNavigate();
  const handleInput = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleCheckBox = (value) => {
    setInput((prev) => ({ ...prev, check: value }));
  };
const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page
    
    const email = input.email;
    const password = input.password;
    const name = input.name;

    if(email == ''){
      swal('Opes', 'email is not valid', 'error');
    } else if(name == ''){
      swal('Opes', 'name is not valid', 'error');
    } else if(password == ''){
      swal('Opes', 'password is not valid', 'error');
    } else{
    navigate('/2fa', {state: {user: input}});
    localStorage
    }
    // try {
    //   console.log(email);
    //   const response = await axios.post('http://localhost:3000/users/signup/', {
    //     email,
    //     name,
    //     password,
    //   });

    //   if (response.data) {
    //     // Handle successful login
    //     console.log(response.data);
    //     // You can store the token in localStorage or sessionStorage if needed
    //     localStorage.setItem('authToken', response.data.token);
    //   }
    // } catch (err) {
    //   // Handle errors (like wrong credentials)
    //   console.log('Signup failed. Please check your credentials.');
    // }

  };

  return (
    <>
      <main className='main-wrapper relative overflow-hidden'>
        {/*...::: Signup Section Start :::... */}
        <section id='signup-section'>
          {/* Section Spacer */}
          <div className='py-40 pt-36 xl:pb-[200px] xl:pt-[180px]'>
            {/* Section Container */}
            <div className='global-container'>
              <div className='mx-auto max-w-[910px] text-center'>
                <h1 className='mb-[50px]'>Create Account</h1>
                <div className='block rounded-lg bg-white px-[30px] py-[50px] text-left shadow-[0_4px_60px_0_rgba(0,0,0,0.1)] sm:px-10'>
                  {/* Sign Up Form */}
                  <form
                    onSubmit={handleSubmit}
                    className='flex flex-col gap-y-5'
                  >
                    {/* Form Group */}
                    <div className='grid grid-cols-1 gap-6'>
                      {/* Form Single Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='signup-name'
                          className='text-lg font-bold leading-[1.6]'
                        >
                          Enter your name
                        </label>
                        <input
                          type='text'
                          name='name'
                          value={input.name}
                          onChange={handleInput}
                          id='signup-name'
                          placeholder='Adam Smith'
                          className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='signup-email'
                          className='text-lg font-bold leading-[1.6]'
                        >
                          Email address
                        </label>
                        <input
                          type='email'
                          name='email'
                          value={input.email}
                          onChange={handleInput}
                          id='signup-email'
                          placeholder='example@gmail.com'
                          className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='flex flex-col gap-y-[10px]'>
                        <label
                          htmlFor='signup-password'
                          className='text-lg font-bold leading-[1.6]'
                        >
                          Enter Password
                        </label>
                        <input
                          type='password'
                          name='password'
                          value={input.password}
                          onChange={handleInput}
                          id='signup-password'
                          placeholder='............'
                          className='rounded-[10px] border border-gray-300 bg-white px-6 py-[18px] font-bold text-black outline-none transition-all placeholder:text-slate-500 focus:border-colorOrangyRed'
                          required=''
                        />
                      </div>
                      {/* Form Single Input */}
                      {/* Form Single Input */}
                      <div className='flex gap-x-8 gap-y-[10px]'>
                        <input
                          type='checkbox'
                          className="relative appearance-none after:absolute after:left-0 after:top-[6px] after:h-4 after:w-4 after:rounded-[3px] after:border after:border-[#7F8995] after:bg-white after:text-white after:transition-all after:delay-300 checked:after:border-colorOrangyRed checked:after:bg-colorOrangyRed checked:after:bg-[url('/assets/img/th-1/icon-white-checkmark-filled.svg')]"
                          name='check'
                          checked={input.check}
                          onChange={() => handleCheckBox(!input.check)}
                          id='signup-check'
                          required=''
                        />
                        <label
                          htmlFor='signup-check'
                          className='text-base leading-[1.6]'
                        >
                          I have read and accept the
                          <Link
                            href='#'
                            className='font-bold hover:text-colorOrangyRed'
                          >
                            Terms &amp; Conditions
                          </Link>
                          &nbsp; and &nbsp;
                          <Link
                            href='#'
                            className='font-bold hover:text-colorOrangyRed'
                          >
                            Privacy Policy
                          </Link>
                        </label>
                      </div>
                      {/* Form Single Input */}
                    </div>
                    <button
                      type='submit'
                      className='button mt-7 block rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                    >
                      Create account
                    </button>
                    {/* Form Group */}
                  </form>
                  {/* Sign Up Form */}
                  {/* <div className='relative z-[1] mb-14 mt-9 text-center font-bold before:absolute before:left-0 before:top-1/2 before:-z-[1] before:h-[1px] before:w-full before:-translate-y-1/2 before:bg-[#EAEDF0]'>
                    <span className='inline-block bg-white px-6'>Or</span>
                  </div> */}
                  {/* API Signup */}
                  {/* API Signup */}
                  <div className='mt-10 text-center'>
                    Already have an account? &nbsp;
                    <Link
                      to='/login'
                      className='text-base font-semibold hover:text-colorOrangyRed'
                    >
                      Log in here
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Section Container */}
          </div>
          {/* Section Spacer */}
        </section>
        {/*...::: Signup Section End :::... */}
      </main>
    </>
  );
};

export default Signup;
