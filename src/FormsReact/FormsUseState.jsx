import { useState } from "react"

export default function FormsReactuseState() {

  //  const [inputName ,setinputName] = useState()
  //  const  [inputPrenom ,setinputPrenom] = useState()

  //Hma 4anjm3o ga3 data dyal l form(les input) 3la chkl OBJECT
  const [FormsValus, setFormsValus] = useState({
    name: '',
    prenom: '',
    age: '',
    contres: 'MA',
    check: false,
  })

  //  const[inputCheck ,setinputCheck] = useState(false)

  const handelInput = (e) => { // property refers to the element on which the event listener is directly attached.
    //  console.log(e.currentTarget.id)
    const currentTarget = e.currentTarget
    const id = currentTarget.id
    let value = currentTarget.value

    if (currentTarget.type === 'checkbox') {
      value = currentTarget.checked
    }

    // switch (currentTarget.type) {
    // case  'text' :  value = currentTarget.value
    //    break 
    //    case  'checkbox' :  value = currentTarget.checked
    //    break
    //    case  'select-one' :  value = currentTarget.value
    //    break
    //    default: console.error('Taype Invalide')
    // }

    console.log(currentTarget.type)

    setFormsValus(prevState => {//{name: 'bbbbbbbbb', prenom: 'nnnnn', age: 'nnnn'} haka l9yam 4ankhznohom 3la chkl objict bach ila b4ina nsiftohom l backand
      console.log(prevState)
      return { ...prevState, ...{ [id]: value } } // daba hna b4ina kola khtra nstokiw  l9yam jdid likatktb f linput dakchi 3lach htina l prevState o id dyal kola input o value lihya l9yam likatktb
    })
    // console.log(FormsValus)


  }

  // hnaya bach anana nriqupiriw dqtq khqs kolq khtrq bdqndiro stqte dyal kola input o function dyalha 
  // const inputChangePrenom =()=>{
  //   console.log(document.querySelector('#prenom').value)
  //   setinputPrenom(document.querySelector('#prenom').value)
  // }
  // const inputChangeCheck =()=>{
  //   // console.log(document.querySelector('#check').checked)
  //   setinputCheck(document.querySelector('#check').checked)
  // }

  return <div className={'container my-4'}>
    <form>

      {(new Date()).toLocaleString()}

      {JSON.stringify(FormsValus)}

      <div className="form-group">
        <labe>Furst name </labe>
        <input type="text" id="name" className="form-control" onChange={handelInput} />
      </div>

      <div className="form-group">
        <labe>Last Name</labe>
        <input type="text" id="prenom" className="form-control" onChange={handelInput} />
      </div>


      <div className="form-group">
        <labe>Age</labe>
        <input type="text" id="age" className="form-control" onChange={handelInput} />
      </div>

      <div className="form-group">
        <label >Contrys</label>
        <label htmlFor="Contrys"></label>
        <select name="form-control" id="contres" onChange={handelInput}>
          <option value="MA">Maroc</option>
          <option value="ALG">Algeri</option>
          <option value="TN">Tunisi</option>
          <option value="EG">Egept</option>
          <option value="OTHER">Other</option>
        </select>

      </div>

      <div className="form-check">
        <labe>Acsopt aour rulse </labe>
        <input type="checkbox" id="check" className="form-check-input" onChange={handelInput} />
      </div>


    </form>

  </div>
}