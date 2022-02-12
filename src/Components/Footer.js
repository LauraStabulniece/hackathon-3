import SocialFollow from "./SocialFollow";

function Footer() {
    return (
         <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mb-5">
                    <span class="text-muted">&copy; 2022 Copyright: Laura, Anastasija, Kristine</span>
                    </div>
                    <div className="col-md-6 mt-5 mb-5">
                    <ul className="justify-content-end list-unstyled d-flex">
                        <SocialFollow />
              <li className="list-unstyled">
                 <a href="https://www.facebook.com/valters.polakovs" style= {{color:"grey"}} className="fa fa-lg fa-facebook pull-right"></a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 2</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 3</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Link 4</a>
              </li>
            </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;