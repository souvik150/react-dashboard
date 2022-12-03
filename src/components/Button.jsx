import React from 'react';

// import { useStateContext } from '../context/ContextProvider';

const Button = ({ icon, bgColor, color, bgHoverColor, size, text, borderRadius, width }) => {
    // const { setIsClicked, initialState } = useStateContext();

    return (
        <button
            type="button"
            // onClick={() => setIsClicked(initialState)}
            style={{ backgroundColor: bgColor, color, borderRadius }}
            className={` text-${size} p-3 hover:drop-shadow-xl`}
        >
            {text}
            {/*{icon} {text}*/}
        </button>
    );
};

export default Button;