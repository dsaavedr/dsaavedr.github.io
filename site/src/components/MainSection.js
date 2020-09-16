import React from 'react';

import Title from './Title';

export default function MainSection({ title, children }) {
    return (
        <section className="main-section">
            <Title title={title} />
            {children}
        </section>
    )
}
