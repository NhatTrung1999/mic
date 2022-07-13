import { useState } from "react";
import Slider from "../Container/Slider";
import Switch from "../Container/Switch";

function SideTone() {
    const [checkSh, setCheckSh] = useState(true);

    const clickCheckSh = () => {
        setCheckSh(!checkSh);
    };

    return (
        <>
            <Slider
                title="title"
                text="sidetone"
                idSw="swSide"
                idSl="slSide"
                switch={checkSh ? "" : "on"}
                onClick={clickCheckSh}
            />
            <Switch
                min={0}
                max={100}
                minium={0}
                maxium={100}
                start={50}
                end={520}
                slider={checkSh ? "" : "on"}
                disabled={checkSh}
            />
        </>
    );
}

export default SideTone;
