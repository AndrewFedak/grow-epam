import React, {useState} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {EditInput, Select} from '../../../reusable';
import filter from '../../../images/filter.png';
import addGroup from '../../../images/add-group.png';

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

import {viewByOptions} from '../reducer/constants';

const FilterControls = (props) => {
    const {
        showGoalCreation,
        showFilters,
        goalCreation,
        categories,
        viewBy,

        addGoal,
        discardGoalCreation,
        toggleFilters,
        // changeGoalTitle,
        changeGoalCategory,
        createGoal,
        changeView,
        createCategory
    } = props;

    const {categoryId} = goalCreation; //title

    const [showGroupCreating, showHideGroupCreating] = useState(false);

    return (
        <div>
            <div className='filter-controls'>
                <div className='goal-creation'>
                    {showGoalCreation ? (
                        <>
                            <EditInput
                                applyFieldName={(title) => createGoal(title, categoryId)}
                                endEditing={() => discardGoalCreation()}
                                isDisabled={!categoryId}
                                placeholder='Type a goal'
                                closeOnBlur={false}
                                showActionButtons
                            />
                            <select onChange={(e) => changeGoalCategory(e.target.value)}>
                                <option disabled selected></option>
                                {categories.map(({id, name}) => (
                                    <option value={id} key={id}>{name}</option>
                                ))}
                            </select>
                        </>
                    ) : <button onClick={() => addGoal()} className='add-goal'>ADD GOAL</button>}
                </div>
                {showFilters ? (
                    <button onClick={() => toggleFilters()}>hide filters</button>
                ) : <button onClick={() => toggleFilters()} className='control-btn'><img src={filter} alt='filter' /></button>}
                <button onClick={() => showHideGroupCreating(!showGroupCreating)} className='control-btn'>
                    <img src={addGroup} alt='add-group'/>
                </button>
                <div className='view-by'>
                    <p>View by:</p>
                    <Select
                        className='view-by'
                        selectedOption={viewByOptions.find(option => option.stateLabel === viewBy)}
                        options={viewByOptions}
                        onAction={(stateLabel) => changeView(stateLabel)}
                    />
                </div>
            </div>
            {showGroupCreating && (
                <EditInput
                    applyFieldName={(categoryName) => createCategory(categoryName)}
                    endEditing={() => showHideGroupCreating(false)}
                    placeholder='Type a group name'
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
    categories: state.dashboard.categories,
    viewBy: state.dashboard.viewBy
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