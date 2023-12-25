import { useSelector } from 'react-redux';
import { useRef, useState, useEffect } from 'react';
import { getDownloadURL, 
  getStorage, 
  ref, 
  uploadBytesResumable 
} from 'firebase/storage';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';

export default function Profile() {
  const fileRef = useRef(null);
  const [image, setImage] = useState(undefined);
  const [imagePercent, setImagePercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
    
  const { currentUser } = useSelector((state) => state.user);
  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);
  const handleFileUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImagePercent(Math.round(progress));
      },
      (error) =>{
        setImageError(true)
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({...formData, profilePicture:downloadURL});
          
        }).catch((err) => {
          
        });
      }
 
    );
  };

  const handleDeleteAccount = async() =>{
    try{

    }catch(error){
      
    }
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className=' text-3xl text-center font-semibold my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input
          type='file'
          ref={fileRef}
          accept='image/*'
          hidden
          onChange={(e) => setImage(e.target.files[0])}
        />
        {/* 
      firebase storage rules:  
      allow read;
      allow write: if
      request.resource.size < 2 * 1024 * 1024 &&
      request.resource.contentType.matches('image/.*') */}
        <img
          src={formData.profilePicture || currentUser.profilePicture}
          alt='profile icon'
          className=' h-24 w-24 self-center 
            rounded-full
            object-cover
            mt-2
            cursor-pointer'
          onClick={() => fileRef.current.click()}
        ></img>
        <p className='text-sm self-center'>
          {imageError ? (
            <span className='text-red-700'>
              Error Uploading Image
            </span> 
          ) : imagePercent > 0 && imagePercent < 100 ? (
              <span className='text-slate-600'> {imagePercent}% uploaded </span>
          ) : imagePercent === 100 ? (
            <span className ='text-green-700'>Image Uploaded Success</span>
          ):(
            ''
          )}
        </p>
        <input
          defaultValue={currentUser.username}
          type='text'
          id='username'
          placeholder='User name'
          className='bg-slate-100 rounded-lg p-3 '
          onChange={handleChange}
        />
        <input
          defaultValue={currentUser.email}
          type='email'
          id='email'
          placeholder='Email'
          className='bg-slate-200 rounded-lg p-3 '
          onChange={handleChange}
        />
        <input
          type='password'
          id='password'
          placeholder='Password'
          className='bg-slate-200 rounded-lg p-3 '
          onChange={handleChange}
        />
        <button className='bg-slate-700 hover:opacity-90 disabled:opacity-75 rounded-lg p-3 uppercase text-white'>
          {loading ? 'Loading...' : 'Update'}
        </button>
      </form>
      <div className='flex justify-between p-3-between mt-5'>
        <span 
        onChange={handleDeleteAccount}
        className='text-red-700 cursor-pointer '>Delete Account</span>
        <span 
        onChange={handleSignOut}
        className='text-orange-500 uppercase font-semibold cursor-pointer'>
          Log Out
        </span>
      </div>
    </div>
  );
}

