import { FaAngleRight } from "react-icons/fa"
import CreateContext1 from "../store/createContext"
import { useContext, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const Path = () => {
    const data = useParams();
    const contextData = useContext(CreateContext1)

    const [initialRender,setInitialRender] = useState(true)

    //useEffect will checks whether params from url is Friends Referred
    //if so it will append it to path state
    
    useEffect(() => {
        if(initialRender)
        if (data.data === "Friends Referred"){
            contextData.setPath([
                ...contextData.path,
                {
                    title: data.data,
                    link: "#"
                }
            ])
            setInitialRender(!initialRender)
        }

        //else remove if previous param / last child of path is Friends Referred
        else {
            if (contextData.path.slice(-1)[0].title === "Friends Referred")
                contextData.setPath(contextData.path.slice(0,contextData.path.length-1))
        }
    }, [])

    return (
        <>
            <p className="path pathContainer">
                {
                    contextData.path.map((ele, i) => {
                        return (<Link to={ele.link} key={i}>{ele.title}
                            {
                                (i === contextData.path.length - 1) ?
                                    "" :
                                    <FaAngleRight className="path faAngleRight" />
                            }
                        </Link>)
                    })

                }
            </p>
        </>
    )
}

export default Path;