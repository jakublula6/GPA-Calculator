import Footer from "./Footer";
import { Link } from "react-router-dom";
const Result = ({ state, setState }) => {
    const reset = () =>
    {
        setState({
            number: 2,
            weighted: false,
            gpa:0,
            grades:[],
            weights:[]
        })
    }
    return (
        //Go back to edit grades,
        //Reset grades
        <div>
            <div>
                <h1>
                    {state.weighted ? "Your Weighted GPA:" : "Your arithmetic GPA:"}
                </h1>
                <h2>
                    {state.gpa.toFixed(2)}
                </h2>
            </div>
            <div>
                <Link to ='/'>
                    <button onClick = {reset}>
                        Start Again
                    </button>
                </Link>
                <Link to ='/grades'>
                    <button>
                        Back to grades
                    </button>
                </Link>
            </div>
            <Footer />
        </div>
    )
}

export default Result
