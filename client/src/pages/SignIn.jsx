import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { signInStart, signInSuccess, signInFailure } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function SignIn() {
  const [formData, setFormData] = useState({});

  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { loading , error} = useSelector((state) => state.user);
  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]: e.target.value});
  };
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{  
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin',{
       method: "POST",
       headers :{
        'Content-Type' : 'application/json',
       },
       body:JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
     
      if (data.success === false) {
        dispatch (signInFailure(error));
        console.log ();
        return;
      }
      dispatch (signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error));
      console.log (error);
    }

  };
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className ='text-3xl text-center font-semibold my-7'>Sign In</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <input 
          type='email' 
          placeholder='Email' 
          id='email'className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}/>

        <input 
          type='password'
          placeholder='Password' 
          id='password' className='bg-slate-100 p-3 rounded-lg'
          onChange={handleChange}/>

        <button disabled = {loading} className='bg-slate-700 rounded-lg text-white uppercase hover:opacity-95 disabled-75'>
          {loading ? 'Loading':'Sign In'}
        </button>
      </form>
      <div className='flex gap-3 mt-5'>
      <p className='font-semibold'>Need an Account?</p>
        <Link to='/sign-up'>
          <span className='text-blue-600'>Sign Up</span>
        </Link> 
        
      </div>
      <p className='text-red-600 mt-5'>{error ? error.message || 'OOPS again, something went wrong!' : ''}</p>
    </div>
  );
}


