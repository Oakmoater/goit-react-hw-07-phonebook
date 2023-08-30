// import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilter } from 'redux/filterSlice';
// import { useDispatch } from 'react-redux';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <>
      <span htmlFor="1">Find contacts by name</span>
      <input
        id="1"
        type="text"
        name="filter"
        title="Use this field to filter contacts by contact's name"
        onChange={handleChangeFilter}
      />
    </>
  );
};

export default Filter;


