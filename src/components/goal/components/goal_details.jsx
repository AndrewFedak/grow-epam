import React from 'react';

import GoalDateTimestamps from './goal_date_timestamps';
import GoalSuccessCriteria from './goal_success_criteria';

const GoalDetails = (props) => {
    const {
        goalDetails
    } = props;
    
    const {attachments} = goalDetails;

    return (
        <div className='goal-details'>
            <GoalDateTimestamps {...props}/>
            <GoalSuccessCriteria {...props}/>
            {attachments.map((criteria, idx) => (
                <div>
                    123
                </div>
            ))}
        </div>
    )
}

export default GoalDetails;