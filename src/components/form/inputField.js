function InputField({ id, label }) {

    return (
        <div>
            <label for={id}>{label}</label>
            <input type="text" id={id} name={id} required />
        </div>
    )

}

export default InputField