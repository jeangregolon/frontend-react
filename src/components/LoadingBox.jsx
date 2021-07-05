import React from 'react'
import '../index.scss'

export default function LoadingBox() {
    return (
        <div className='loading'>
            <i className="fa fa-spinner fa-spin"></i> 
            <p>Carregando...</p>
        </div>
    )
}