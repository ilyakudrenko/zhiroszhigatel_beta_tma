import React from 'react';

/**
 * INITDivider Component
 *
 * This is a reusable divider component that can be used to visually separate
 * different sections or elements on the page. It allows customization of color,
 * thickness, and margin, making it adaptable to various design requirements.
 *
 * @param {string} color - The color of the divider line. Default is 'red'.
 * @param {string} thickness - The thickness (height) of the divider line.
 * @param {string} margin - The margin around the divider. Default is '16px 0'.
 *
 * Example usage:
 * <INITDivider color="gray" thickness="2px" margin="8px 0" />
 */
const INITDivider = ({color = 'red', thickness, margin = '16px 0'}) => (
    <div
        style={{
            backgroundColor: color, // Sets the background color of the divider
            height: thickness,      // Controls the thickness of the divider
            width: '100%',          // Stretches the divider to full width of the container
            margin: margin,         // Adds space around the divider
        }}
    />
);

export default INITDivider;