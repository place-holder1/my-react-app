import { Link } from "react-router-dom";
import { Wrapper } from "../components/Wrapper"

const NotFound = () => {
    return (
        <Wrapper>
            <h1>404</h1>
            <p style={{textAlign: "center"}}>Page not found!</p>
            <Link to="/" style={{display: "block", textAlign: "center"}}>Go back to home</Link>
        </Wrapper>

    );
};

export default NotFound;