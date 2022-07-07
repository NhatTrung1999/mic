import ProfileBar from './ProfileBar';
import BodyContainer from './BodyContainer';

function Content() {
    return (
        <div className="body-wrapper scrollable">
            <ProfileBar />
            <BodyContainer />
        </div>
    );
}

export default Content;
