import friendsEnrolledData from "../../data/friendsEnrolledData"

const Cards = () => {

    const courses = (i) => {
        return (i.map((course, j) => {
            return (<span className="course">{course}</span>)
        }))
    }
    return (
        <>
            <div className="cardContainer">
                {
                    friendsEnrolledData.map((ele, i) => {
                        return (<div className="cards">
                            <div key={i} className="row">
                                <h2>{ele.name}</h2>
                                <h3>{ele.date}</h3>
                            </div>
                            <h3 className="h3">Courses Enrolled({ele.courses.length})</h3>
                            <div className="courseDetails">
                                {
                                    courses(ele.courses)
                                }
                            </div>
                            <div>
                                <h2 className="referralAmnt">
                                    Referral Amount
                                    <span className="amount">{ele.referralAmount}</span>
                                </h2>
                            </div>
                        </div>)
                    })
                }

            </div>
        </>
    )
}

export default Cards