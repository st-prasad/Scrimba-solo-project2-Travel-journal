import React from 'react'
// import Button from 'react-bootstrap/Button';

// cardcomp component with ability to acept props
function cardComp(props) {

    return (
        <div className="card">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4">
                        <img className="travelImg w-100 rounded" src={props.elements.imageUrl} alt="" />
                    </div>
                    <div className="col-sm-8 mt-3">
                        <div className="card-block">
                            {/* <h6 className="card-title">{props.elements.location}<span>
                                {props.elements.googleMapsUrl}
                            </span>
                            </h6> */}
                            <h6>
                                <p className='locationProp'>{props.elements.location}</p>
                                <span>
                                    <a href={props.elements.googleMapsUrl} target="_blank" rel="noopener noreferrer" className='d-flex text-decoration-none'>
                                        <i class="fa-solid fa-location-dot me-1 text-decoration-none"></i>
                                        <p class="fw-lighter text-decoration-underline">
                                            View on Google Maps
                                        </p>
                                    </a>
                                </span>
                            </h6>
                            <h1 className="card-title">{props.elements.title}</h1>

                            {props.elements.startDate && <h6 className='small'>{props.elements.startDate} - {props.elements.endDate}</h6>}

                            <p>{props.elements.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cardComp;