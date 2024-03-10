import Loading from '@/components/global/Loading'
import PostForm from '@/components/global/PostForm'
import PostLists from '@/components/global/PostLists'
import { Suspense } from 'react'

const Page = () => {

  return (
    <div className='p-8'>
      
      <PostForm />

      <h2 className='mb-8 text-4xl mt-8'>All Posts </h2>
      
      <Suspense fallback={<Loading />}>
      <PostLists />
      </Suspense>
      
    </div>
  );
};

export default Page;