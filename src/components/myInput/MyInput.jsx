import styles from './MyInput.module.css'

function MyInput({name, type, placeholder,label}) {
return (
    <div>
        <label className={styles.label}>{label}</label>
        <input className={styles.input} type={type} placeholder={placeholder} name={name} />
    </div>
)

}

export default MyInput;
