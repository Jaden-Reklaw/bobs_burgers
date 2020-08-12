import React, {Component} from 'react';

//Connect to the redux store
import { connect } from 'react-redux';

class Employees extends Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    this.props.dispatch({type: 'FETCH_ALL_EMPLOYEE'});
  }

  render() {
    return (
      <div className="body">
        <h1 className="title">Employees</h1>
        
        {this.props.employees.map((employee, index) =>
                    <div key={employee.id}>
                      <h1>{employee.first_name} {employee.last_name}</h1>
                      <h2>Voice Actor: {employee.voice_actor}</h2>
                      <h2>Bio</h2>
                      <p>{employee.bio}</p>
                      <h2>Age: {employee.age}</h2>
                      <figure className="image is-128x128">
                      <img src={employee.img_path} />
                      </figure>
                      
                    </div>
                    )
                }
      </div>
    )
  }
}

//Get redux store
const mapStateToProps = reduxState => ({
  employees: reduxState.rootReducer.employees
});

export default connect(mapStateToProps)(Employees);