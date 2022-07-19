import { useState, useRef, useEffect } from "react";

function Slider(props) {
    const [value, setValue] = useState(props.start);

    const refTipWidth = useRef(null);
    const [tipWidth, setTipWidth] = useState(29.48) 
    const refSizing = useRef(null);
    const [sizing, setSizing] = useState(props.end)
    
    const [width, setWidth] = useState(
        ((props.start - props.minium) / (props.maxium - props.minium)) * (sizing - 16) + 8 + "px"
    );

    const [left, setLeft] = useState(
        ((props.start - props.minium) / (props.maxium - props.minium)) * (sizing - 16) - tipWidth / 2 + 8  + "px"
    );

    const valueAuto = (e) => {
        setValue(e.target.value);
        setWidth(
            ((e.target.value - props.minium) / (props.maxium - props.minium)) * (sizing - 16) + 8 + "px"
        );
        setLeft(
            ((e.target.value - props.minium) / (props.maxium - props.minium)) * (sizing - 16) - tipWidth / 2 + 8 + "px"
        );
    };

    useEffect(() => {
        setTipWidth(refTipWidth.current.offsetWidth);
        setSizing(refSizing.current.offsetWidth)
    }, [])

    return (
        <div className={`slider-container ${props.slider}`} id={props.idSl}>
            <div className="foot min">{props.min}</div>
            <div className="foot mid">medium</div>
            <div className="foot max">{props.max}</div>
            <div
                id={props.idSl + "Fill"}
                className="left"
                style={{ width: width }}
            ></div>
            <div className="track" ref={refSizing}></div>
            <div
                id={props.idSl + "Tip"}
                className="slider-tip"
                style={{ left: left }}
                ref={refTipWidth}
            >
                {value}
            </div>
            <input
                type="range"
                min={props.minium}
                max={props.maxium}
                value={value}
                step="1"
                className="slider"
                id={props.idSl + "Range"}
                disabled={props.disabled}
                onChange={valueAuto}
                ref={refSizing}
            />
        </div>
    );
}

export default Slider;
