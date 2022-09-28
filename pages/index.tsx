import type { NextPage, GetStaticProps } from 'next'
import Layout from '../components/Layout'
import { createClient } from 'contentful'
import { Blog } from '../models'
import BlogCard from '../components/BlogCard'

interface IProps {
  blogs: Blog[]
}

const Blogs = ({ blogs }: IProps) => {
  return (
    <Layout title='Blogs' description='These are all blogs'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {blogs.map((blog: Blog) => (
          <BlogCard key={blog.sys.id} blog={blog} />
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const client = createClient({
    // @ts-ignore
    space: process.env.CONTENTFUL_SPACE_ID,
    // @ts-ignore
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'blog' })
  return {
    props: {
      blogs: res.items,
    },
  }
}

export default Blogs
