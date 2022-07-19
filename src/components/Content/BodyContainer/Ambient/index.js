import { useState } from "react";
import CheckBox from "../Container/CheckBox";
import Slider from "../Container/Slider";

function Ambient() {

    const [isCheck, setIsCheck] = useState(false);

    const clickIsCheck = () => {
        setIsCheck(!isCheck)
    }

    const handleChange = (e) => {
        return [...isCheck, e.target.checked]
    } 

    return (
        <>
            <CheckBox ckText="Ambient Noise Reduction" onClick={clickIsCheck} checked={isCheck} onChange={handleChange}/>
            <Slider
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
