import React from 'react';

import { FaLink } from 'react-icons/fa';

export default function PortCard({ data }) {
    return (
        <div className="portCard" >
            <img src={data.img} alt={data.title} />
            <div className="content">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
                {data.url ? <a href={data.url} target="_blank" rel="noopener noreferrer"><FaLink /></a> : <FaLink className="inactive" />}
            </div>
        </div>
    )
}
