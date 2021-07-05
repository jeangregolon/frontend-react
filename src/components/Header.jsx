import React from 'react'
import '../index.scss'
import { Link } from 'react-router-dom'
import logoMoovin from '../assets/img/logo.svg'

export default function Header() {    return (
        <div id='header'>
            <header>
                <div>
                    <Link className="brand" to="/">
                        <img alt='Logo da Moovin' src={logoMoovin} />
                    </Link>
                </div>
            </header>
        </div>
    )
}