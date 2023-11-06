export default function Fruit ({fruits}) {

     const tempFruits =fruits // youcan use this method to add some element to arry (ay haja jayak mn inndex ob4iti taficheha 3mrk tbd fiha nichan)
    const DisplayFruts =  () => tempFruits.map  ((FR) => <li>{FR}</li>)
    tempFruits.push('ssss')  //dont use this methode to add same element
    // const DisplayFruts = function (){
    //     return fruits.map(function (FR){
    //         return <li>{FR}</li>
    //     })
    // }

    return <>
        <h1>Fruits  :</h1>
        <ul>
            {DisplayFruts()}
        </ul>
    </>
}