//1. Import Area
//1.1 import {someNamed import} from some Library/some location
//1.2 import someDefault import from some Library/some location
import React, { Component } from 'react'
//2. Function definition area
//2.1 Using React Class Componenet
export class E extends Component {
    //1.Property
    //2.Constructor
    //3.Method
    heading = "Mother's illicit affair; custody of minor child given to father";
    paragraph = "The Court granted visiting rights to the woman to meet the child every Sunday and between 10 AM and 1 PM on important festivals and holidays.The High Court of Karnataka has upheld a Family Court order giving the custody rights of a minor child to the father. The woman's illicit relationship with another man was the reason the father of the child had sought custody of the minor. The High Court in its judgment noted that she has given more importance to the illicit relationship of hers and has neglected the child.";
    image = "https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/The-farmers-approached-the-Karnataka-high-court-an_1675622217975_1676100995383_1676100995383.jpg";
    // Every Class component must have a render method.
    render() {
        // Every Method return something
        return (
            // Every function return something
            <React.Fragment>
                <h1 className='news'>News-5, 5.1-Using React Class Componenet(RCC) & (Named Export )</h1>
                <h1>{this.heading}</h1>
                <p>{this.paragraph}</p>
                <img src={this.image} alt="" />
            </React.Fragment>
        )
    }
}
//3.Export Area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
//3.1.2- Named Export
