import BodyWidgets from './BodyWidgets';
import ProfileBar from './ProfileBar';

function BodyWrapper() {
    return (
        <div className="body-wrapper scrollable">
            <ProfileBar />
            <BodyWidgets />
        </div>
    )
}

export default BodyWrapper;