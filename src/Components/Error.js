import { Link } from "react-router-dom";
import "../Styles/error4.css";

function Error () {

return(
    <div className="erroro">
        <h1 className="erhead">I am 100% that you are lost</h1>
        <h2 className="erhead">Have you tried going here? <Link to="https://www.kevinkodes.com">https://www.kevinkodes.com</Link></h2>
        <h3 className="numbers">404</h3>
        <h3 className="pagenot">Page not found</h3>
    </div>

)
}

export default Error;