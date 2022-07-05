import Dropdown from "./Dropdown";
import MenuToggle from "./MenuToggle";
import ProfileDel from "./ProfileDel";
import './profile-bar.css';

function ProfileBar() {
    return (
        <div class="profile-bar flex">
            <div class="loader" tooltip="Syncing Profiles"></div>
            <div>profile</div>

            <input type="text" name="profile" id="profileEdit" maxlength="25" />

            <Dropdown />

            <MenuToggle />

            <ProfileDel />

            <div class="obm hover-border" tooltip="On-board Profiles"></div>
            <div class="divider"></div>
            <div class="batt batt-30" tooltip="30% Battery"></div>
        </div>
    );
}

export default ProfileBar;
