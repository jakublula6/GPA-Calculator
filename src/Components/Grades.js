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
        <div className="gradeInput">
            <div>
                <label>Grade number {i}: </label>
                <input type="number" id={i-1} value = {state.grades[i-1]} onChange = {handleGrade} min ={1} max = {6} required/>
            </div>
            {state.weighted && 
            <div>
                <label>Grade weight: </label>
                <input type="number" id={i-1} value = {state.weights[i-1]} onChange = {handleWeight} min ={0} required/>
            </div>}
        </div>)
    }
    const validate = () =>
    {
        if(state.weighted === false)
        {
            for (let i = 0; i < state.number; i++) 
            {
                if(!(state.grades[i]<=6&&state.grades[i]>=1))
                {
                    alert("Ocena jest niepoprawna!")
                    return false;
                }
            }
            return true;
        }
        else
        {
            for (let i = 0; i < state.number; i++) 
            {
                if(!(state.grades[i]<=6&&state.grades[i]>=1))
                {
                    alert("Ocena jest niepoprawna!")
                    return false;
                }
                if(state.weights[i] == undefined ||state.weights[i]<0)
                {
                    alert('Waga jest niepoprawna!')
                    return false;
                }
            }
            return true;
        }
        
    }
    const handleSubmit = (event) =>
    {
        let good = validate();
        console.log(good)
        if(good)
        {
            if(state.weighted === false)
            {
                //For arithmetic GPA
                let sum = 0
                state.grades.map((x) =>
                {
                    sum = sum+x
                })
                setState({...state, gpa:sum/state.number})
            }
            else
            {
                //For weighted GPA
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
        else
        event.preventDefault()
    }

    return (
        <form onSubmit = {handleSubmit}>
            {gradeInput}
            <Link to ='/result'>
                <button onClick={handleSubmit}>
                    Calculate!
                </button>
            </Link>
        </form>
    )
}

export default Grades
