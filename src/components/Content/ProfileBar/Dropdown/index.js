import { useState } from "react";

function DropdownArea() {
    const ListDrop = [
        "default profile",
        "profile 2",
        "profile 3",
        "profile 4",
        "profile 5",
        "profile 6",
        "profile 7",
        "profile 8",
    ];

    const [showDrop, setShowDrop] = useState(false);
    const [title, setTitle] = useState('profile 5')

    const dropDown = () => {
        setShowDrop(!showDrop);
    }

    return (
        <div className="dropdown-area" onClick={dropDown}>
            <div id="profileDrop" className={showDrop ? "s3-dropdown expand" : "s3-dropdown"}>
                <div className="selected">{title}</div>
                <div className="icon expand"></div>
            </div>
            {showDrop && (<div id="profileDropOpt" className={showDrop ? "s3-options flex expand" : "s3-options flex"}>
                {ListDrop.map((item, index) => (
                    <div
                        className="option"
                        onClick={() => {setTitle(item)}}
                        key={index}
                    >{item}</div>
                ))}
            </div>)}
        </div>
    );
}

export default DropdownArea;
