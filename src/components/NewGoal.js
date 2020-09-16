import React from 'react';

const NewGoal = (props) => {

    const addNewGoalHandler = (event) => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: 'New Dummy Goal'
        };
        console.log(newGoal);
        props.onAddGoal(newGoal);
    };

    return <form onSubmit={addNewGoalHandler}>
        <input type="text" />
        <button type="submit">Add Goal</button> 
    </form>
};

export default NewGoal;