import React from 'react';

const GoalCreation = (props) => {
    const {
        showGoalCreation,
        toggleAddGoal,
        changeGoalTitle,
        goalTitle,
        createGoal
    } = props;

    return (
        <div>
            {showGoalCreation ? (
                <div>
                    <input
                        type='text'
                        placeholder='Type a goal'
                        onChange={(e) => changeGoalTitle(e.target.value)}
                    />
                    <button disabled={!goalTitle.length} onClick={() => createGoal()}>Create</button>
                    <button onClick={() => toggleAddGoal()}>Discard</button>
                </div>
            ) : <button onClick={() => toggleAddGoal()}>AddGoal</button>}
        </div>
    )
};

export default GoalCreation;