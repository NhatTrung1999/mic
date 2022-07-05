function WidgetLeft() {
    return (
        <div className="widget-col col-left flex">
            <div className="widget" id="micPhone">
                <div className="help"></div>
                <div className="tip">
                    I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
                    I'm just a tooltip. I'm just a tooltip.
                </div>

                <div className="title">
                    microphone
                    <div className="switch on switch-slider" id="swPhone">
                        <div className="handle"></div>
                    </div>
                </div>

                <div className="h2-title">mic volume</div>
                <div className="slider-container" id="slPhone">
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value="55"
                        step="1"
                        className="slider"
                        id="slPhoneRange"
                    />
                </div>

                <div className="h2-title mt20">
                    mic sensitivity
                    <div className="switch on switch-slider" id="swSensi">
                        <div className="handle"></div>
                    </div>
                </div>
                <div className="h2-body">
                    Adjust this setting to remove unwanted background noise or
                    increase the amount of mic output heard
                </div>
                <div className="slider-container" id="slSensi">
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value="55"
                        step="1"
                        className="slider"
                        id="slSensiRange"
                    />
                </div>
            </div>
        </div>
    );
}

export default WidgetLeft;
