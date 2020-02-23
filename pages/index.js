import React, {Component} from 'react'
import css from '../styles/style.scss'
import Pagination from '../components/pagination.js'

function firsta(){
    
    return(
        <>
    <div className={css.example}>Hello PIK!</div>
    <Pagination></Pagination>
    </>
    )
}

firsta.getInitialProps = props =>
{
    
    let heraderStyle = 'bluesky'
        return {heraderStyle}
}

export default firsta