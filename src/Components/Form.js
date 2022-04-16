import { Link } from "react-router-dom";
const Form = ({ state, setState }) => {
    const handleChange = (event) =>
    {
        setState({...state, number: event.target.value})
    }
    const setWeighted = () =>
    {
        setState({...state, weighted: !state.weighted})
    }
    const handleSubmit = (event) =>
    {
        event.preventDefault();
    }
    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label className="title">Number of grades:</label>
                <input type="number" id ="Number" min = {1} value = {state.number} onChange = {handleChange}/>
            </div>
            <div >
                <input type="checkbox" id="weighted" checked ={state.weighted}onChange = {setWeighted}/>
                <label>weighted average</label>
            </div>
            <div>
                <input type="checkbox" id="arithmetic" checked ={!state.weighted}onChange = {setWeighted}/>
                <label>arithmetic average</label>
            </div>
            <Link to = '/grades'><button>Next</button></Link>
        </form>
    )
}

export default Form
