import React from 'react';

const Divider = ({ color = '#e0e0e0', thickness = '1px', margin = '16px 0' }) => (
    <div
        style={{
            backgroundColor: color,
            height: thickness,
            width: '100%',
            margin: margin,
        }}
    />
);

export default Divider;