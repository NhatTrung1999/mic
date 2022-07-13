import Tooltip from "./Container/Tooltip";
import MicroPhone from "./MicroPhone";
import MicSensi from "./MicSensi";
import SideTone from "./SideTone";
import Normalization from "./Normalization";
import Ambient from "./Ambient";
import Clarity from "./Clarity";

function BodyContainer() {
    return (
        <div className="body-widgets flex">
            <div className="widget-col col-left flex">
                <div className="widget" id="micPhone">
                    <Tooltip />
                    <MicroPhone />

                    <Tooltip />
                    <MicSensi />
                </div>
            </div>

            <div className="widget-col col-right flex">
                <div className="widget" id="micSidetone">
                    <Tooltip />
                    <SideTone />
                </div>

                <div className="widget" id="micEnhance">
                    <Tooltip />
                    <div className="title">enhancements</div>
                    <Normalization />
                    <Ambient />
                    <Clarity />
                </div>
            </div>
        </div>
    );
}

export default BodyContainer;
