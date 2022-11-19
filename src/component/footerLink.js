import { Link } from "react-router-dom";

const FooterLink = (props) => {

    return (
        <>
            <div className="footerLinkSection">
                {
                    props.referAndEarn.map((ele, i) => {
                        if(ele.content === "Friends Referred" && (!props.display))
                            return
                        return (
                            <div key={ele.id}>
                                <Link to={ele.link + "/" +ele.content}
                                >{ele.content}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FooterLink;