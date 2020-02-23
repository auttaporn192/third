//import Post from '../Components/post'
//import useFetch from '..lib/useFetch'
import axios from 'axios'
import { useRouter } from 'next/router'
import Post from '../../Components/post'

export default function PostID({ post }){
  return <Post post={post}></Post>   
}

PostID.getInitialProps = async ctx => {
  const res = await axios.get(`/posts/${ctx.query.id}`)
  return {post : res.data}
}
