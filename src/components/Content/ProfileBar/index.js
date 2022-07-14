import { useState } from "react";

function ProfileBar() {
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
    const [showMore, setShowMore] = useState(false);
    const [showdl, setShowdl] = useState(false);
    const [showDrop, setShowDrop] = useState(false);
    const [title, setTitle] = useState("profile 5");
    const [ListProfile, setListProfile] = useState(ListDrop);
    const [indexID, setIndexID] = useState(0);
    const [showIP, setShowIP] = useState(false);
    const [save, setSave] = useState(false);

    const dropDown = () => {
        setShowDrop(!showDrop);
    };

    const clickMore = () => {
        setShowMore(!showMore);
    };

    const clickShowDl = () => {
        setShowdl(!showdl);
    };

    const clickShowIP = () => {
        setShowIP(!showIP);
    };

    document.querySelector("html").onclick = (e) => {
        if (e.target !== document.getElementById("profileDrop")) {
            setShowDrop(false);
        }
        if (e.target !== document.getElementById("profileMenuToggle")) {
            setShowMore(false);
        }
        if (showIP === true) {
            if (e.target !== document.getElementById("profileEdit")) {
                setSave(true);
            }
        }
        
        if (save === true) {
            renameProfile();
            setSave(false);
            setShowIP(!showIP);
        }
    };

    const addProfile = () => {
        let name = "";
        let up = 0;
        for (var i = 0; i < ListProfile.length; i++) {
            if (
                ListProfile[i].replace(" ", "").substring(0, 10) ===
                "newprofile"
            ) {
                up++;
            }
        }
        if (up === 0) {
            name = "new profile";
        } else {
            name = "new profile (" + up + ")";
        }
        setListProfile([...ListProfile, name]);
        setTitle(name);
    };

    const duplicateProfile = () => {
        let name = title;
        let dupCounter = 0;

        var open = name.lastIndexOf("(");
        var close = name.lastIndexOf(")");
        if (open > 0 && close > 0 && close > open) {
            dupCounter = parseInt(name.substring(open + 1, close)) + 1;
            name = name.substring(0, open);
        } else {
            dupCounter = 1;
        }

        name = name + " (" + dupCounter + ")";

        setListProfile([...ListProfile, name]);
        setTitle(name);
    };

    const deleteProfile = () => {
        if (ListProfile.length <= 1) {
            // hien attribute disabled
        }

        const newProfile = [...ListProfile];
        newProfile.splice(indexID, 1);
        setListProfile(newProfile);
        setShowdl(false);
        setTitle(ListProfile[indexID - 1]);
        setIndexID(indexID - 1);
        return newProfile;
    };

    const renameProfile = () => {
        if (title !== "") {
            const newTodoList = [...ListProfile];
            newTodoList.fill(title, indexID, indexID + 1);
            setListProfile(newTodoList);
            setShowdl(false);
            setTitle(title);
            return newTodoList;
        }
    }

    const handleFocus = (event) => {
        const newValue = event.target.select();
        console.log(newValue)
    }

    return (
        <div className="profile-bar flex">
            <div className="loader" tooltip="Syncing Profiles"></div>
            <div>profile</div>
            <input
                type="text"
                name="profile"
                id="profileEdit"
                maxLength="25"
                onFocus={handleFocus}
                value={title}
                className={`${showIP ? "show" : ""}`}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
            />

            <div className="dropdown-area" onClick={dropDown}>
                <div
                    id="profileDrop"
                    className={`s3-dropdown ${showDrop ? "expand" : ""}`}
                >
                    <div className="selected">{title}</div>
                    <div className="icon expand"></div>
                </div>
                <div
                    id="profileDropOpt"
                    className={`s3-options flex ${showDrop ? "expand" : ""}`}
                >
                    {ListProfile.map((item, index) => (
                        <div
                            className="option"
                            onClick={() => {
                                setTitle(item);
                                setIndexID(index);
                            }}
                            id={index}
                            key={index}
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>

            <div
                className={`dots3 hover-border ${showMore ? "active" : ""}`}
                id="profileMenuToggle"
                onClick={clickMore}
            >
                <div
                    className={`profile-act ${showMore ? "show" : ""}`}
                    id="profileMenu"
                >
                    <div className="act action" onClick={addProfile}>
                        add
                    </div>
                    <div className="act action">import</div>
                    <div className="act divider"></div>
                    <div className="act action" onClick={clickShowIP}>
                        rename
                    </div>
                    <div className="act action" onClick={duplicateProfile}>
                        duplicate
                    </div>
                    <div className="act action">export</div>
                    <div className="act divider"></div>
                    <div
                        className="act action"
                        id="deleteAction"
                        onClick={clickShowDl}
                    >
                        delete
                    </div>
                </div>
            </div>

            <div
                id="deleteAlert"
                className={`flex alert profile-del ${showdl ? "show" : ""}`}
            >
                <div className="title">delete profile</div>
                <div className="body-text t-center">
                    You're about to delete this profile. All bindings in this
                    profile will be deleted.
                </div>
                <div
                    className="thx-btn"
                    id="deleteConfirm"
                    onClick={deleteProfile}
                >
                    delete
                </div>
            </div>

            <div className="obm hover-border" tooltip="On-board Profiles"></div>
            <div className="divider"></div>
            <div className="batt batt-30" tooltip="30% Battery"></div>
        </div>
    );
}

export default ProfileBar;
