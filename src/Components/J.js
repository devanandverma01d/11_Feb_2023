//1.Import area
//1.1 import {someNamed} import from some library/some location
//1.2 import someDefault import from some library/some location
//2.Function definition area
// Using React Functional Component(RFC).
let J = (props) => {
    //Every Function return something
    const { head, para, img1 } = props
    return (
        <>
            <h1 className="news">News-10, 10.1-Using React Functional Component(RFC) & Default export</h1>
            <h1>{head}</h1>
            <p>{para}</p>
            <img src={img1} alt="" />

        </>
    )
}
//3.Export Area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
export default J;
//3.1.2- Named Export
