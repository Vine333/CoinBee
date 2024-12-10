import React from 'react';

const BitcoinIcon = ({ color = '#fbcc0d', size = 55 }) => {
    return (
        <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width={size}
            height={size}
        >
            <g id="Bitcoin_BTC">
                <g id="XMLID_91_">
                    <path
                        d="M15.67,25.13l0.58-2.36c2.81,0.53,4.92,0.32,5.81-2.22 c0.72-2.04-0.03-3.22-1.51-3.99c1.08-0.25,1.89-0.96,2.1-2.42h0c0.3-2-1.22-3.07-3.3-3.79l0.56-2.25 M12.71,24.39l0.57-2.34 c0.45,0.12,0.89,0.23,1.31,0.34 M14.73,9.2c-0.36-0.08-3.32-0.82-3.32-0.82l-0.44,1.76c0,0,1.22,0.28,1.2,0.3 c0.67,0.17,0.79,0.61,0.77,0.96l-1.85,7.41c-0.08,0.2-0.29,0.51-0.75,0.39c0.02,0.02-1.2-0.3-1.2-0.3l-0.82,1.89 c0,0,2.93,0.74,3.32,0.84 M17.71,9.87c-0.43-0.11-0.88-0.21-1.32-0.31l0.54-2.2 M14.71,16.45c1.12,0.28,4.69,0.83,4.16,2.96l0,0 c-0.51,2.04-3.95,0.94-5.07,0.66l0.5-2.01 M15.95,11.51c0.93,0.23,3.92,0.66,3.44,2.6c-0.46,1.86-3.33,0.91-4.26,0.68l0.42-1.68"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                    <circle
                        cx="16"
                        cy="16"
                        r="14.5"
                        stroke={color}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="10"
                    />
                </g>
            </g>
        </svg>
    );
};

export default BitcoinIcon;
