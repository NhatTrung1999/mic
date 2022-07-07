import { useState } from 'react'

function Header(props) {

    const [checkSh, setCheckSh] = useState(false);
    const [value, setValue] = useState(props.start)
    const [width, setWidth] = useState((props.end / 90) * (props.start - 10));
    const [left, setLeft] = useState((props.end / 90) * (props.start - 10) - props.start)

    const valueAuto = (e) => {
        setValue(e.target.value);
        setWidth((props.end / 90) * (e.target.value - 10));
        setLeft((props.end / 90) * (e.target.value - 10) - e.target.value)
    }

    const clickCheckSh = () => {
        setCheckSh(!checkSh)
    }

    return (
        <>
            <div className={props.title}>
                {props.text}

                <div className={`switch ${checkSh ? "" : "on"} switch-slider`} id={props.idSw} onClick={clickCheckSh}>
                    <div className="handle"></div>
                </div>
            </div>
            {props.more}
            <div className={`slider-container ${checkSh ? "" : "on"}`} id={props.idSl}>
                <div className="foot min">{props.min}</div>
                <div className="foot mid">medium</div>
                <div className="foot max">{props.max}</div>
                <div id={props.idSl + 'Fill'}className="left" style={{width: width}}></div>
                <div className="track"></div>
                <div
                    id={props.idSl + 'Tip'}
                    className="slider-tip"
                    style={{left: left}}
                >
                    {value}
                </div>
                <input
                    type="range"
                    min="10"
                    max="100"
                    value={value}
                    step="1"
                    className="slider"
                    id={props.idSl + "Range"}
                    disabled = {checkSh}
                    onChange={valueAuto}
                />
            </div>
        </>
    );
}

export default Header;
