import React from 'react';

import PortCard from './PortCard';

export default function PortCards({ data }) {
    const cards = data.map((item, index) => {
        return <PortCard key={index} data={item} />
    });

    return (
        <div className="portCards-wrapper">
            {cards}
        </div>
    )
}
