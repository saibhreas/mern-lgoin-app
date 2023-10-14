import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';

export default function Profile() {
  const fileRef = useRef(null);
  const[image, setImage] = useState(undefined);
  console.log(image);
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() =>{
    if (image) {
      handleFileUpload(image);
    }
  },[image] );
  const handleFileUpload = async (image)=> {
    console.log(image);
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' text-3xl text-center font-semibold my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input 
          type='file' 
          ref={fileRef} 
          accept='image/*' hidden
          onChange={(e) => setImage(e.target.files[0])} 
          />
        {/* 
      firebase storage rules:  
      allow read;
      allow write: if
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*') */}
        <img
          src={currentUser.profilePicture}
          alt='profile icon'
          className=' h-24 w-24 self-center 
            rounded-full
            object-cover
            mt-2
            cursor-pointer'
          onClick={() => fileRef.current.click()}
        ></img>
        <input
          defaultValue={currentUser.username}
          type='text'
          id='username'
          placeholder='User name'
          className='bg-slate-100 rounded-lg p-3 '
        />
        <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-200 rounded-lg p-3 '
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-200 rounded-lg p-3 '
        />
        <button className='bg-slate-700 hover:opacity-90 disabled:opacity-75 rounded-lg p-3 uppercase text-white'>
          Update
        </button>
      </form>
      <div className='flex justify-between p-3-between mt-5'>
        <span className='text-red-700 cursor-pointer '>Delete Account</span>
        <span className='text-orange-500 uppercase font-semibold cursor-pointer'>
          Log Out
        </span>
      </div>
    </div>
  );
}

