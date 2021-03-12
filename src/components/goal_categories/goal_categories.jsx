import React from 'react';
import {connect} from 'react-redux';

import Goal from './components/goal';

const GoalCategories = (props) => {
    const {
        categories
    } = props;

    const renderGoals = (goals) => {
        return goals.map((goal) => (
            <Goal
                goal={goal}
                key={goal.id}
            />
        ))
    }

    return (
        <div>
            {Object.entries(categories).map((category) => {
                const [categoryName, {isCollapsed, goals, id}] = category;
                return (
                    <div key={id}>
                        {categoryName} || {goals.length}
                        {!isCollapsed && renderGoals(goals)}
                    </div>
                )
            })}
        </div>
    )
};

const mapDispatchToProps = (dispatch) => ({})

const mapStateToProps = (state) => ({
    categories: state.goalCategories.categories
})

export default connect(mapStateToProps, mapDispatchToProps)(GoalCategories);