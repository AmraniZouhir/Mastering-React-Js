import { useEffect, useRef, useState } from "react"

export default function FormsReactuseRef() {





  const inputNameRef = useRef()
  const inputPrenomRef = useRef()
  const inputAgeRef = useRef()
  const inputContreyRef = useRef()
  const inputRulsRef = useRef()


  const [FormsValus, setFormsValus] = useState({
    name: '',
    prenom: '',
    age: '',
    contres: 'MA',
    check: false,
  })

  const handelSave = (e) => {
    e.preventDefault();

    const formData = { // hna matalan b4iti tsift data l base de donne 3la chkl object  Ex API
      name: inputNameRef.current.value,
      prenom: inputPrenomRef.current.value, 
    };
    setFormsValus({
      name: inputNameRef.current.value,
      prenom: inputPrenomRef.current.value,
      age: inputAgeRef.current.value,
      contres: inputContreyRef.current.value,
    })

    console.log(formData);
    console.log(inputContreyRef.current.value);
  };


// bach ank t3ti chi 9yam par defoult   hnaya lkholasa hya  NAK ILA B4ITI T9IS CHIHAJAF DOM 9ISHA B USEREF BACH MATRANDRACH LPAGR KOLHA 
  useEffect(() => {
    inputNameRef.current.value = 'zouhir'
    inputPrenomRef.current.focus()
    inputAgeRef.current.value = new Date().toISOString().substring(0, 10)
    inputContreyRef.current.value = 'ALG'
  }, [])






  return <div className={'container my-4'}>
    <form>
      <h1>Date Render</h1>

      {(new Date()).toLocaleString()}
      <h1>data afichage</h1>
      {JSON.stringify(FormsValus)}

      <div className="form-group">
        <labe>Furst name </labe>
        <input type="text" id="name" className="form-control" ref={inputNameRef} />
      </div>

      <div className="form-group">
        <labe>Last Name</labe>
        <input type="text" id="prenom" className="form-control" ref={inputPrenomRef} />
      </div>


      <div className="form-group">
        <labe>Age</labe>
        <input type="date" id="age" className="form-control" ref={inputAgeRef} />
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
        <input type="checkbox" id="check" className="form-check-input" ref={inputRulsRef} />
      </div>

      <div className="form-check">
        <button className="btn btn-premary"
          onClick={handelSave}
        >Save</button>
      </div>
    </form>

  </div>
}