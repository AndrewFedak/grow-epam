import React from 'react';

const GoalSuccessCriteria = (props) => {
    const {
        successCriteria
    } = props;

    return (
        <div>Success criteria
            {successCriteria.map((criteria, idx) => (
                <div>
                    123
                </div>
            ))}
        </div>
    )
}

export default GoalSuccessCriteria;