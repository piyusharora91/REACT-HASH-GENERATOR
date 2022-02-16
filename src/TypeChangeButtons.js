import './App.css';

const TypeChangeButtons = ({ sha_change }) => {
    return (
        <div className="sha-type-change">
            <label className="container">
                <input type="radio" id="html" name="fav_language" value="SHA-1" defaultChecked onChange={sha_change} />
                <span htmlFor="SHA-1" className='radio-label'>SHA-1</span>
            </label>
            <label className="container">
                <input type="radio" id="css" name="fav_language" value="SHA-256" onChange={sha_change} />
                <span htmlFor="SHA-256" className='radio-label'>SHA-256</span>
            </label>
            <label className="container">
                <input type="radio" id="javascript" name="fav_language" value="SHA-512" onChange={sha_change} />
                <span htmlFor="SHA-512" className='radio-label'>SHA-512</span>
            </label>
        </div>
    );
}

export default TypeChangeButtons;