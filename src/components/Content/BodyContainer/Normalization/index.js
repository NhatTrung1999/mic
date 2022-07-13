import { useState } from "react";
import CheckBox from "../Container/CheckBox";
import Switch from "../Container/Switch";

function Normalization() {

    const [isCheck, setIsCheck] = useState(false);

    const clickIsCheck = () => {
        setIsCheck(!isCheck)
    }

    return (
        <>
            <CheckBox idCk="checkNorm" ckText="Volume Normalization" onClick={clickIsCheck}/>
            <Switch
                idSl="slNorm"
                minium={10}
                maxium={100}
                start={50}
                end={490}
                slider={isCheck ? "on" : ""}
            />
        </>
    );
}

export default Normalization;
