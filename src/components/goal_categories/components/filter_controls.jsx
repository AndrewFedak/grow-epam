import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import EditInput from '../../../reusable/edit_input';

import {
    addGoal,
    discardGoalCreation,
    toggleFilters,
    changeGoalTitle,
    changeGoalCategory,
    createGoal,
    changeView,
    createCategory
} from '../reducer/actions';

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
        createGoal,
        changeView,
        createCategory
    } = props;

    const {title, categoryId} = goalCreation;

    const [showGroupCreating, showHideGroupCreating] = useState(false);

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
                <button onClick={() => showHideGroupCreating(!showGroupCreating)}>Add group</button>
                <div>
                    <p>View by:</p>
                    <select onChange={(e) => changeView(e.target.value)}>
                        <option value='groups'>Groups</option>
                        <option value='freeList'>Free list</option>
                    </select>
                </div>
            </div>
            {showGroupCreating && (
                <EditInput
                    applyFieldName={(categoryName) => createCategory(categoryName)}
                    endEditing={() => showHideGroupCreating(false)}
                    showActionButtons
                />
            )}
        </div>
    )
};

const mapStateToProps = (state) => ({
    showGoalCreation: state.dashboard.showGoalCreation,
    showFilters: state.dashboard.showFilters,
    goalCreation: state.dashboard.goalCreation,
    categories: state.dashboard.categories
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addGoal,
        discardGoalCreation,
        toggleFilters,
        changeGoalTitle,
        createGoal,
        changeGoalCategory,
        changeView,
        createCategory
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterControls);