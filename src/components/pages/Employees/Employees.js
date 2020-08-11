import React, {Component} from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

class Employees extends Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_KITTENS'});
  }

  render() {
    return (
      <div>
        <h1>Employees</h1>
      </div>
    )
  }
}

//Get redux store
const mapStateToProps = reduxState => ({
  
});

export default connect(mapStateToProps)(Employees);