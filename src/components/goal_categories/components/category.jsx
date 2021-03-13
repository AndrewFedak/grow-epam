import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {toggleCollapseCategory, changeGoalStatus, deleteGoal, renameGoal, changeTimestamp} from '../reducer/actions';

import Goal from '../../goal/goal';

const Category = (props) => {
    const {
        category,
        toggleCollapseCategory,
        changeGoalStatus,
        deleteGoal,
        changeTimestamp,
        renameGoal
    } = props;

    const {categoryName, isCollapsed, goals, id:categoryId} = category;

    const renderGoals = () => {
        return goals.map((goal) => (
            <Goal
                key={goal.id}
                categoryId={categoryId}
                goal={goal}
                deleteGoal={() => deleteGoal(categoryId, goal.id)}
                changeGoalStatus={changeGoalStatus}
                renameGoal={renameGoal}
                changeTimestamp={changeTimestamp}
            />
        ))
    }

    return (
        <div key={categoryId}>
            <div
                onClick={() => toggleCollapseCategory(categoryId)}
            >{categoryName} || {goals.length}</div>
            {!isCollapsed && renderGoals()}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleCollapseCategory,
        changeGoalStatus,
        deleteGoal,
        renameGoal,
        changeTimestamp
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Category);