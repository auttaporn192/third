import Link from 'next/link'

import useFetch from '../lib/useFetch'

//componentDidMount(){
//    const [posts, setData] = useState([])
//    const fetchData = async () => {
//        const res = await axios.get('/post')
//        setData(res.data)
//    }
//}

export default function PostList() {
    //console.log('start')
    const posts = useFetch('/posts')
    return(
      <>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link as={`/posts/${post.id}`}
              href={{
                pathname:'/post',
                query:{
                   id: post.id 
                }
              }}
            >
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
    )
}