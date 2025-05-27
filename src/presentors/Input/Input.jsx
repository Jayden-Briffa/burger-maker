import './Input.module.css'

const Input = (props) => {

    let finalProps = {...props};
    let handleChange;
    let className = finalProps.className ?? "";

    if (props.controlData !== undefined){

        let [ value, setValue ] = props.controlData
        
        handleChange = (event) => {
            setValue(event.target.value)
        }

        finalProps.onChange = handleChange;
        finalProps.value = value

        delete finalProps.controlData

    }

    if (props.type === "range"){
        className += " slider"
    }

    return (
        <input {...{...finalProps, className}} />
    )
}

export default Input;