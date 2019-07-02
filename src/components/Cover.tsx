import React from 'react';

interface CoverProps {
    coverClass?: string;
}

const Cover: React.FC<CoverProps> = (props) => {
    const { coverClass, children } = props;
    return (
        <header className={coverClass}>
            {children}
        </header>
    )
}

export default Cover;

Cover.defaultProps = {
    coverClass: "defaultHero"
};