import { Typography } from '@mui/material';
import React from 'react';

const DynamicRenderer = ({ data }) => {
  const renderFields = () => {
    return Object.keys(data).map((fieldName, index) => (
      <div key={index} style={{
        display: 'flex',
        flexDirection: 'row',
      }}>
        <Typography style={{
            fontWeight: 'bold',
            marginRight: '10px',
            flex: 1,
            width: '100px',
        }} gutterBottom>{underscoreToCamelCase(fieldName)}</Typography>
        <Typography gutterBottom style={{
            flex: 1
        }}>{data[fieldName]}</Typography>
      </div>
    ));
  };

  function underscoreToCamelCase(input) {
    return input
      .split('_')
      .map((word, index) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }

  return (
    <div className="data-renderer">
      {renderFields()}
    </div>
  );
};

export default DynamicRenderer;
