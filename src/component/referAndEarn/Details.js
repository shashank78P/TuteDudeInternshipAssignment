import DataDetails from "../../data/details";

const Details = () => {


    return (
        <>
            <h1 className="Header">How does it work ?</h1>
            <div className="dbox flexCenter">
                {
                    DataDetails.map((ele) => {
                        return (
                            <div key={ele.id} className="detailsCard flexCenter">
                                <div className="dImage">
                                    <img src={ele.image} alt={ele.alt}></img>
                                </div>
                                <div className="dInfo">
                                    <h3>{ele.title}</h3>
                                    <p>{ele.discription}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Details;