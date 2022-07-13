import { useState } from "react";
import Slider from "../Container/Slider";
import Switch from "../Container/Switch";

function MicroPhone() {

    const [checkSh, setCheckSh] = useState(false);

    const clickCheckSh = () => {
        setCheckSh(!checkSh)
    }

    return (
        <>
            <Slider
                title="title"
                text="microphone"
                idSw="swPhone"
                more={<div className="h2-title">mic volume</div>}
                switch={checkSh ? "" : "on"}
                onClick={clickCheckSh}
            />
            <Switch
                idSl="slPhone"
                min="low"
                max="high"
                minium={10}
                maxium={100}
                start={55}
                end={520}
                slider={checkSh ? "" : "on"}
                disabled={checkSh}
            />
        </>
    );
}

export default MicroPhone;
