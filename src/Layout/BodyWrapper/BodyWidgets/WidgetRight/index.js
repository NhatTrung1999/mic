function WidgetRight() {
    return (
        <div className="widget-col col-right flex">
            <div className="widget" id="micSidetone">
                <div className="help"></div>
                <div className="tip">
                    I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
                    I'm just a tooltip. I'm just a tooltip.
                </div>
                <div className="title">
                    sidetone
                    <div className="switch switch-slider" id="swSide">
                        <div className="handle"></div>
                    </div>
                </div>
                <div className="slider-container" id="slSide">
                    <input
                        type="range"
                        min="0"
                        max="100"
                        value="50"
                        step="1"
                        className="slider"
                        id="slSideRange"
                    />
                </div>
            </div>
            <div className="widget" id="micEnhance">
                <div className="help"></div>
                <div className="tip">
                    I'm just a tooltip. I'm just a tooltip. I'm just a tooltip.
                    I'm just a tooltip. I'm just a tooltip.
                </div>
                <div className="title">enhancements</div>

                <div className="check-item">
                    <input type="checkbox" id="checkNorm" />
                    <label for="checkNorm" className="check-box">
                        <div className="check-text">Volume Normalization</div>
                    </label>
                </div>
                <div className="slider-container" id="slNorm">
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value="50"
                        step="1"
                        className="slider"
                        id="slNormRange"
                    />
                </div>

                <div className="check-item">
                    <input type="checkbox" id="checkAmb" />
                    <label for="checkAmb" className="check-box">
                        <div className="check-text">Ambient Noise Reduction</div>
                    </label>
                </div>
                <div className="slider-container" id="slAmb">
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value="50"
                        step="1"
                        className="slider"
                        id="slAmbRange"
                    />
                </div>

                <div className="check-item">
                    <input type="checkbox" id="checkClarity" />
                    <label for="checkClarity" className="check-box">
                        <div className="check-text">Voice Clarity</div>
                    </label>
                </div>
                <div className="slider-container" id="slClarity">
                    <input
                        type="range"
                        min="10"
                        max="100"
                        value="50"
                        step="1"
                        className="slider"
                        id="slClarityRange"
                    />
                </div>
            </div>
        </div>
    );
}

export default WidgetRight;
