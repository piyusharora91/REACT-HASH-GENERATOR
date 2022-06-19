import './App.css';

const TypeChangeButtons = ({ sha_change }) => {
    return (
        <div className="sha-type-change">
            <label className="algo-type-label" htmlFor='sha1'>
                <input className="algo-type" type="radio" id="sha1" name="fav_language" value="SHA-1" defaultChecked onChange={sha_change} /><span> SHA-1</span>
            </label>
            <label className="algo-type-label" htmlFor='sha256'>
                <input className="algo-type" type="radio" id="sha256" name="fav_language" value="SHA-256" onChange={sha_change} /><span> SHA-256</span>
            </label>
            <label className="algo-type-label" htmlFor='sha512'>
                <input className="algo-type" type="radio" id="sha512" name="fav_language" value="SHA-512" onChange={sha_change} /><span> SHA-512</span>
            </label>
        </div>
    );
}

export default TypeChangeButtons;