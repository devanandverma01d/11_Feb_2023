
//1.//1. Import area
//1.1 import {someNamed} import from some library/some location
//1.2 import someDefault import from some library/some location
import React from 'react'
import { E } from './E';
import F from './F';
//2. Function definition area
let D = () => {
    const heading = "'If Priyanka Vadra's son is Rehan Rajiv…': Row over ‘Nehru-surname' jibe";
    const paragraph = "Amid the row over PM Modi's ‘Nehru surname’ jibe, BJP leaders asked why Priyanka Gandhi Vadra's son Rehan writes his name as Rehan Rajiv.Prime Minister Narendra Modi on Thursday said in the Rajya Sabha he does not understand why none of the Gandhi family uses the Nehru surname. The comment triggered a row with Congress strongly condemning the statement. The controversy is far from dying down as debates of Ghandy versus Gandhi continue on Twitter with political leaders commenting on it.";
    //every function return something
    return (
        <>
            <h1 className='news'>News-4, 4.1- Using React Function Component & Default Export</h1>
            <h1>Watch: Bhopal cousins hire ‘helicopter baraat’ to fulfil grandfather's wish
            </h1>
            <p>Helicopter in the wedding procession is not new to the Mandloi family. The family spends approximately ₹5 - 6 lakh on renting a helicopter for their weddings.Two cousins in Bhopal, Madhya Pradesh, hired a helicopter for their respective wedding processions to fulfil their late grandfather's wish, news agency ANI reported. Hem and Yash Mandloi, hailing from Kurana village, took part in the baraat ceremony by taking a chopper ride to Shujalpur in Shajapur district, nearly 80 kilometres from Bhopal, on Thursday.Videos shared on social media showed a large crowd gathered to witness the unique ceremony. The Mandloi family is not new to the concept of a helicopter in a wedding procession. Devendra Mandloi, the eldest son, was reportedly the first person in the family to get a chopper for his wedding in 2014. The wedding ride was taken up till Matana village in the Shajapur district.


            </p>
            <img src='https://www.hindustantimes.com/ht-img/img/2023/02/11/550x309/bhopal_wedding_helicopter_1676080061720_1676080061903_1676080061903.png' alt='' />
            <E />
            <F head={heading} para={paragraph} />
        </>
    )
}
//3.Export Area
//3.0  We can export anything like- Function, CLass, Variable,Array etc.
//3.1 There are two ways to export components-
//3.1.1- Default Export
export default D;
//3.1.2- Named Export

