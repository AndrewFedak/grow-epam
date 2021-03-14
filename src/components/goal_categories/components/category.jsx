import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {toggleCollapseCategory, deleteGoal} from '../reducer/actions';

import Goal from '../../goal/goal';

const Category = (props) => {
    const {
        category,
        toggleCollapseCategory,
        deleteGoal,
    } = props;

    const {categoryName, isCollapsed, goals, id:categoryId} = category;

    const renderGoals = () => {
        return goals.map((goal) => (
            <Goal
                key={goal.id}
                categoryId={categoryId}
                goal={goal}
                deleteGoal={() => deleteGoal(categoryId, goal.id)}
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
        deleteGoal
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Category);