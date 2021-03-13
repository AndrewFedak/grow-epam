import React, {useState} from 'react';

import GoalDetails from './components/goal_details';
import GoalHeader from './components/goal_header';

const Goal = (props) => {
    const {
        renameGoal,
        changeGoalStatus,
        changeTimestamp,
        categoryId,
        goal
    } = props;

    const {actionItems, id:goalId, goalDetails} = goal;
    const [isGoalCollapsed, showHideGoal] = useState(true);

    return (
        <div className='goal-wrapper'>
            <GoalHeader
                {...props}
                changeGoalStatus={(status) => changeGoalStatus(categoryId, goalId, status)}
                renameGoal={(title) => renameGoal(categoryId, goalId, title)}
                isGoalCollapsed={isGoalCollapsed}
                showHideGoal={showHideGoal}
            />
            {!isGoalCollapsed && (
                <GoalDetails
                    goalDetails={goalDetails}
                    changeTimestamp={(name, value) => changeTimestamp(categoryId, goalId, name, value)}
                />
            )}
            <ul>
                {actionItems.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </div>
    )
};

export default Goal;