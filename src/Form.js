const Form = ({ displayInput, sha_type }) => {
    return (
        <div className='container-body'>
            <h1 id="algo-title">{sha_type}</h1>
            <form>
                <textarea name="input_area" id="text-input"
                    onChange={displayInput}
                    className="password-input"
                    placeholder="Input Text HERE" autoFocus /><br />
            </form>
        </div>
    );
}

export default Form;