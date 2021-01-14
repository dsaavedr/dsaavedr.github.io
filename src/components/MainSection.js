import React from "react";

import Title from "./Title";

const MainSection = React.forwardRef((props, ref) => {
    const { title, subtitle, children } = props;
    return (
        <section className='main-section' ref={ref}>
            <Title title={title} subtitle={subtitle} />
            {children}
        </section>
    );
});

export default MainSection;
