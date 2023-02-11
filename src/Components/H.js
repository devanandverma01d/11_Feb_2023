//1.import area
//1.1 import {someNamed} import from some library/some location
//1.2 import someDefault import from some library/some location
import { I } from "./I";
import J from "./J";
//2. Function definition area
// Using React Functional Component(RFC).
const H = (props) => {
    //every Function return something
    const { head, para, } = props

    const heading = "CPI(M) leader raises hijab issue in Rajya Sabha, points to Yogi Adityanath";
    const paragraph = "Referring to the Hijab row in Karnataka, John Brittas of CPI(M) said as a result of the controversy, “more than one lakh Muslim girls backed out of government colleges in Karnataka alone.CPI(M) leader John Brittas on Friday raised the hijab issue in Rajya Sabha claiming that over a lakh Muslim girl students have dropped out of government colleges in Karnataka after the controversial ban on head coverings in educational institutions in the state. Brittas was taking part in a discussion on private member resolution, moved by Abdul Wahab of the Indian Union Muslim League (IUML), seeking that the government implement the recommendations of the Sachar Committee report.”";
    const image = "https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/Uttar-Pradesh-Chief-Minister-Yogi-Adityanath_1676107121643_1676107121804_1676107121804.jpg";
    return (
        <>
            <h1 className="news">News-8, 8.1-Using React Functional Component(RFC) and Defualt Export</h1>
            <h1>{head}</h1>
            <p>{para}</p>
            <img src="https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/Congress-leader-Rahul-Gandhi---ANI-_1676098405927_1676098405927_1676098428169_1676098428169.jpg" alt="" />
            <I />
            <J head={heading} para={paragraph} img1={image} />
        </>
    )
}
//3.Export Area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
export default H;
//3.1.2- Named Export

