import { Link } from "react-router-dom";
const Grades = ({ state, setState }) => {
    //Powtórzenie funkcji
    const handleGrade = (event) =>
    {
        let newGrades = [...state.grades]
        newGrades[event.target.id] = parseInt(event.target.value)
        setState({...state, grades:newGrades})
    }
    const handleWeight = (event) =>
    {
        let newWeights = [...state.weights]
        newWeights[event.target.id] = parseInt(event.target.value)
        setState({...state, weights:newWeights})
    }

    let gradeInput = []
    for (let i = 1; i <= state.number; i++) 
    {
        gradeInput.push(
        <div>
            <label>Grade number {i}:</label>
            <input type="number" id={i-1} value = {state.grades[i-1]} onChange = {handleGrade} min ={1} max = {6} required = 'true'/>
            {state.weighted && 
            <span>
                <label>Grade weight:</label>
                <input type="number" id={i-1} value = {state.weights[i-1]} onChange = {handleWeight} min ={1} required = 'true'/>
            </span>}
        </div>)
    }
    
    const handleSubmit = (event) =>
    {
        if(state.weighted === false)
        {
            //For arithmetic GPA
            event.preventDefault();
            let sum = 0
            state.grades.map((x) =>sum = sum+x)
            setState({...state, gpa:sum/state.number})
        }
        else
        {
            //For weighted GPA
            event.preventDefault();
            let sum = 0
            let number = 0
            for (let i = 0; i < state.number; i++) 
            {
                sum = sum + state.grades[i]*state.weights[i]
                number = number + state.weights[i]
            }
            setState({...state, gpa:sum/number})
        }
    }

    return (
        <form onSubmit = {handleSubmit}>
            {gradeInput}
            <Link to ='/result'>
                <button type="submit">
                    Calculate!
                </button>
            </Link>
        </form>
    )
}

export default Grades
