
import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// cardcomp component with ability to acept props
function BasicExample() {
    return (
        <div className="card">
            <div className="container">
                <div className="row gap-4">
                    <div className="col-sm-4">
                        <img className="travelImg w-100 rounded" src="https://picsum.photos/150?image=641" alt="" />
                    </div>
                    <div className="col-sm-8 mt-3">
                        <div className="card-block">
                            <h6 className="card-title">Small</h6>
                            <h1 className="card-title">Mount fuji</h1>
                            <h6 className='small'>12 Jan, 2021 - 24 Jan, 2021</h6>
                            <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BasicExample;