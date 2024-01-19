import { useEffect, useState } from "react";

// FUNCTION USE EFFECT
function _3_MyFunctionUseEffect(props){

    // STATE 
    const [secondMiuul,setSecondMiuul]=useState(0);

    // USE EFFECT
    useEffect(()=>{
        const intervalMiuulId=setInterval(()=>{
            setSecondMiuul(precSeconds=>precSeconds+1);
        },1000 ); //end setInterval

        //useEffect cleaner
        return()=>{
            clearInterval(intervalMiuulId);
        }
    },[]); //end useEffect //  bağımlılıklar dizisi boş: Eklendiği zaman çalşsın

return(
<div>
    <p>Gecen süre: {secondMiuul}</p>
</div>
); //end return
} //end MyFunctionUseEffect

export default _3_MyFunctionUseEffect