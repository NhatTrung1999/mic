import Header from "./Header";
import Tooltip from "./Tooltip";
import CheckBox from "./CheckBox";

function BodyContainer() {
    return (
        <div className="body-widgets flex">
            <div className="widget-col col-left flex">
                <div className="widget" id="micPhone">
                    <Tooltip />
                    <Header
                        title="title"
                        text="microphone"
                        idSw="swPhone"
                        more={<div className="h2-title">mic volume</div>}
                        idSl="slPhone"
                        min="low"
                        max="high"
                        minium={10}
                        maxium={100}
                        start={55}
                        end={520}
                    />

                    <Tooltip />
                    <Header
                        title="h2-title mt20"
                        text="mic sensitivity"
                        idSw="swSensi"
                        more={
                            <div className="h2-title">
                                Adjust this setting to remove unwanted
                                background noise or increase the amount of mic
                                output heard
                            </div>
                        }
                        idSl="slSensi"
                        min="low"
                        max="high"
                        minium={10}
                        maxium={100}
                        start={55}
                        end={520}
                    />
                </div>
            </div>

            <div className="widget-col col-right flex">
                <div className="widget" id="micSidetone">
                    <Tooltip />
                    <Header
                        title="title"
                        text="sidetone"
                        idSw="swSide"
                        idSl="slSide"
                        min={0}
                        max={100}
                        minium={0}
                        maxium={100}
                        start={50}
                        end={520}
                    />
                </div>

                <div className="widget" id="micEnhance">
                    <Tooltip />
                    <div className="title">enhancements</div>
                    <CheckBox
                        idCk="checkNorm"
                        ckText="Volume Normalization"
                        idSl="slNorm"
                        minium={10}
                        maxium={100}
                        start={50}
                        end={490}
                    />

                    <CheckBox
                        idCk="checkAmb"
                        ckText="Ambient Noise Reduction"
                        idSl="slAmb"
                        minium={10}
                        maxium={100}
                        start={50}
                        end={490}
                    />

                    <CheckBox
                        idCk="checkClarity"
                        ckText="Voice Clarity"
                        idSl="slClarity"
                        minium={10}
                        maxium={100}
                        start={50}
                        end={490}
                    />
                </div>
            </div>
        </div>
    );
}

export default BodyContainer;
