import React from 'react';

import { Link } from 'react-router-dom';

import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="Page not found">
                <button className="btn-primary">
                    <Link to="/">Back to Home</Link>
                </button>
            </Banner>
        </Hero>
    )
}
