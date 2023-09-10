import { Link, useNavigate} from 'react-router-dom';
import { useState } from 'react';

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]: e.target.value});
  };
  
  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{  
      setLoading(true);
      setError(false);
      const res = await fetch('/api/auth/signin',{
       method: "POST",
       headers :{
        'Content-Type' : 'application/json',
       },
       body:JSON.stringify(formData),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/');
    } catch (error) {
      setLoading(false);
      setError(true);
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
      <p className='text-red-600 mt-5'>{error && 'OOPS again, something went wrong!'}</p>
    </div>
  );
}


