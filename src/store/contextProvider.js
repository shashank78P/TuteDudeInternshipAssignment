import {  useState } from "react";
import CreateContext1 from "./createContext";

const ContextProvider1 = (props) =>{
    const [path,setPath] = useState([
        {
            title : "UI/UX",
            link : "/UI/UX/Refer&Earn/",
        },
        {
            title : "Refer & Earn",
            link : "/UI/UX/Refer&Earn/",
        },
    ]);

    const [referAndEarn,setReferAndEarn] = useState([
        {
            "id":0,
            "link":"/UI/UX/Refer&Earn/FriendsRefered",
            "content":"Friends Referred",
        },
        {
            "id":1,
            "link":"",
            "content":"Terms & Conditions"
        },
    ])
    
    return(
        <CreateContext1.Provider value={{path,referAndEarn,setPath}}>
            {props.children}
        </CreateContext1.Provider>
    )
}

export default ContextProvider1;