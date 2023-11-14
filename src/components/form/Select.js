import styles from './Select.module.css'

function Select({ text, name, handleOnChange, value }) {
    return (
        <div className={styles.from_control}>
            <label htmlFor={name}>{text}</label> 
            <select name={name} id={name} onChange={handleOnChange}
                value={value}>
                <option>Selecione um opção</option>
                <option value="1">Áudio / MP3</option>
                <option value="2">720 px</option>
                <option value="3">360 px</option>
             </select>
        </div>
    )    
}

export default Select;