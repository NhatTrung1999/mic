import { useState } from "react";
import CheckBox from "../Container/CheckBox";
import Switch from "../Container/Switch";

function Clarity() {

    const [isCheck, setIsCheck] = useState(false);

    const clickIsCheck = () => {
        setIsCheck(!isCheck)
    }

    return (
        <>
            <CheckBox idCk="checkClarity" ckText="Voice Clarity" onClick={clickIsCheck}/>
            <Switch
                idSl="slClarity"
                minium={10}
                maxium={100}
                start={50}
                end={490}
                slider={isCheck ? "on" : ""}
            />
        </>
    );
}

export default Clarity;
