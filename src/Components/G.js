//1. Import area
//1.1 import {someNamed} import from some library/some location
//1.2 import someDefault import from some library/some location
import React, { Component } from "react";
//2. Class definition area
// Using React Class Component(RCC).
export class G extends Component {
    //1.property
    head = "Opening this Sunday: New expressway stretch to Jaipur";
    para = "Prime Minister Narendra Modi is expected to open the Sohna-Dausa stretch of the Delhi-Mumbai Expressway on Sunday, a highway stretch that is set to cut travel time between Delhi and Jaipur from the current five hours to 2.Prime Minister Narendra Modi is expected to open the Sohna-Dausa stretch of the Delhi-Mumbai Expressway on Sunday, a highway stretch that is set to cut travel time between Delhi and Jaipur from the current five hours to 2.5-3hours.";
    image = "https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/Gurugram--India-February-10--2023--A-view-of-Delhi_1676059383291.jpg";
    //2.Constructor
    //3.Method
    //Every class component must have render method
    render() {
        //Every Fumctiom/method return something
        return (
            <React.Fragment>
                <h1 className="news">News-7, 7.1-Using React Class Component(RCC) & Named Export</h1>
                <h1>{this.head}</h1>
                <p>{this.para}</p>
                <img src={this.image} alt="" />
            </React.Fragment>
        )
    }
}
//3. Export area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
//3.1.2- Named Export