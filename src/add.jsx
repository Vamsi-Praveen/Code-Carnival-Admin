import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import "./CSS/add.css"
export default class Add extends Component {
  render(){
  return (
    <div>
        <div className='main'>
            <table>
            <tr><th colspan="2" align="center">Upload Winner Details</th></tr>
            
            <tr><th>Date</th><td><input type="date" /></td></tr>
            <tr><th>WinnerName: </th><td><input type="text" /></td></tr>
            <tr><th>WinnerRollNo:</th> <td><input type="text" /></td></tr>
            <tr><th>WinnerBranch:</th> <td><input type="text" /></td></tr>
            <tr><th>AddWinnerImage</th><td><input type="file" /></td></tr>

            <tr><th colspan="2" align="center">Upload Runner details </th></tr>
            
            <tr><th>Date</th><td><input type="date" /></td></tr>
            <tr><th>RunnerName:</th> <td><input type="text" /></td></tr>
            <tr><th>RunnerRollNo:</th> <td><input type="text" /></td></tr>
            <th>RunnerBranch: </th><td><input type="text" /></td>
            <tr><th>AddRunnerImage</th><td><input type="file" /></td></tr>
            <tr><td colspan="2" align="right"><input type="submit" /></td></tr>
            

            </table>
        </div>
    </div>
  )
  }
}
