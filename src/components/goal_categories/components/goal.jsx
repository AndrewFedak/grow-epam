import React from 'react';

const Goal = (props) => {
    const {
        goal
    } = props;

    const {title, actionItems, labelColor, status, id} = goal;

    return (
        <div>
            <hr />
            <p>{title}</p>
            <ul>
                {actionItems.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <p>{labelColor}</p>
            <p>{status}</p>
            <hr />
        </div>
    )
};

export default Goal;