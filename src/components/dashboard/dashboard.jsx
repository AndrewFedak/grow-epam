import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {toggleCollapseCategory} from './reducer/actions';

import Goal from '../goal/goal';

const GoalCategories = (props) => {
    const {
        categories,
        viewBy,
        goals,
        toggleCollapseCategory
    } = props;

    const renderGoalsByCategories = (category) => {
        const {name, isCollapsed, id:categoryId} = category;
        const filteredGoals = goals.filter(goal => goal.categoryId === +categoryId);
        return (
            <div key={categoryId}>
                <div
                    onClick={() => toggleCollapseCategory(categoryId)}
                >{name} || {filteredGoals.length}</div>
                {!isCollapsed && filteredGoals.map((goal) => <Goal key={goal.id} goal={goal}/>)}
            </div>
        )
    }

    const renderDashboard = () => {
        switch(viewBy) {
            case 'groups':
                return categories.map(renderGoalsByCategories);
            case 'freeList':
                return goals.map((goal) => <Goal {...props} goal={goal} key={goal.id}/>)
            default:
                return <div>not found</div>
        }
    }

    return (
        <div className='dashboard'>
            {renderDashboard()}
        </div>
    )
};

const mapStateToProps = (state) => ({
    categories: state.dashboard.categories,
    viewBy: state.dashboard.viewBy,
    goals: state.dashboard.goals
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleCollapseCategory
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalCategories);