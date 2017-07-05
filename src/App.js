/**
 * App.js
 * Created by Ryan Isler - 2017
 *
 * This js file handles the majority of functionality for
 * the application. It handles data binding, UI interaction,
 * saving and loading homework data and displaying homework
 * objects dynamically.
 */
import React, { Component } from 'react';
import logo from '../public/img/logo.png';
import './App.css';
import SelectRender from './SelectRender.js';
import GetHomework from './GetHomework.js';

var homeworkData = null;

/**
 * Sets a cookie.
 * @param cookieName {String} - The variable name of the desired stored cookie.
 * @param cookieValue {String} - The variable value.
 * @param cookieExpiresInDays {Number} - How many days until the cookie will expire.
 */
function setCookie(cookieName, cookieValue, cookieExpiresInDays)
{
  
  if(cookieExpiresInDays == null)
  {
    cookieExpiresInDays = 120;
  }
  
  var _date = new Date();
  _date.setTime(_date.getTime() + (cookieExpiresInDays * 24 * 60 * 60 * 1000));
  var _expires = "expires=" + _date.toUTCString();
  
  document.cookie = cookieName + "=" + cookieValue + ";" + _expires + ";path=/";
}

/**
 * Gets a cookie.
 * @param cookieName {String} - The variable name of the desired stored cookie.
 * @returns {String} - Returns stored value of cookie.
 */
function getCookie(cookieName)
{
  var _cookieName = cookieName + "=";
  var _ca = document.cookie.split(";");
  for(var i = 0; i < _ca.length; i++)
  {
    var _c = _ca[i];
    
    // Handles whitespace
    while(_c.charAt(0) === ' ')
    {
      _c = _c.substring(1);
    }
    
    // If the cookieName matches the param.
    if(_c.indexOf(_cookieName) === 0)
    {
      return _c.substring(_cookieName.length, _c.length);
    }
  }
  return "";
}

var _homeworkData = getCookie("homeworkList");

// Load data if there is any
if(_homeworkData !== "") {
  homeworkData = _homeworkData;
} else {
  homeworkData = null;
}

const DEFAULT_HOMEWORK = {
  homeworkTitle: "", 
  homeworkDescription:  "",
  homeworkTime: 0,
  homeworkDay: 1,
  homeworkMonth: 1
};

class App extends Component {
  
  constructor(props) {
    
    super(props);
    
    // Set state
    this.state = { 
      currentHomework: DEFAULT_HOMEWORK, 
      homeworkList: (homeworkData == null) ? [] : JSON.parse(homeworkData),
      headText: "New Assignment"
    };
    
    // Binding the state scope to handleSubmit scope.
    this.handleSubmit = this.handleSubmit.bind(this);
    
    // Handle 'this' scoping
    this.handleHomeworkTitleChange = this.handleHomeworkTitleChange.bind(this);
    this.handleHomeworkDescriptionChange = this.handleHomeworkDescriptionChange.bind(this);
    this.handleSelectTime = this.handleSelectTime.bind(this);
    this.handleSelectDay = this.handleSelectDay.bind(this);
    this.handleSelectMonth = this.handleSelectMonth.bind(this);
    this.removeHomework = this.removeHomework.bind(this)
  }
  
  /**
   * Saves homework data to computer.
   */
  saveHomework() {
    
    setCookie("homeworkList", JSON.stringify(this.state.homeworkList), 240);
    
  }
  
  /**
   * Adds the current homework fields to new homework state.
   */
  handleSubmit(event) {
    
    // Empty field handling
    if(this.state.currentHomework.homeworkTitle == "") {
      alert("Assignment Title cannot be empty.");
      return;
    }
    
    if(this.state.currentHomework.homeworkDescription == "") {
      alert("Assignment Description cannot be empty.");
      return;
    }
    
    // Save
    this.state.homeworkList.push(
      Object.assign({}, this.state.currentHomework)
    );
    
    // Clear
    this.setState( {
      currentHomework: DEFAULT_HOMEWORK
    },
    // After completion - save homework
    () => {
      this.saveHomework();
    });
    
    // Update head text - inform user of update
    this.setState({headText: "Assignment added!"});
    setTimeout(() => this.setState({headText: "New Assignment"}), 2000);
    
  }
  
  /**
   * Update homework object
   */
  updateHomeworkObject(key, event) {
    return Object.assign({}, this.state.currentHomework, { [key] : event.target.value });    
  }
  
  /**
   * Handles editing title field.
   *
   * @param {Event} event - onChange event.
   */
  handleHomeworkTitleChange(event) {
    
    // Move new homeworkTitle string into state.currentHomework Object
    const newCurrenthw = Object.assign({}, this.state.currentHomework, {homeworkTitle: event.target.value});
    
    // Update react state of currentHomework object.
    this.setState({
      currentHomework: newCurrenthw
    }, () => {
      //console.log(this.state);
    });
  }
  
  /**
   * Handles editing description field.
   *
   * @param {Event} event - onChange event.
   */
  handleHomeworkDescriptionChange(event) {
    const newCurrenthw = Object.assign({}, this.state.currentHomework, {homeworkDescription: event.target.value});
    this.setState({
      currentHomework: newCurrenthw
    });
  }
  
  /**
   * Handles editing title field.
   *
   * @param {Event} event - onChange event.
   */
  handleSelectTime(event) {
    const newCurrenthw = Object.assign({}, this.state.currentHomework, {homeworkTime: event.target.value});
    this.setState({
      currentHomework: newCurrenthw
    });
  }
  
  /**
   * Handles editing select-day field.
   *
   * @param {Event} event - onChange event.
   */
  handleSelectDay(event) {
    const newCurrenthw = Object.assign({}, this.state.currentHomework, {homeworkDay: event.target.value});
    this.setState({
      currentHomework: newCurrenthw
    });
  }
  
  /**
   * Handles editing select month field.
   *
   * @param {Event} event - onChange event.
   */
  handleSelectMonth(event) {
    const newCurrenthw = Object.assign({}, this.state.currentHomework, {homeworkMonth: event.target.value});
    this.setState({
      currentHomework: newCurrenthw
    });
  }
  
  /**
   * Removes a homework item (homework is completed).
   *
   * @param {Number} removeID - array index to remove
   */
  removeHomework(removeID) {    
    
    // Get NEW homeworkList (array) object.
    let homeworkListCopy = this.state.homeworkList.slice();
    
    // Remove homework object from array using splice
    homeworkListCopy.splice(removeID, 1);
    
    // Faster Object assign method (...this.state)
    this.setState({...this.state, homeworkList: homeworkListCopy});
    
    // Save
    this.saveHomework();
    
  }
  
  /**
   * Renders react application to DOM.
   */
  render() {
    return (
      <div className="container">
      
        <div className="header-wrapper">
          <div className="header">
          
            <img src={logo} className="App-logo" alt="logo" />
            <h1>HomeworkNote</h1>
            
          </div>
        </div>
        
        <div className="new-note-wrapper">
          <div className="new-note">
          
            <h1>{this.state.headText}</h1>
            
            <form action="javascript:void(0);" onSubmit={this.handleSubmit}>
              <input type="text" id="hw-title" name="hw-title" value={this.state.currentHomework.homeworkTitle} onChange={this.handleHomeworkTitleChange} placeholder="Assignment Title"></input>
              <textarea id="hw-description" name="hw-description" value={this.state.currentHomework.homeworkDescription} onChange={this.handleHomeworkDescriptionChange} placeholder="Assignment Description"></textarea>
              <p id="hw-ass-due-date">Assignment due date:</p>
              
              <SelectRender onTimeUpdate={this.handleSelectTime} onDayUpdate={this.handleSelectDay} onMonthUpdate={this.handleSelectMonth}/>
              
              <input type="submit" id="submit-button" value="Add assignment"></input>
            </form>
            
          </div>
        </div>
        
        <div className="hw-wrapper">
          <div className="hw">
          
            <h1>Homework Assignments</h1>
            
            <div className="hw-container">
            
              <GetHomework HomeworkList={this.state.homeworkList} RemoveItemFunction={this.removeHomework}/>
              
            </div>
            
          </div>
        </div>
        
      </div>
    );
  }
}

// Export
export default App;
