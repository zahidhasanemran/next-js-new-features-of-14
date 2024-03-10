import React from 'react';

const PostForm = () => {

  const addPost = async (formdata: FormData) => {
    "use server";

    let data = {
      title: formdata.get("title"),
      message: formdata.get("message")
    }
    console.log(data);
    
  }

  return (
    <div className=''>
      <form action={addPost} className='w-[500px] mb-8 '>
        <input className='border w-full px-2 py-2 mb-3' type="text" name="title" />
        <textarea className='border w-full' name="message" id="message"  ></textarea>
        <button className='bg-green-500 px-4 py-2 text-white rounded mt-4 ' type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;