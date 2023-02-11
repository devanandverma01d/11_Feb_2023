//1. Import area
//1.1 import {someNamed} import from some library/some location
import React, { Component } from 'react'
import D from './D'
//1.2 import someDefault import from some library/some location
//2.Class Definition area
export class C extends Component {
    //1.Property
    newsC = "News-2, 2.1-Using React Class Component & 2.2- Default Export"
    heading = "Delhi LG Saxena orders removal of AAP members on board of private DISCOMS"
    image = "https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/New-Delhi-LG-VK-Saxena---ANI-_1676098268807_1676098268807_1676098280943_1676098280943.jpg"
    //2.Constructor
    //3. Method
    // Every React CLass component(RCC) must have render method.
    render() {
        // Every Method/ function return something
        return (
            <React.Fragment>
                <h1 className='news'>{this.newsC}</h1>
                <h1>{this.heading}</h1>
                <p>The LG Office informed in a statement that they have been removed for "illegally" occupying the positions, and they have been replaced by senior government officers. Delhi Lieutenant Governor VK Saxena has removed Aam Aadmi Party spokesperson Jasmine Shah and AAP MP ND Gupta's son, Naveen ND Gupta from the position of 'Government Nominees' on the Board of Private DISCOMS.
                </p>
                <img src={this.image} alt="" />
                <D />

            </React.Fragment>
        )
    }
}
//3.Export Area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
//3.1.2- Named Export

