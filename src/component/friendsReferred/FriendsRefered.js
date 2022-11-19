import Nav from "../nav";
import Path from "../path";
import FooterLink from "../footerLink";
import CreateContext1 from "../../store/createContext";
import { useContext } from 'react';
import Cards from "./card"
import friendsEnrolledData from "../../data/friendsEnrolledData";
import img1 from "../../imges/Arrow 17.png"
import { useNavigate } from "react-router-dom";

const FriendsRefered = () => {
    const navigate = useNavigate()
    const contextData = useContext(CreateContext1)
    return (
        <>
            <Nav />
            <Path />
            <div className="contentSection">
                <div className="goBack" onClick={
                    ()=>{navigate(-1)}}><img className="arrow" src={img1} />go back</div>
                <div className="referralContainer">
                    <div className="referralBox1">
                        <div className="ReferralTitle">Your Referral Code </div>
                        <div className="referralCodeBox">
                            <h3 className="referralCode">EDCH54</h3>
                        </div>
                    </div>
                    <div className="walletBalance">
                        <div className="walletTitle">Wallet Balance</div>
                        <h3>₹ 500</h3>
                    </div>
                </div>
                <div className="friendsEnrolled">
                    <h2>Friends who enrolled<span style={{ color: "#6D6D6D" }}>({friendsEnrolledData.length})</span></h2>
                    <div className="EnrolledCardWrapper">
                        <Cards />
                        <div className="cover"></div>
                    </div>
                </div>
                <FooterLink referAndEarn={contextData.referAndEarn} display={false} />
            </div>

        </>
    )
}

export default FriendsRefered;