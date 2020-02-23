import { useState, useEffect } from 'react'
import axios from 'axios'

export default function CommentList({ pid }) {
  const [comments, setComments] = useState([])
console.log({pid})
  const fetchComments = async () => {
    const res = await axios.get(`/comments?postId=${pid}`)

    setComments(res.data)
  }

  useEffect(() => {
    fetchComments()
  }, [])
    return(
        <>
            <ul>
                {comments.map(comment => (
                <li key={comment.id}>{comment.body}
                </li>
                ))}
            </ul>
        </>
    )
}