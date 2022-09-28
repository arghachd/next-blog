import Image from 'next/image'
import Link from 'next/link'
import { Blog } from '../models'
import moment from 'moment'

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link href={`/blogs/${blog.fields.slug}`}>
      <a>
        <div className='w-full h-48 flex shadow-md rounded-lg'>
          <div className='w-1/2 p-2'>
            <div className='relative h-full'>
              <Image
                src={`https:${blog.fields.image.fields.file.url}`}
                alt={blog.fields.image.fields.fileName}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
          </div>
          <div className='w-1/2 flex flex-col justify-between p-2'>
            <div>
              <h1 className='text-xl font-bold'>{blog.fields.title}</h1>
              <p className='text-sm text-gray-500'>
                {blog.fields.title.substring(0, 30)}...
              </p>
            </div>

            <div>
              <p className='text-sm font-semibold'>
                By {blog.fields.author.fields.name}
              </p>
              <p className='text-xs text-gray-500'>
                {moment(blog.sys.createdAt).format('MM/DD/YYYY')}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default BlogCard
