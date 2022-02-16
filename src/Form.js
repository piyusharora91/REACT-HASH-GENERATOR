const Form = ({ displayInput, sha_type }) => {
    return (
        <div className='container-body'>
            <h1>{sha_type}</h1>
            <form>
                <textarea name="input_area"
                    onChange={displayInput}
                    className="password-input"
                    placeholder="Input Text HERE" /><br />
            </form>
        </div>
    );
}

export default Form;