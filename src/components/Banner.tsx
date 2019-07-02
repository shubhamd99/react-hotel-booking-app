import React from 'react';

interface CoverProps {
    title: string;
    subtitle?: string
}

const Banner: React.FC<CoverProps> = (props) => {
    const { subtitle, title, children } = props;
    return (
        <div className="banner">
            <h1>{title}</h1>
            <div></div>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}

export default Banner;
