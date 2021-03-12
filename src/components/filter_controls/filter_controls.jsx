import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toggleAddGoal, toggleFilters, changeGoalTitle} from './reducer/actions';
import {createGoal} from '../goal_categories/reducer/actions';

import GoalCreation from './components/goal_creation/goal_creation';
import Filters from './components/filters/filters';

const FilterControls = (props) => {
    const {
        showGoalCreation,
        showFilters,
        toggleAddGoal,
        toggleFilters,
        changeGoalTitle,
        createGoal,

        goalTitle,
    } = props;

    return (
        <div>
            <GoalCreation
                showGoalCreation={showGoalCreation}
                toggleAddGoal={toggleAddGoal}
                changeGoalTitle={changeGoalTitle}
                goalTitle={goalTitle}
                createGoal={createGoal}
            />
            <Filters
                showFilters={showFilters}
                toggleFilters={toggleFilters}
            />
        </div>
    )
};

const mapStateToProps = (state) => ({
    showGoalCreation: state.filterControls.showGoalCreation,
    showFilters: state.filterControls.showFilters,
    goalTitle: state.filterControls.goalTitle
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleAddGoal,
        toggleFilters,
        changeGoalTitle,
        createGoal
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterControls);