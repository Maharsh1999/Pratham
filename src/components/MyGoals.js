import React from 'react';

const MyGoals = (props) => {
    return (
        <ul className="goal-list">
            {props.goals.map((goal) => {
                return <li> {goal.text} </li>;
            })
        }</ul>);    
};

export default MyGoals;