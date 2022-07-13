function CheckBox(props) {
    return (
        <>
            <div className="check-item">
                <input type="checkbox" id={props.idCk} onClick={props.onClick}/>
                <label htmlFor={props.idCk} className="check-box">
                    <div className="check-text">{props.ckText}</div>
                </label>
            </div>
        </>
    );
}

export default CheckBox;
