import Darklightmode from "./darklightmode"


const Nav = () => {
  return (
<nav className="navbar navbar-expand-lg sticky-top m-auto mt-4">
      <div className="container-fluid">
        <button className="navbar-toggler border" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <img src="./menu.png" alt="menu" width={"30px"} style={{fill:"red"}}/>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center gap-5 align-items-center w-100">
            <li className="d-flex logo__container">
            <img src="./LOGO1.png" alt="logo" style={{width:"65px"}} />

            <a className="nav-link nav__element" href="#home">Muhammad Al-Freijat</a>

            </li>

         


            <li className="nav-item">

              <a className="nav-link nav__element" href="#home">Home</a>
            </li>



          <li className="nav-item">

            

          <a className="nav-link nav__element"  href="#education">Education</a>
          </li>


          <li className="nav-item">

          <a className="nav-link nav__element"  href="#skills">Skills</a>
          </li>
          <li className="nav-item">

          <a className="nav-link nav__element"  href="#projects">Projects</a>
          </li>

          <li className="dark__mode nav-item">

          <Darklightmode/>
          </li>
          </ul>
          

        </div>
      </div>
    </nav>
  )
}

export default Nav
