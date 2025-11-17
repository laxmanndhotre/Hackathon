import React, { useEffect, useState } from 'react'
import Cards from './Cards'
import { toast } from 'sonner'
import { getBlog } from '../services/blog'

function CardContainer() {
    const [blog, setBlog] = useState([])

    useEffect(() => {
        getBlogs()
    }, [])

    const getBlogs = async () => {
        const result = await getBlog()
        if (result.status == 'success') {
            setBlog(result.data)
        }
        else
            toast.error(result.error)
    }

    return (
        <div className='container'>
            <div className='row'>
                {blog.map(b =>
                    <Cards blog_id={b.blog_id} title={b.title} content={b.content}/>)}
            </div>
        </div >
    )
}

export default CardContainer
