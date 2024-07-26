function TextField({ id, label }) {

    return (
        <div>
            <label for="education">Education:</label>
            <textarea id="education" name="education" required></textarea>
        </div>
    )

}

export default TextField
