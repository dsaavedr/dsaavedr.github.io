import React from 'react';

import Title from './Title';

export default function TextSection({ title, children }) {
    return (
        <section className="text-section">
            <Title title={title} />
            {children}
        </section>
    )
}
