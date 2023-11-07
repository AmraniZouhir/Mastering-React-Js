export default  function LanguageSwitcher({onLanguageChange}){

   const handelLangChange =(e)=>{
        e.preventDefault()
        // console.log()
        onLanguageChange(e.currentTarget.dataset.lang) // y3ni hna dwzna data mn chail l parent f function 
    }

    return <>
    <ul className="nav justify-content-center">
        <li className="nav-item">
            <a className="nav-link active" href="#" data-lang="DR" onClick={handelLangChange}>Darija</a>
        </li>
      
        <li className="nav-item">
            <a className="nav-link active" href="#" data-lang="ENG" onClick={handelLangChange}>Englech</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" href="#" data-lang="ESP" onClick={handelLangChange}>Espaniol</a>
        </li>
        <li className="nav-item">
            <a className="nav-link active" href="#" data-lang="FRA" onClick={handelLangChange}>Franch</a>
        </li>
      
    </ul>
    </>
}
