import React from 'react';

import pages from '../pages-manifest';

export default function UsesSelection(props) {
    const buttons = pages.map((item, idx) => {
        let ec = props.active === idx ? " active" : "";
        return <button onClick={props.click} className={"uses-option" + ec} key={idx} id={idx} >{item.text}</button>
    });

    return (
        <div id="uses-selection">
            {buttons}
        </div>
    )
}
