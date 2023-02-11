//1. Import Area
//1.1 import {someNamed} import from some library/some location
//1.2 import someDefault import from some library/some location
import { Component } from "react";
//2. Class Definition area
// Using React Class Component(RCC).
export class I extends Component {
    //1. Property 
    heading = "Amit Shah to present President’s Colour Award to Haryana police on Feb 14";
    para = "The award will be presented by Union home minister Amit Shah at a ceremony on February 14 at Haryana Police Academy, Madhuban, in Karnal The Union home minister Amit Shah will present the prestigious President’s Colour Award to Haryana Police in recognition of its outstanding service to the nation.In a statement, PK Agrawal, director general of police (DGP), said that the President of India had approved this award for the Haryana Police for a good track record in commitment to professionalism and high rank in the service of humanity while keeping up its performance and integrity on January 17, 2022.He said that it is also a testament to the hard work and dedication of the Haryana Police in serving the nation and maintaining law and order. “The track record of professionalism and high regard for diversity and human dignity has earned the Haryana Police the award of “President of India’s Police Colour.” This would further raise the morale of the force and also help in strengthening its commitment to serve and endear itself to the people of the state,” he added.";
    img = "https://www.hindustantimes.com/ht-img/img/2023/02/10/550x309/The-President-s-Colour-is-a-prestigious-honour--aw_1676061831833.jpg";

    //Every Class Component must have render Method
    render() {
        // every method  return something
        return (
            <>
                <h1 className="news">News-9, 9.1-Using React Class Component(RCC) & Named Export</h1>
                <h1>{this.heading}</h1>
                <p>{this.para}</p>
                <img src={this.img} alt="" />
            </>
        )
    }
}
//3.Export Area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
//3.1.2- Named Export