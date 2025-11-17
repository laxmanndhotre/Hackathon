import React from 'react'
import config from '../services/config'

function Cards({ blog_id, title,content}) {
    const b = { blog_id, title, content }
    
    

    return (
        <div className='col'>
            <div className="card" style={{width:'18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{b.title}</h5>
                    <p className="card-text">{b.content}</p>
                </div>
            </div>
        </div>
            
        
    )
}

export default Cards
