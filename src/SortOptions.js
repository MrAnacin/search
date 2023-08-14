import React from 'react';

const SortOptions = ({ onSort }) => {
  return (
    <div>
      <button onClick={() => onSort('asc')}>Sort by Repos (Asc)</button>
      <button onClick={() => onSort('desc')}>Sort by Repos (Desc)</button>
    </div>
  );
};

export default SortOptions;