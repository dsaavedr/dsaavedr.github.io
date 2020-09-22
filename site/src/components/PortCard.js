import React from 'react'

export default function PortCard({ data }) {
    return (
        <div className="portCard" >
            <img src={data.img} alt={data.title} />
            <div className="content">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    )
}
