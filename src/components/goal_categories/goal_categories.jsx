import React from 'react';
import {connect} from 'react-redux';

import Category from './components/category';
import Goal from '../goal/goal';

const GoalCategories = (props) => {
    const {
        categories,
        viewBy,
        goals
    } = props;

    const renderGoals = () => {
        switch(viewBy) {
            case 'groups':
                return categories.map((category) => (
                    <Category category={category} key={category.id} goals={goals}/>
                ));
            case 'freeList':
                return goals.map((goal) => (
                    <Goal {...props} goal={goal} key={goal.id}/>
                ))
            default:
                return <div>not found</div>
        }
    }

    return (
        <div className='goal-categories'>
            {renderGoals()}
        </div>
    )
};

const mapStateToProps = (state) => ({
    categories: state.dashboard.categories,
    viewBy: state.dashboard.viewBy,
    goals: state.dashboard.goals
})

export default connect(mapStateToProps)(GoalCategories);