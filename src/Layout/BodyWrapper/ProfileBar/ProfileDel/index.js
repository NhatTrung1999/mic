function DeleteProfile() {
    return (
        <div id="deleteAlert" className="flex alert profile-del">
            <div className="title">delete profile</div>
            <div className="body-text t-center">
                You're about to delete this profile. All bindings in this
                profile will be deleted.
            </div>
            <div className="thx-btn" id="deleteConfirm">
                delete
            </div>
        </div>
    );
}

export default DeleteProfile;