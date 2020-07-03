import React, { Component } from 'react'
import AddUser from "./AddUser.js";
import man from '../man.png';


export default class Kart extends Component {
    render() {
        const myTasks = [
            "As an Hr manager I can search for an employee and filter employment status on the card tile view",
            "As an employee I can save my on performance evaluation versus my desired target position",
            "As an employee I can click a button linking me to my own personal evaluation in my presonal dashboard"
        ];
        
        return (
                <div className="all">
                    <div className="assignList1">
                        <div className="list">
                            <AddUser myTasks={myTasks[0]}/>
                            <img src={man} alt="logo" width="50" height="50"/>
                        </div>
                    </div>
                    <div className="assignList1">
                        <div className="list">
                            <AddUser myTasks={myTasks[1]}/>
                            <img src={man} alt="logo" width="50" height="50"/>
                        </div>
                    </div>
                    <div className="assignList1">
                        <div className="list">
                            <AddUser myTasks={myTasks[2]}/>
                            <img src={man} alt="logo" width="50" height="50"/>
                        </div>
                    </div>
                    </div> 
          
        )
    }
}
