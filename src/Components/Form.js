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
            <label>Number of grades:</label><br/>
            <input type="number" id ="Number" min = {1} value = {state.number} onChange = {handleChange}/><br/>

            <input type="checkbox" id="weighted" checked ={state.weighted}onChange = {setWeighted}/>
            <label>weighted average</label><br/>
            <input type="checkbox" id="arithmetic" checked ={!state.weighted}onChange = {setWeighted}/>
            <label>arithmetic average</label> <br/>
            <Link to = '/grades'><button>Next</button></Link>
        </form>
    )
}

export default Form
