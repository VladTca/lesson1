import './MyInput.css'

function MyInput({name, type, placeholder,label}) {
return (
    <div>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} name={name} />
    </div>
)

}

export default MyInput;