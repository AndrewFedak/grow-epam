import React, {useEffect} from 'react';
import {connect} from 'react-redux'

import GoalCategories from '../components/goal_categories/goal_categories';
import FilterControls from '../components/goal_categories/components/filter_controls';

const Root = ({state}) => {
  useEffect(() => {
    window.localStorage.setItem('grow', JSON.stringify(state))
  }, [state])

  return (
    <div className='main'>
        <FilterControls />
        <GoalCategories />
    </div>
  );
}

const mapStateToProps = (state) => ({state})

export default connect(mapStateToProps)(Root);
