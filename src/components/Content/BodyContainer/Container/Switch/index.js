

function Switch(props) {

    return (
        <>
            <div className={props.title}>
                {props.text}

                <div className={`switch ${props.switch} switch-Switch`} id={props.idSw} onClick={props.onClick}>
                    <div className="handle"></div>
                </div>
            </div>
            {props.more}
        </>
    );
}

export default Switch;
