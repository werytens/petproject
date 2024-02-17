import React from 'react';

interface ButtonProps {
    type?: 'main' | 'second';
    onClick?: () => void;
    children: string;
    rounded?: boolean;
}

const MyButton: React.FC<ButtonProps> = ({type = 'main', onClick, children, rounded}) => {

    const mainStyle = 'bg-black p-2 text-[white]';
    const secondStyle = 'bg-[white] p-2 text-black'

    let style = type === 'main' ? mainStyle : secondStyle

    if (rounded) {
        style += ' rounded'
    }

    return (
        <button
            className={style}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default MyButton;