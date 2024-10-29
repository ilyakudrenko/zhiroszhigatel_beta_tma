import React from 'react';

const INITDivider = ({ color = 'red', thickness, margin = '16px 0' }) => (
    <div
        style={{
            backgroundColor: color,
            height: thickness,
            width: '100%',
            margin: margin,
        }}
    />
);

export default INITDivider;