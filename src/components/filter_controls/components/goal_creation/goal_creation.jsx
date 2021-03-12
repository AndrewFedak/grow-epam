import React from 'react';

const GoalCreation = (props) => {
    const {
        showGoalCreation,
        addGoal,
        discardGoalCreation,
        changeGoalTitle,
        goalTitle,
        createGoal
    } = props;

    return (
        <div className='goal-creation'>
            {showGoalCreation ? (
                <>
                    <input
                        type='text'
                        className='add-goal-area'
                        placeholder='Type a goal'
                        onChange={(e) => changeGoalTitle(e.target.value)}
                        value={goalTitle}
                    />
                    <div className='actions'>
                        <button disabled={!goalTitle.length} onClick={() => createGoal()}>✓</button>
                        <button onClick={() => discardGoalCreation()}>✕</button>
                    </div>
                </>
            ) : <button onClick={() => addGoal()} className='add-goal'>ADD GOAL</button>}
        </div>
    )
};

export default GoalCreation;