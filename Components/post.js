
import Comments from '../Components/CommentsLists'
export default function Post({post}){
    const {id,title,body} = post

    return(
    <>
        <dl>
        <dt>ID:</dt>
        <dd>{id}</dd>
        <dt>Title:</dt>
        <dd>{title}</dd>
        <dt>Body:</dt>
        <dd>{body}</dd>
      </dl>
        <Comments pid={id}>

        </Comments>
        
</>
    )
}