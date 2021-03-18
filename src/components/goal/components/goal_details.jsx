import React, { useState } from 'react';
import EditInput from '../../../reusable/edit_input';

import GoalDateTimestamps from './goal_date_timestamps';
import GoalSuccessCriteria from './goal_success_criteria';

const GoalDetails = (props) => {
    const {
        goalDetails,
        createCriteria
    } = props;
    
    const {successCriteria, attachments} = goalDetails;

    const [isCreatingCriteria, toggleCriteriaCreating] = useState(false);

    console.log('details');

    return (
        <div className='goal-details'>
            <GoalDateTimestamps {...props}/>
            <hr />
            <div className='criterias'>
                <div className='criterias-title'>
                    <p>success criteria</p>
                    <button onClick={() => toggleCriteriaCreating(true)}>create criteria</button>
                </div>
                {successCriteria.map((criteria, idx) => (
                    <GoalSuccessCriteria
                        key={idx}
                        criteria={criteria}
                        {...props}
                    />
                ))}
                {isCreatingCriteria && (
                    <EditInput
                        applyFieldName={(title) => createCriteria(title)}
                        endEditing={() => toggleCriteriaCreating(false)}
                        showActionButtons
                    />
                )}
            </div>
            {attachments.map((criteria, idx) => (
                <div>
                    123
                </div>
            ))}
        </div>
    )
}

export default GoalDetails;