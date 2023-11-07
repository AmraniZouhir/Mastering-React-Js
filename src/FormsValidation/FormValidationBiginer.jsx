
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';

export default function FormsValidation() {

    const fildName = useRef()
    const fildEmail = useRef()
    const fildMessag = useRef()
    const fildCity = useRef()
    const fildCheck = useRef()
    const  [Error , setError] = useState([])



    const validationForms = () => {
        const nameValu = fildName.current.value
        const emailValu = fildEmail.current.value
        const messageValu = fildMessag.current.value
        const cityValu = fildCity.current.value
        const checkValu = fildCheck.current.checked
        
        let isFormValid = true

         if(nameValu.trim() === ''){
            setError(prevStat => {
                return [...prevStat , " Name Required"]
            })
            isFormValid = false
         }

         if(emailValu.trim() === ''){
            setError(prevStat => {
                return [...prevStat , "Email Required"]
            })
            isFormValid = false
         }else if(!emailValu.match( /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){ // daba fhad lhala ila mahtitich ! bach ank tnfi had chrt y3ni rah mh99
            setError(prevStat => {
                return [...prevStat , "Email format not corect"]
            })
            isFormValid = false
         }


         if(messageValu.trim() === ''){
            setError(prevStat => {
                return [...prevStat , "Message Required"]
            })
            isFormValid = false
         }




         if(cityValu.trim() === ''){
            setError(prevStat => {
                return [...prevStat , " City Required"]
            })
            isFormValid = false
         }

         if(!checkValu){ //! had 3lamat ta3job kat3ni machi tchekd false
            setError(prevStat => {
                return [...prevStat , " Check me out be tchecked"]
            })
            isFormValid = false
         }

         return isFormValid
    }

    const HandelFilds = (e) => {
        setError([])

        if(!validationForms()){
            e.preventDefault()

        }
        

    }

    return <div className={'container-fluid w-75 mx-auto my-5'}>
        {Error.length > 0 ? 
        <div class="alert alert-primary" role="alert">
            <strong>ERROR</strong> 
            <ul>
                {Error.map((error ,key) => <li key={key}>{error}</li>)}
            </ul>
        </div>
        
        :'' }
        <form onSubmit={HandelFilds}>
            <h1>Contact Form</h1>
            <hr />
            <div className="mb-3">
                <label htmlFor='name' className="form-label" >Name</label>
                <input type="text" className="form-control" id="name" ref={fildName} />
            </div>
            <div className="mb-3">
                <label htmlFor='email' className="form-label" >Adres Email</label>
                <input type="text" className="form-control" id="email" ref={fildEmail} />
            </div>

            <div className="mb-3">
                <label htmlFor='message' className="form-label" >Message</label>
                <textarea className='form-control' id="message" rows="4" ref={fildMessag}></textarea>
            </div>

            <div className="mb-3">
                <label >City</label>
                <label htmlFor='City'></label>
                <select className="form-select form-select-lg" id="check" ref={fildCity} >
                    <option value=''>Select one</option>
                    <option value="Ma">Maroc</option>
                    <option value="ALG">Algeri</option>
                    <option value="TUN">Tunisi</option>
                </select>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="check" ref={fildCheck} />
                <label className="form-check-label" >Check me out</label>
            </div>
            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>

    </div>
}