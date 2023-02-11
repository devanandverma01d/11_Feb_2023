//1. Import Area
//1.1 Import {someNamed export} from some location/some library
//1.2 Import someDefault export from some location/some library 
import B from "./B";
import React from "react";
//2. Function definition area
const A = pros => {
    let name = "Devanand"
    let mainHead = "1.1- Using React Functional COmponent & 1.2-Default Export"
    let heading1 = "After Chinese spy balloon, a car-sized object in US airspace: 10 points"
    let para = "“Indian regulators are very very experienced. They are very seized of this matter…as always, not just now. So I will leave it there,” Finance minister Nirmala Sitharaman said on Supreme Court's comment over the Adani row.Finance minister Nirmala Sitharaman on Saturday reacted to a question on the Supreme Court's observation on the Adani-Hindenburg row after a meeting of the RBI Board. \"India's regulators are very experienced and they are experts in their domain. Regulators are very seized of this matter. They are on their toes as always, not just now. So I will leave it there,\" Sitharaman said. \"You obviously not expecting me to tell you what I would tell in the court,\" the finance minister said."
    const imag = "https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/nirmala_adani_1676099029059_1676099035273_1676099035273.JPG"
    //Every function return something
    return (
        <React.Fragment>
            <h1>My name is {name} {pros.surname}</h1>
            <br />
            <B head={mainHead} heading={heading1} paragraph={para} image1={imag} />
        </React.Fragment>
    )
}
//3.Export Area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
export default A;
//3.1.2- Named Export