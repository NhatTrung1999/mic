function MenuToggle() {
    return (
        <div className="dots3 hover-border" id="profileMenuToggle">
            <div className="profile-act" id="profileMenu">
                <div className="act action">add</div>
                <div className="act action">import</div>
                <div className="act divider"></div>
                <div className="act action">rename</div>
                <div className="act action">duplicate</div>
                <div className="act action">export</div>
                <div className="act divider"></div>
                <div className="act action" id="deleteAction">
                    delete
                </div>
            </div>
        </div>
    );
}

export default MenuToggle;