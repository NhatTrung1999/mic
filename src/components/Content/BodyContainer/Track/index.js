function Track(props) {
    return (
        <>
            <div className="foot min">{props.min}</div>
            <div className="foot mid">{props.medium}</div>
            <div className="foot max">{props.max}</div>
            <div id={ props.sl + "Fill"} style={props.width}></div>
            <div className="track"></div>
            <div id={ props.sl + "Tip"} className="slider-tip" style={props.left}>{props.number}</div>
        </>
    );
}

export default Trac
