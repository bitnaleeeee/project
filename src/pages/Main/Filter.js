import React from 'react';

let filterBln = false;

const Filter = props => {
  const { filterChange } = props;

  const myfun = () => {
    if (filterBln === true) {
      filterBln = false;
    } else {
      filterBln = true;
    }
    filterChange(filterBln);
  };
  return (
    <button type="button" onClick={myfun} className="btn">
      필터
    </button>
  );
};

export default Filter;
