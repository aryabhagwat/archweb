import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className='background-image'
            style={{ backgroundImage: `url(${imageURL})` 
            }} 
            />
        <div className='content'>
            <h1 className='title'>
                {title.toUpperCase()}
            </h1>
            <h2 className='subtitle'>
                View Now
                    </h2>
        </div>
    </div>
)

export default MenuItem;
