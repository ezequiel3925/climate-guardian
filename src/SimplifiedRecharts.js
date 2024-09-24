import React from 'react';

export const LineChart = ({ children, data, width, height }) => (
  <div style={{ width, height, position: 'relative' }}>
    {React.Children.map(children, child => 
      React.cloneElement(child, { data })
    )}
  </div>
);

export const Line = ({ dataKey, stroke, yAxisId }) => null;

export const XAxis = ({ dataKey }) => (
  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, display: 'flex', justifyContent: 'space-between' }}>
    {['1880', '1920', '1960', '2000', '2040'].map(year => (
      <span key={year} style={{ fontSize: '12px' }}>{year}</span>
    ))}
  </div>
);

export const YAxis = ({ orientation }) => (
  <div style={{ 
    position: 'absolute', 
    [orientation === 'left' ? 'left' : 'right']: 0, 
    top: 0, 
    bottom: 0, 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'space-between',
    alignItems: orientation === 'left' ? 'flex-start' : 'flex-end',
    paddingRight: orientation === 'left' ? '5px' : '0',
    paddingLeft: orientation === 'right' ? '5px' : '0'
  }}>
    {['100', '75', '50', '25', '0'].map(value => (
      <span key={value} style={{ fontSize: '12px' }}>{value}</span>
    ))}
  </div>
);

export const CartesianGrid = () => (
  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(4, 1fr)' }}>
    {[...Array(16)].map((_, i) => (
      <div key={i} style={{ border: '1px solid #e2e8f0' }}></div>
    ))}
  </div>
);

export const Tooltip = () => null;

export const Legend = () => (
  <div style={{ position: 'absolute', top: 0, right: 0, display: 'flex', gap: '1rem' }}>
    <span style={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '10px', height: '10px', backgroundColor: '#ff7300', marginRight: '5px' }}></div>
      Temperatura
    </span>
    <span style={{ fontSize: '12px', display: 'flex', alignItems: 'center' }}>
      <div style={{ width: '10px', height: '10px', backgroundColor: '#82ca9d', marginRight: '5px' }}></div>
      CO2
    </span>
  </div>
);

export const ResponsiveContainer = ({ children, width, height }) => (
  <div style={{ width, height }}>
    {React.cloneElement(children, { width, height })}
  </div>
);