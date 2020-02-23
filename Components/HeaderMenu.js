import '../styles/_listing.scss'

export default function HeaderMenu({props}){
     //console.log({props})
    return(
    <header>
        <nav>
        <a href="posts">Home</a>
        <a href="/">Create</a> 
        <a href="#">About</a>
        <a href="#">Contact</a>   
        </nav>
    </header>
    )
}