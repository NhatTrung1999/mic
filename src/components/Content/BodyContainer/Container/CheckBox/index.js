import { useEffect, useRef } from "react";

function CheckBox(props) {
    
    return (
        <>
            <div className="check-item">
                <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
                <label className="check-box" onClick={props.onClick}>
                    <div className="check-text">{props.ckText}</div>
                </label>
            </div>
        </>
    );
}

export default CheckBox;
