//1. Import area
//1.1 import {someNamed Export} from some libraray/some location.
//1.1 import someDefault Export from some libraray/some location.

import { C } from "./C";

//2. Function definition area
function B(props) {
    const newsB = "New-1,"
    const { head, heading, paragraph, image1 } = props


    //Every function return something
    return (

        <>
            <h1 className="news">{newsB} {head}</h1>
            <h1>{heading}</h1>
            <p>{paragraph}</p>
            <img src={image1} alt="" />
            <C />


        </>
    )
}
//3.Export Area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
export default B;
//3.1.2- Named Export
