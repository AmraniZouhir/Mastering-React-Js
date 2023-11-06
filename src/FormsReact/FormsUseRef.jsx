import { useRef, useState } from "react"

export default function FormsReactuseRef() {


    const [FormsValus ,setFormsValus] = useState({
        name :'',
        prenom :'',
        age :'',
        contres :'MA',
        check :false,
       })
      


    const inputNameRef = useRef()
    const inputPrenomRef = useRef()
    const inputAgeRef = useRef()
    const inputContreyRef = useRef()
    const inputRulsRef = useRef()



  const handelInput =(e)=>{ 
  //  console.log(e.currentTarget.id)
    const currentTarget = e.currentTarget
    const id =currentTarget.id
    let value =currentTarget.value 

    if(currentTarget.type ==='checkbox'){
      value = currentTarget.checked
    }


    console.log(currentTarget.type)

    setFormsValus(prevState =>{
      console.log(prevState)
      return { ...prevState , ...{[id]:value}} 
    })
    // console.log(FormsValus)

    
  }

 

  return <div className={'container my-4'}>
    <form>

    {(new Date()).toLocaleString()}
     {JSON.stringify(FormsValus)}
        
        <div className="form-group">
          <labe>Furst name </labe>
          <input type="text" id="name" className="form-control" ref={inputNameRef}/>
        </div>

        <div className="form-group">
          <labe>Last Name</labe>
          <input type="text"   id="prenom" className="form-control"  ref={inputPrenomRef} />
        </div>

        
        <div className="form-group">
          <labe>Age</labe>
          <input type="text"   id="age" className="form-control" ref={inputAgeRef} />
        </div>

        <div className="form-group">
          <label >Contrys</label>
          <label htmlFor="Contrys"></label>
          <select name="form-control" id="contres" ref={inputContreyRef}>
          <option value="MA">Maroc</option>
          <option value="ALG">Algeri</option>
          <option value="TN">Tunisi</option>
          <option value="EG">Egept</option>
          <option value="OTHER">Other</option>
          </select>
          
        </div>

        <div className="form-check">
          <labe>Acsopt aour rulse </labe>
          <input type="checkbox"   id="check" className="form-check-input" ref={inputRulsRef} />
        </div>

        <div className="form-check">
  <button className="btn btn-premary" 
  onClick={(e)=>{
    console.log(inputNameRef.current.value)
    e.preventDefault()
  }}
  >Save</button>
        </div>




    </form>

  </div>
}