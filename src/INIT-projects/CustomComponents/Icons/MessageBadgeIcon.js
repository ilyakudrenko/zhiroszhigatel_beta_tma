import React from 'react';

/**
 * INITMessageBadgeIcon Component
 *
 * This component renders an SVG icon for a message badge.
 * You can customize its color, size (width and height), and other styles.
 *
 * @param {string} color - The color of the icon. Default is 'white'.
 * @param {string | number} width - The width of the icon. Default is '24px'.
 * @param {string | number} height - The height of the icon. Default is '24px'.
 * @param {number} opacity - The fill opacity of the icon. Default is 0.85.
 *
 * Example usage:
 * <INITMessageBadgeIcon color="blue" width="32" height="32" opacity={1} />
 */
const INITMessageBadgeIcon = ({ color = 'white', width = '24px', height = '24px', opacity = 1 }) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Speech bubble path */}
        {/* Speech bubble path */}
        <path
            d="M15.0712 1.86521C14.7156 2.32928 14.4497 2.8643 14.2982 3.44486C13.4325 3.22326 12.5019 3.10547 11.5312 3.10547C6.64453 3.10547 2.75391 6.10547 2.75391 9.77344C2.75391 12.1406 4.37109 14.2148 7.25391 15.5508C7.93359 15.8672 8.00391 16.3594 7.71094 16.8867C7.40625 17.4258 6.69141 18.4102 6.15234 19.0781C6.10547 19.1367 6.12891 19.1953 6.19922 19.1602C7.05469 18.75 8.67188 17.6836 9.69141 16.8867C10.0781 16.5703 10.4062 16.4297 10.8398 16.4297C11.1797 16.4297 11.4141 16.4297 11.5312 16.4297C16.4297 16.4297 20.3086 13.4297 20.3086 9.77344C20.3086 9.5264 20.291 9.2824 20.2536 9.04286C20.8451 8.84497 21.3832 8.52676 21.8382 8.11655C21.9734 8.65154 22.043 9.20577 22.043 9.77344C22.043 14.4727 17.4727 18.1992 10.9219 18.1523C9.03516 19.5469 6.36328 20.9062 5.05078 20.9062C4.03125 20.9062 3.71484 20.0156 4.21875 19.3477C4.64062 18.7852 5.4375 17.625 5.85938 16.8047C2.95312 15.4922 1.01953 12.7969 1.01953 9.77344C1.01953 5.12109 5.70703 1.37109 11.5312 1.37109C12.7774 1.37109 13.9706 1.54207 15.0712 1.86521Z"
            fill={color}
            fillOpacity={opacity}
        />

        {/* Badge (circle) path */}
        <path
            d="M18.7734 7.92188C20.5664 7.92188 22.043 6.44531 22.043 4.65234C22.043 2.84766 20.5664 1.37109 18.7734 1.37109C16.9688 1.37109 15.4922 2.84766 15.4922 4.65234C15.4922 6.44531 16.9688 7.92188 18.7734 7.92188Z"
            fill={color}
            fillOpacity={opacity}
        />
    </svg>
);

export default INITMessageBadgeIcon;