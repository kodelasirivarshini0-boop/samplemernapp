import { Link } from "react-router-dom"
function header(){
    return(
        <div>
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact us</Link>
        </div>
    )
}
export default Header