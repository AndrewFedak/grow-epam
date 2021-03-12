import React from 'react';

const Filters = (props) => {
    const {
        showFilters,
        toggleFilters,
    } = props;

    return (
        <>
            {showFilters ? (
                <button onClick={() => toggleFilters()}>hide filters</button>
            ) : <button onClick={() => toggleFilters()}>show filters</button>}
            <button>Add group</button>
            <p>View by:</p>
            <select>group</select>
        </>
    )
}

export default Filters;