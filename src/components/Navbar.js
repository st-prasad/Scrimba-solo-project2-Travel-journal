import React from 'react'
import { ReactComponent as GlobeSvg } from './Images/environment-icon.svg';



export default function Navbar() {
    return (
        <div className="bg-danger d-flex justify-content-center">
            <h6 className='navContent'><span><GlobeSvg className='svg me-2' /></span>my travel journal.</h6>

        </div>
    )
}

// Icons are from uxwing.com
