import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import GoalDetails from './components/goal_details';
import GoalHeader from './components/goal_header';

import {
    changeTimestamp,
    renameCriteria,
    deleteCriteria,
    createCriteria,
    toggleCriteriaСompletion
} from '../dashboard/reducer/actions';

const Goal = (props) => {
    const {
        goal,
        changeTimestamp,
        renameCriteria,
        deleteCriteria,
        createCriteria,
        toggleCriteriaСompletion
    } = props;

    const {actionItems, id:goalId, goalDetails} = goal;
    const [isGoalCollapsed, showHideGoal] = useState(true);

    return (
        <div className='goal-wrapper'>
            <GoalHeader
                goal={goal}
                isGoalCollapsed={isGoalCollapsed}
                showHideGoal={showHideGoal}
            />
            {!isGoalCollapsed && (
                <GoalDetails
                    goalDetails={goalDetails}
                    changeTimestamp={(name, value) => changeTimestamp(goalId, name, value)}
                    renameCriteria={(criteriaId, title) => renameCriteria(goalId, criteriaId, title)}
                    deleteCriteria={(criteriaId) => deleteCriteria(goalId, criteriaId)}
                    createCriteria={(title) => createCriteria(goalId, title)}
                    toggleCriteriaСompletion={(criteriaId) => toggleCriteriaСompletion(goalId, criteriaId)}
                />
            )}
            <ul>
                {actionItems.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        changeTimestamp,
        renameCriteria,
        deleteCriteria,
        createCriteria,
        toggleCriteriaСompletion
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Goal);