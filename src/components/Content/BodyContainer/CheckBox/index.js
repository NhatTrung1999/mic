import { useState } from "react";

function CheckBox(props) {
    const [checkSh, setCheckSh] = useState(false);

    const clickCheckSh = () => {
        setCheckSh(!checkSh);
    };

    return (
        <>
            <div className="check-item">
                <input type="checkbox" id={props.idCk} onClick={clickCheckSh} />
                <label htmlFor={props.idCk} className="check-box">
                    <div className="check-text">{props.ckText}</div>
                </label>
            </div>

            <div className={`slider-container ${checkSh ? "on" : ""}`} id={props.idSl}>
                <div className="foot min">low</div>
                <div className="foot mid">medium</div>
                <div className="foot max">high</div>
                <div
                    id={props.idSl + "Fill"}
                    className="left"
                    // style={{width: width}}
                ></div>
                <div className="track"></div>
                <div
                    id={props.idSl + "Tip"}
                    className="slider-tip"
                    // style={{ left: left }}
                >
                    {/* {value} */}
                </div>
                <input
                    type="range"
                    min={10}
                    max={100}
                    // value={value}
                    step={1}
                    className="slider"
                    id={props.idSl + "Range"}
                    // onChange={autoSetvalue}
                />
            </div>
        </>
    );
}

export default CheckBox;
