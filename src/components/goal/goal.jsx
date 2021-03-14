import React, {useState} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import GoalDetails from './components/goal_details';
import GoalHeader from './components/goal_header';

import {
    renameGoal,
    changeGoalStatus,
    changeTimestamp,
    renameCriteria,
    deleteCriteria,
    createCriteria,
    toggleCriteriaСompletion
} from '../goal_categories/reducer/actions';

const Goal = (props) => {
    const {
        categoryId,
        goal,
        renameGoal,
        changeGoalStatus,
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
                    renameCriteria={(criteriaId, title) => renameCriteria(categoryId, goalId, criteriaId, title)}
                    deleteCriteria={(criteriaId) => deleteCriteria(categoryId, goalId, criteriaId)}
                    createCriteria={(title) => createCriteria(categoryId, goalId, title)}
                    toggleCriteriaСompletion={(criteriaId) => toggleCriteriaСompletion(categoryId, goalId, criteriaId)}
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
        renameGoal,
        changeGoalStatus,
        changeTimestamp,
        renameCriteria,
        deleteCriteria,
        createCriteria,
        toggleCriteriaСompletion
    }, dispatch)
}
export default connect(null, mapDispatchToProps)(Goal);