
import type { Metadata } from 'next'
import Link from 'next/link'
import SyntaxHighlighter from 'react-syntax-highlighter'

export const metadata: Metadata = {
  title: 'single post',
  description: 'post description',
}

type ParamType = {
  params: {
    id: string
  }
}

const SinglePost = async ({params}: ParamType) => {
  
  const res = await fetch(`https://dummyjson.com/posts/${params.id}`)
  const data = await res.json();

  return (
    <div className='p-8'>
      <div className="mb-4 inline-block px-4 py-3 bg-black text-white rounded   ">
        <Link className='block' href="/posts">  Back to Posts</Link>
      </div>
      <h2 className='text-2xl mb-3'>{data?.title}</h2>
      <p className='mb-6'>{data.body}</p>

      <SyntaxHighlighter language="javascript">
      {`function(){
        console.log("hi")

      }`}
    </SyntaxHighlighter>

    </div>
  );
};

// 1.7 3.7
// 1.8 3.8
// 1.3 4.6 

export default SinglePost;