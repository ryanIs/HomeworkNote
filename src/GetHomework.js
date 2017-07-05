/**
 * GetHomework.js
 *
 * This react component handles rendering all data
 * from this.state.homeworkList
 */
import React, { Component } from 'react';

class GetHomework extends Component {
	getMonthString(inputMonthID) { 
		
		inputMonthID = Number(inputMonthID);
		
		var outputMonth = "January";
		
		switch(inputMonthID) {
			case 1:
				outputMonth = "January";
			break;
			case 2:
				outputMonth = "February";
			break;
			case 3:
				outputMonth = "March";
			break;
			case 4:
				outputMonth = "April";
			break;
			case 5:
				outputMonth = "May";
			break;
			case 6:
				outputMonth = "June";
			break;
			case 7:
				outputMonth = "July";
			break;
			case 8:
				outputMonth = "August";
			break;
			case 9:
				outputMonth = "September";
			break;
			case 10:
				outputMonth = "October";
			break;
			case 11:
				outputMonth = "November";
			break;
			case 12:
				outputMonth = "December";
			break;
			default:
				outputMonth = "January";
			break;
		}
		return outputMonth;
	}
	
	getTimeString(inputTime) {
		var hour, minute;
		var meridian = "AM";
		
		hour = Math.floor((inputTime) / 60);
		
		if(hour < 1) {
			hour = 12;
		}
		if(hour > 12) {
			hour -= 12;
			meridian = "PM";
		}
		
		minute = ((inputTime % 60) === 0) ? "00" : "30";
		
		return hour.toString() + ":" + minute.toString() + " " + meridian;
	}
	
	render() {
		
		return(
			<div className="GetHomework">
				
				{
					this.props.HomeworkList.map(
						(currentVal, index, thisArray) => {
							
							var timeString = this.getTimeString(currentVal.homeworkTime);
							var monthString = this.getMonthString(currentVal.homeworkMonth);
							
							return ( 
								<div className="homework-item" key={index}>
									<div className="homework-item-x" onClick={() => this.props.RemoveItemFunction(index)}>X</div>
									<h1>{currentVal.homeworkTitle}</h1> 
									<h2>{currentVal.homeworkDescription}</h2>
									<p> This homework is due: </p>
									<h3>{timeString}, {monthString} {currentVal.homeworkDay}</h3> 
								</div>
							)
						}
					)
				}
				
			</div>
		);
	}
}

export default GetHomework;