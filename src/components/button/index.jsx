import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';

const Button = ({ description, onClick, styles = {}, isDisabled=false }) => {
    // obtener el size para la resolucion mobile
    const isSmallScreen = useMediaQuery('(max-width: 599px)');

    return (
        <button
            style={{
                borderRadius: "6px",
                padding: "8px 12px 8px 12px",
                background: "#E5E5E5",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 500,
                color: "#262626",
                cursor: "pointer",
                border: 0,
                marginBottom: isSmallScreen ? "0.5rem" : "unset",
                ...styles,
            }}
            type='Button'
            onClick={() => onClick()}
            disabled={isDisabled}
        >
            {description}
        </button>
    );
};

export default Button;