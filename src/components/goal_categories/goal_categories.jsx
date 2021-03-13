import React from 'react';
import {connect} from 'react-redux';

import Category from './components/category';

const GoalCategories = (props) => {
    const {
        categories
    } = props;

    return (
        <div className='goal-categories'>
            {categories.map((category) => (
                <Category category={category} key={category.id}/>
            ))}
        </div>
    )
};

const mapStateToProps = (state) => ({
    categories: state.goalCategories.categories
})

export default connect(mapStateToProps)(GoalCategories);