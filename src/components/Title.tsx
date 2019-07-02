import React from 'react';

interface CoverProps {
    title: string;
}

const Title: React.FC<CoverProps> = ({ title }) => {
    return (
        <div className="section-title">
            <h4>{title}</h4>
            <div />
        </div>
    )
}

export default Title;
