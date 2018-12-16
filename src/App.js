import React, {Component} from 'react'
import NavBar from './components/NavBar'
import StudentsCalender from './components/StudentsCalender'
import Calender from './components/Calender'


class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar /><br />
        <Calender/>
        {/*<StudentsCalender />*/}
      </div>
    )
  }
}

export default App
