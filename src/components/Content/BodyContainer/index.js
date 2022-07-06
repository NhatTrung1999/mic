import Help from './Help';
import Title from './Title';
import CheckBox from './CheckBox';

function BodyContainer() {
    return ( 
        <div className="body-widgets flex">
            <div className="widget" id="micPhone">
                <Help />
                <Title
                    class="title"
                    title="microphone"
                    more={(<div className='h2-title'>mic volume</div>)}
                    min="10"
                    max="100"
                    value="55"
                    id="slPhone"
                />
            </div>
        </div>
     );
}

export default BodyContainer;