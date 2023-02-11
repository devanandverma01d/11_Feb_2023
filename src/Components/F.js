//1. Import area
//1.1 import {someNamed} import from some library/some location
//1.2 import someDefault import from some library/some location
import { G } from "./G";
import H from "./H"
//2. Function definition area
let F = (props) => {
    const heading = "Fire guts 15 shops in Kolkata's New Town area, no casualties reported";
    const paragraph = "Allegedly, a power line which is passing over the shops snapped resulting in the fire, which then spread to nearby shops after gas cylinders in the shops exploded.At least 15 shops were gutted in a major fire that broke out in two clusters of roadside shops in New Town area of Kolkata on Saturday, officials said. According to local sources, the fire was noticed early this morning at around 3 am in two shops. The fire department and the police were immediately notified by the onlookers.The fire officials said that a fire broke out at two of the shops in front of New Town Sapuji Sukhbarshi's residence in the West Bengal capital city and soon spread to adjacent shops.";
    const image = "https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/Manipur-chief-minister-N-Biren-Singh-on-Wednesday-_1675947442753_1676103610472_1676103610472.jpg";
    //every Function return something
    return (
        <>
            <h1 className="news">News-6, 6.1-Usig React Functional Component(RFC) & Default Export</h1>
            <h1>{props.head}</h1>
            <p>{props.para}</p>
            <G />
            <H head={heading} para={paragraph} imga={image} />
        </>
    )
}
//3. Export area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
export default F;
//3.1.2- Named Export