import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {toggleCollapseGoal, toggleCollapseCategory} from './reducer/actions';

import Goal from './components/goal';

const GoalCategories = (props) => {
    const {
        categories,
        toggleCollapseGoal,
        toggleCollapseCategory
    } = props;

    const renderGoals = (goals, categoryId) => {
        return goals.map((goal) => (
            <Goal
                key={goal.id}
                toggleCollapseGoal={() => toggleCollapseGoal(categoryId, goal.id)}
                goal={goal}
            />
        ))
    }

    return (
        <div className='goal-categories'>
            {categories.map((category) => {
                const {categoryName, isCollapsed, goals, id} = category;
                return (
                    <div key={id}>
                        <p onClick={() => toggleCollapseCategory(id)}>{categoryName} || {goals.length}</p>
                        {!isCollapsed && renderGoals(goals, id)}
                    </div>
                )
            })}
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleCollapseGoal,
        toggleCollapseCategory
    }, dispatch)
}

const mapStateToProps = (state) => ({
    categories: state.goalCategories.categories
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalCategories);