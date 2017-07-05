/**
 * SelectRender.js
 *
 * This contains the select JSX. Makes App.js more lightweight.
 */
import React, { Component } from 'react';

class SelectRender extends Component {
    
	render() {
		return (
			<div className="hw-date-div">
			<select onChange={this.props.onTimeUpdate} name="hw-date-time" id="hw-date-time" title="Time" className="hw-date-obj">
                <option value="0">12:00 AM</option>
                <option value="30">12:30 AM</option>
                <option value="60">1:00 AM</option>
                <option value="90">1:30 AM</option>
                <option value="120">2:00 AM</option>
                <option value="150">2:30 AM</option>
                <option value="180">3:00 AM</option>
                <option value="210">3:30 AM</option>
                <option value="240">4:00 AM</option>
                <option value="270">4:30 AM</option>
                <option value="300">5:00 AM</option>
                <option value="330">5:30 AM</option>
                <option value="360">6:00 AM</option>
                <option value="390">6:30 AM</option>
                <option value="420">7:00 AM</option>
                <option value="450">7:30 AM</option>
                <option value="480">8:00 AM</option>
                <option value="510">8:30 AM</option>
                <option value="540">9:00 AM</option>
                <option value="570">9:30 AM</option>
                <option value="600">10:00 AM</option>
                <option value="630">10:30 AM</option>
                <option value="660">11:00 AM</option>
                <option value="690">11:30 AM</option>
                <option value="720">12:00 PM</option>
                <option value="750">12:30 PM</option>
                
                <option value="780">1:00 PM</option>
                <option value="810">1:30 PM</option>
                <option value="840">2:00 PM</option>
                <option value="870">2:30 PM</option>
                <option value="900">3:00 PM</option>
                <option value="930">3:30 PM</option>
                <option value="960">4:00 PM</option>
                <option value="990">4:30 PM</option>
                <option value="1020">5:00 PM</option>
                <option value="1050">5:30 PM</option>
                <option value="1080">6:00 PM</option>
                <option value="1110">6:30 PM</option>
                <option value="1140">7:00 PM</option>
                <option value="1170">7:30 PM</option>
                <option value="1200">8:00 PM</option>
                <option value="1230">8:30 PM</option>
                <option value="1260">9:00 PM</option>
                <option value="1290">9:30 PM</option>
                <option value="1320">10:00 PM</option>
                <option value="1350">10:30 PM</option>
                <option value="1380">11:00 PM</option>
                <option value="1410">11:30 PM</option>
              </select>
              <select onChange={this.props.onDayUpdate} name="hw-date-day" id="hw-date-day" title="Day" className="hw-date-obj">
                <option value="1">01</option>
                <option value="2">02</option>
                <option value="3">03</option>
                <option value="4">04</option>
                <option value="5">05</option>
                <option value="6">06</option>
                <option value="7">07</option>
                <option value="8">08</option>
                <option value="9">09</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
              <select onChange={this.props.onMonthUpdate} name="hw-date-month" id="hw-date-month" title="Month" className="hw-date-obj">
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
		);
	}
}

export default SelectRender;