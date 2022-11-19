import widthDrawBalanceData from "../../data/withdrawBalanceData";

const WithdrawBalance = () =>{

    function Card(title,amount,i){
        return(
            <>
            <div key={i} className="wtdrwCard">
                <p className="wtdrwTitle">{title}</p>
                <h3 className="wtdrwAmount">{amount}</h3>
            </div>
            </>
        )
    }
    return(
        <>
            <div className="wtdrwCardFrame flexCenter">
                {
                    widthDrawBalanceData.map((ele,i)=>{
                        return(
                                Card(ele.title,ele.amount,ele.id)
                        )
                    })
                }
                <div className="widthdrawBtn">Withdraw Balance</div>
            </div>
        </>
    )
}

export default WithdrawBalance;