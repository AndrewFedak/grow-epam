import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    addGoal,
    discardGoalCreation,
    toggleFilters,
    changeGoalTitle,
    changeGoalCategory,
    createGoal
} from './reducer/actions';

const FilterControls = (props) => {
    const {
        showGoalCreation,
        showFilters,
        goalCreation,
        categories,

        addGoal,
        discardGoalCreation,
        toggleFilters,
        changeGoalTitle,
        changeGoalCategory,
        createGoal
    } = props;

    const {title, categoryId} = goalCreation

    return (
        <div className='filter-controls'>
            <div className='goal-creation'>
                {showGoalCreation ? (
                    <>
                        <input
                            type='text'
                            className='add-goal-area'
                            placeholder='Type a goal'
                            onChange={(e) => changeGoalTitle(e.target.value)}
                            value={title}
                        />
                        <div className='actions'>
                            <button disabled={!title.length} onClick={() => createGoal(title, categoryId)}>✓</button>
                            <button onClick={() => discardGoalCreation()}>✕</button>
                        </div>
                        <select onChange={(e) => changeGoalCategory(e.target.value)}>
                            <option disabled selected></option>
                            {categories.map(({id, name}) => (
                                <option value={id} key={id}>{name}</option>
                            ))}
                        </select>
                    </>
                ) : <button onClick={() => addGoal()} className='add-goal'>ADD GOAL</button>}
            </div>
            <div>
                {showFilters ? (
                    <button onClick={() => toggleFilters()}>hide filters</button>
                ) : <button onClick={() => toggleFilters()}>show filters</button>}
                <button>Add group</button>
                <p>View by:</p>
                <select>group</select>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    showGoalCreation: state.filterControls.showGoalCreation,
    showFilters: state.filterControls.showFilters,
    goalCreation: state.filterControls.goalCreation,
    categories: state.goalCategories.categories
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addGoal,
        discardGoalCreation,
        toggleFilters,
        changeGoalTitle,
        createGoal,
        changeGoalCategory
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterControls);