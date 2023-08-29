import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStatusFilter } from "redux/filterSlice";
import { getFilter } from "redux/selectors";

const Filter = () => {
    const dispatch = useDispatch();
    const filterStatus = useSelector(getFilter);

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        setInputValue(filterStatus);
    }, [filterStatus]);

    const filterSetter = (event) => {
        const newValue = event.target.value;
        setInputValue(newValue);
        dispatch(setStatusFilter(newValue));
    };

    return (
        <input type="text" value={inputValue} onChange={filterSetter} />
    );
};

export default Filter;

// import { useDispatch } from "react-redux";
// import { setStatusFilter } from "redux/filterSlice";

// const Filter = () => {
//     const dispatch = useDispatch();
    
//     const filterSeter = (event) => {
//         const inputValue = event.target.value;
//         dispatch(setStatusFilter(inputValue));
//     };

//     return (
//     <input type="text" onChange={filterSeter} />
//     )
// };

// export default Filter;