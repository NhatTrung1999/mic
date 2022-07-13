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

    const dropDown = () => {
        setShowDrop(!showDrop);
    };

    const clickMore = () => {
        setShowMore(!showMore);
    };

    const clickShowDl = () => {
        setShowdl(!showdl);
    };

    const addProfile = () => {
        let name = "new profile";
        setListProfile([...ListProfile, name]);
        setTitle(name);
    };

    const deleteProfile = (id) => {
        if(ListProfile.length <= 1) {
            // hien attribute disabled
        }

        const newProfile = [...ListProfile]
        newProfile.splice(indexID, 1);
        setListProfile(newProfile);
        setShowdl(false);
        setTitle(ListProfile[indexID - 1]);
        setIndexID(indexID - 1)
        return newProfile;
    };

    return (
        <div className="profile-bar flex">
            <div className="loader" tooltip="Syncing Profiles"></div>
            <div>profile</div>
            <input type="text" name="profile" id="profileEdit" maxLength="25" />

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
                                setIndexID(index)
                            }}
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
                    <div className="act action">rename</div>
                    <div className="act action">duplicate</div>
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
