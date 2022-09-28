export interface AuthorFields {
  name: string
  email: string
}

export interface Author {
  fields: AuthorFields
  metadata: any
  sys: any
}

export interface CommentFields {
  message: string
  author: Author
}

export interface Comment {
  fields: CommentFields
  metadata: any
  sys: any
}

export interface BlogFields {
  author: Author
  comments: Comment[]
  createdAt: Date
  description: string
  slug: string
  title: string
  image: any
}

export interface Blog {
  fields: BlogFields
  metadata: any
  sys: any
}
