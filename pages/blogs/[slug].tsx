import { createClient } from 'contentful'
import moment from 'moment'
import Image from 'next/image'
import AuthCheck from '../../components/AuthCheck'
import Layout from '../../components/Layout'
import { Blog, Comment } from '../../models'

const client = createClient({
  // @ts-ignore
  space: process.env.CONTENTFUL_SPACE_ID,
  // @ts-ignore
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

const Blog = ({ blog }: { blog: Blog }) => {
  return (
    <AuthCheck>
      <Layout title={blog.fields.title} description={blog.fields.description}>
        <>
          <div className='flex flex-col gap-6'>
            <h1 className='text-3xl font-bold'>{blog.fields.title}</h1>
            <div className='relative h-[300px] w-full md:w-[800px]'>
              <Image
                src={`https:${blog.fields.image.fields.file.url}`}
                alt={blog.fields.image.fields.fileName}
                layout='fill'
                objectFit='cover'
              />
            </div>
            <p className='text-sm text-gray-600 w-full md:w-[800px]'>
              {blog.fields.description}
            </p>
            <div>
              <p className='text-sm font-semibold'>
                By {blog.fields.author.fields.name}
              </p>
              <p className='text-xs text-gray-500'>
                {moment(blog.sys.createdAt).format('MM/DD/YYYY')}
              </p>
            </div>
          </div>

          <div className='mt-5'>
            <h1 className='text-2xl font-bold underline'>Comments</h1>
            {blog.fields.comments ? (
              <>
                {blog.fields.comments.map((comment: Comment) => (
                  <div className='mb-3' key={comment.sys.id}>
                    <p>{comment.fields.message}</p>
                    <p className='text-sm text-gray-500'>
                      commented by: {comment.fields.author.fields.name}
                    </p>
                  </div>
                ))}
              </>
            ) : (
              <div className='bg-blue-500 text-white mt-3 px-5 py-3 rounded-md'>
                No Comments Yet
              </div>
            )}
          </div>
        </>
      </Layout>
    </AuthCheck>
  )
}

export const getStaticProps = async ({ params }: any) => {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  })

  return {
    props: { blog: items[0] },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  }
}

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: 'blog',
  })

  const paths = res.items.map((item: any) => {
    return {
      params: {
        slug: item.fields.slug,
      },
    }
  })

  return {
    paths,
    fallback: 'blocking', // See the "fallback" section below
  }
}
export default Blog
