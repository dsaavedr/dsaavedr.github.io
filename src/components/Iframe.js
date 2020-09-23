import React from 'react'

export default function Iframe({ url, title, w, h }) {
    return (
        <iframe src={url} title={title} frameBorder="0" width={w} height={h} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}
