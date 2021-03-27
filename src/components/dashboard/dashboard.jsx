import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {toggleCollapseCategory, deleteCategory} from './reducer/actions';

import Goal from '../goal/goal';

const GoalCategories = (props) => {
    const {
        categories,
        viewBy,
        goals,
        toggleCollapseCategory,
        deleteCategory
    } = props;

    const removeCategory = (e, categoryId) => {
        e.stopPropagation();
        deleteCategory(categoryId)
    }

    const renderGoalsByCategories = (category) => {
        const {name, isCollapsed = true, id:categoryId} = category;
        const filteredGoals = goals.filter(goal => goal.categoryId === +categoryId);
        return (
            <div key={categoryId} className='category'>
                <div
                    onClick={() => toggleCollapseCategory(categoryId)}
                    className='category-name'
                >
                    <p>{name} - {filteredGoals.length}</p><div className='cross-line'/>
                    <i className='delete-category' onClick={(e) => removeCategory(e, categoryId)}>&#10007;</i>
                </div>
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
        toggleCollapseCategory,
        deleteCategory
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalCategories);