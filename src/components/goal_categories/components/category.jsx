import React from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';

import {toggleCollapseCategory} from '../reducer/actions';

import Goal from '../../goal/goal';

const Category = (props) => {
    const {
        category,
        goals,
        toggleCollapseCategory
    } = props;

    const {name, isCollapsed, id:categoryId} = category;
    const filteredGoals = goals.filter(goal => goal.categoryId === +categoryId);

    const renderGoals = () => {
        return filteredGoals.map((goal) => (
            <Goal
                key={goal.id}
                goal={goal}
            />
        ))
    }

    return (
        <div key={categoryId}>
            <div
                onClick={() => toggleCollapseCategory(categoryId)}
            >{name} || {filteredGoals.length}</div>
            {!isCollapsed && renderGoals()}
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleCollapseCategory
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Category);