import HeaderMenu from '../Components/HeaderMenu.js'
import { useRouter } from 'next/router'

export default function Layout({ children,props }){
    console.log(props)
    
    return(
        <>
        <HeaderMenu {...props}></HeaderMenu>
        <div>{children}</div>
        </>
    )   
}