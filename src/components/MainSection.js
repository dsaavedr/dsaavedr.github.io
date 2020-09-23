import React from 'react';

import Title from './Title';

export default function MainSection({ title, subtitle, children }) {
    return (
        <section className="main-section">
            <Title title={title} subtitle={subtitle} />
            {children}
        </section>
    )
}
