import React from 'react';

/**
 * INITPersonCircleIcon Component
 *
 * This component renders an SVG icon for a person circle.
 * You can customize its color, size (width and height), and other styles.
 *
 * @param {string} color - The color of the icon. Default is 'white'.
 * @param {string | number} width - The width of the icon. Default is '24px'.
 * @param {string | number} height - The height of the icon. Default is '24px'.
 * @param {number} opacity - The fill opacity of the icon. Default is 0.85.
 *
 * Example usage:
 * <INITPersonCircleIcon color="blue" width="24" height="24" opacity={0.85} />
 */
const INITProfileIcon = ({color = 'white', width = '24px', height = '24px', opacity = 1}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24" // Соответствует размеру иконки
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Outer circle path */}
        <path
            d="M9.45703 18.9141C14.6836 18.9141 18.9258 14.6836 18.9258 9.45703C18.9258 4.23047 14.6836 0 9.45703 0C4.24219 0 0 4.23047 0 9.45703C0 14.6836 4.24219 18.9141 9.45703 18.9141ZM9.45703 17.1328C5.21484 17.1328 1.79297 13.6992 1.79297 9.45703C1.79297 5.21484 5.21484 1.78125 9.45703 1.78125C13.6992 1.78125 17.1328 5.21484 17.1328 9.45703C17.1328 13.6992 13.6992 17.1328 9.45703 17.1328Z"
            fill={color}
            fillOpacity={opacity}
        />

        {/* Person icon path */}
        <path
            d="M5.29688 14.0977L13.6055 14.0977C14.0039 14.0977 14.2031 13.8164 14.2031 13.4531C14.2031 12.457 12.6797 9.89062 9.44531 9.89062C6.22266 9.89062 4.69922 12.457 4.69922 13.4531C4.69922 13.8164 4.89844 14.0977 5.29688 14.0977ZM9.44531 9.14062C10.7578 9.15234 11.8125 8.02734 11.8125 6.55078C11.8125 5.16797 10.7578 4.01953 9.44531 4.01953C8.14453 4.01953 7.08984 5.16797 7.08984 6.55078C7.08984 8.02734 8.14453 9.12891 9.44531 9.14062Z"
            fill={color}
            fillOpacity={opacity}
        />
    </svg>
);

export default INITProfileIcon;