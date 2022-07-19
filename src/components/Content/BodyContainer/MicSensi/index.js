import { useState } from "react";
import Slider from "../Container/Slider";
import Switch from "../Container/Switch";

function MicSensi() {

    const [checkSh, setCheckSh] = useState(false);

    const clickCheckSh = () => {
        setCheckSh(!checkSh)
    }

    return (
        <>
            <Switch
                title="h2-title mt20"
                text="mic sensitivity"
                idSw="swSensi"
                more={
                    <div className="h2-title">
                        Adjust this setting to remove unwanted background noise
                        or increase the amount of mic output heard
                    </div>
                }
                switch={checkSh ? "" : "on"}
                onClick={clickCheckSh}
            />

            <Slider
                idSl="slSensi"
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

export default MicSensi;
