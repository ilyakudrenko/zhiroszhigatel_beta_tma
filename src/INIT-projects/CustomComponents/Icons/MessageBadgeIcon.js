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
        <path
            d="M41.5744 4.72994C40.8495 5.68778 40.281 6.76735 39.9003 7.93096C37.1734 7.10293 34.1953 6.66016 31.0742 6.66016C17.3047 6.66016 6.32812 15.2539 6.32812 25.8594C6.32812 32.8125 10.9961 38.8672 18.9062 42.5391C20.2539 43.1641 20.4297 44.1602 19.8242 45.2734C18.9258 47.0508 16.8945 49.6094 15.5469 51.25C15.4102 51.4258 15.4883 51.543 15.6836 51.4844C17.9297 50.7617 22.5 48.1445 25.8984 45.8594C26.7188 45.2344 27.4609 44.9609 28.3789 44.9609C29.4727 45.0195 30.3711 45.0586 31.0742 45.0586C44.8242 45.0586 55.8008 36.4453 55.8008 25.8594C55.8008 24.6315 55.6536 23.4306 55.3572 22.2708C56.5031 21.7848 57.5577 21.1184 58.4772 20.3001C59.0623 22.0717 59.3555 23.9375 59.3555 25.8594C59.3555 39.3945 45.5273 49.3164 28.3984 48.4961C23.3594 51.9531 16.7773 55.0586 13.5352 55.0586C11.1523 55.0586 10.4492 53.1055 11.7383 51.4453C12.8516 50.0195 14.8828 47.2852 16.0156 45.0977C8.04688 41.3672 2.77344 34.082 2.77344 25.8594C2.77344 13.2812 15.332 3.10547 31.0742 3.10547C34.7966 3.10547 38.3417 3.67585 41.5744 4.72994Z"
            fill={color}
            fillOpacity={opacity}
        />

        {/* Badge (circle) path */}
        <path
            d="M50.8789 20.0586C55.5078 20.0586 59.3555 16.2305 59.3555 11.582C59.3555 6.93359 55.5078 3.10547 50.8789 3.10547C46.2305 3.10547 42.4023 6.93359 42.4023 11.582C42.4023 16.2305 46.2305 20.0586 50.8789 20.0586Z"
            fill={color}
            fillOpacity={opacity}
        />
    </svg>
);

export default INITMessageBadgeIcon;