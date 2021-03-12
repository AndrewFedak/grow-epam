import React from 'react';

const Filters = (props) => {
    const {
        showFilters,
        toggleFilters,
    } = props;

    return (
        <div>
            {showFilters ? (
                <button onClick={() => toggleFilters()}>hide filters</button>
            ) : <button onClick={() => toggleFilters()}>show filters</button>}
        </div>
    )
}

export default Filters;