import Link from 'next/link'
import React from 'react';

const PostLists = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  const response = await fetch(`https://dummyjson.com/posts?limit=${randomNumber}`);
  const data = await response.json();

  return (
    <ul>
      {data?.posts?.map((sm:any, i:number) => <li className='mb-3' key={sm.id}><Link href={`/posts/${sm?.id}`} >{sm?.title}</Link></li>)}
    </ul>
  );
};

export default PostLists;