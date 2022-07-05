import './dropdown.css';

function Dropdown() {
    return (
        <div className="dropdown-area">
            <div id="profileDrop" className="s3-dropdown">
                <div className="selected">profile 5</div>
                <div className="icon expand"></div>
            </div>
            <div id="profileDropOpt" className="s3-options flex">
                <div className="option">default profile</div>
                <div className="option">profile 2</div>
                <div className="option">profile 3</div>
                <div className="option">profile 4</div>
                <div className="option selected">profile 5</div>
                <div className="option">profile 6</div>
                <div className="option">profile 7</div>
                <div className="option">profile 8</div>
            </div>
        </div>
    );
}

export default Dropdown;
