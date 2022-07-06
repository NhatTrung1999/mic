import { useState } from "react";

function MenuToggle() {
    const [showMore, setShowMore] = useState(false);
    
    const clickMore = () => {
        setShowMore(!showMore);
        
    };

    return (
        <div
            className={showMore ? "dots3 hover-border active" : "dots3 hover-border"}
            id="profileMenuToggle"
            onClick={clickMore}
        >
            {showMore && (
                <div className={showMore ? "profile-act show" : "profile-act"} id="profileMenu">
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
            )}
        </div>
    );
}

export default MenuToggle;
