import React, { useRef, useState,useEffect} from "react";
import { useSelector } from "react-redux";
import { TextInput, Button } from "flowbite-react";
import { app } from "../../firebase/firebase";
import {getDownloadURL, getStorage, uploadBytesResumable} from 'firebase/storage'
import { ref } from 'firebase/storage';


function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUploadProgress,setimageUploadProgress] = useState(null)
  
  
  const [imageFileUploadError, setimageUploadError] = useState(null)
  const fileReference = useRef();
  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  useEffect(()=>{
    if(image) {
      uploadImage();
    }
  },[image])

  

  const uploadImage = async () => {

    setimageUploadError(null);
    
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);

    //to get info how much byte uploaded
    const uploadBytes = uploadBytesResumable(storageRef, image);
    const uploadTask = uploadBytes.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setimageUploadProgress(progress.toFixed(0));
      }, (error) => {
        setimageUploadError('Could not upload image (Image < 2mb)');
        setimageUploadProgress(null);
        setImageUrl(currentUser.message.user.coverImage)
      });

    ()=>{ getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      setImageUrl(downloadURL);
    })};
      
    }
  return (
    <div className=" md:w-2/4 dark:bg-[#131314]  mx-auto p-6 lg:p-20 bg-gray-100 dark:text-[#A3B2BF] rounded-md shadow-md">
      <h1 className="text-center text-3xl font-heading_font text-[#27374D] dark:text-[#DDE6ED] mb-7">
        Profile
      </h1>
      <form className="flex flex-col gap-7">
        <input
          type="file"
          accept="image/*"
          onChange={handleProfileImage}
          ref={fileReference}
          hidden
        />
                    
        <div
          className="w-32 h-32 self-center cursor-pointer"
          onClick={() => {
            fileReference.current.click();
          }}
        >
          <img
            src={imageUrl || currentUser.message.user.coverImage}
            alt="user"
            className="w-full h-full rounded-full object-cover border-4 border-[#27374D] dark:border-gray-100 dark:bg-[#364559] bg-[#DDE6ED]"
          />
        </div>
        {imageFileUploadError && <p className="text-red-500">{imageFileUploadError}</p>}
        <TextInput
          type="text"
          id="username"
          defaultValue={currentUser.message.user.username}
          placeholder="username"
          color="gray-100 "
          className="input-field  text-gray-800 hover:text-gray-700 "
        />
        <TextInput
          type="email"
          id="email"
          defaultValue={currentUser.message.user.email}
          placeholder="Email"
          color="gray-100 "
          className="text-gray-800 input-field"
        />
        <TextInput
          type="password"
          id="password"
          defaultValue="##############"
          placeholder="Password"
          color="gray-100"
          className="text-gray-800 input-field"
        />
        <Button
          type="submit"
          className="bg-[#27374D] dark:bg-gray-700 dark:text-gray-200"
        >
          Update
        </Button>
      </form>
      <div className="text-red-500 flex justify-between mt-5">
        <span className="cursor-pointer hover:underline">Delete Account</span>
        <span className="cursor-pointer hover:underline">Sign Out</span>
      </div>
    </div>
  );
}

export default Profile;
