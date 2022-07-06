function CheckBox(props) {
    return (
        <div className="check-item">
            <input type="checkbox" id={props.id} />
            <label htmlFor={props.id} className="check-box">
                <div class="check-text">{props.content}</div>
            </label>
        </div>
    );
}

export default CheckBox;
