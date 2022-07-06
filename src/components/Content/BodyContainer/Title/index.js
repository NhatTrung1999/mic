import { useState } from "react";
import Track from '../Track'

function Title() {

    const [radio, setRadio] = useState(false);

    const clickRadio = () => {
        setRadio(!radio);
    }

    return (
        <>
            <div className={props.class}>
                {props.title}
                <div className={`switch switch-slider ${ radio ? " " : "on"}`}>
                    <div className="handle"></div>
                </div>
            </div>
            {props.more}
            <div className={`slider-container ${radio ? " " : "on"}`}>
            <div className="foot min">{props.min}</div>
            <div className="foot mid">{props.medium}</div>
            <div className="foot max">{props.max}</div>
            <div id={ props.sl + "Fill"} style={props.width}></div>
            <div className="track"></div>
            <div id={ props.sl + "Tip"} className="slider-tip" style={props.left}>{props.number}</div>
                <input
                    type="range"
                    min={props.min}
                    max={props.max}
                    value={props.value}
                    step={1}
                    className="slider"
                    id={props.id + "Range"}
                    disabled={props.click}
                />
            </div>
        </>
    );
}

export default Title;