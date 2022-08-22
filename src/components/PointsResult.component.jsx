import React from 'react'

const PointsResult = ({points, heading}) => {

    return (
        <div className='pointsResult'> 
            <h2>{heading}</h2>
            <h3>{points}</h3>
        </div>
    )
}

export default PointsResult;