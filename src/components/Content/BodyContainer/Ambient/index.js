import { useState } from "react";
import CheckBox from "../Container/CheckBox";
import Switch from "../Container/Switch";

function Ambient() {

    const [isCheck, setIsCheck] = useState(false);

    const clickIsCheck = () => {
        setIsCheck(!isCheck)
    }

    return (
        <>
            <CheckBox idCk="checkAmb" ckText="Ambient Noise Reduction" onClick={clickIsCheck}/>
            <Switch
                idSl="slAmb"
                minium={10}
                maxium={100}
                start={50}
                end={490}
                slider={isCheck ? "on" : ""}
            />
        </>
    );
}

export default Ambient;
