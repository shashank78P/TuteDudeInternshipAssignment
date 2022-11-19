import './App.css';
import Nav from './component/nav';
import Path from './component/path';
import WithdrawBalance from './component/referAndEarn/withdrawBalance';
import ReferralCodeCard from './component/referAndEarn/ReferralCodeCard';
import Details from './component/referAndEarn/Details';
import FooterLink from './component/footerLink';
import CreateContext1 from './store/createContext';
import { useContext } from 'react';

function App() {
  const flag = true
  const contextData = useContext(CreateContext1)
  return (
    <>
      <Nav />
      <Path />
      <section className='contentSection'>
        <div className='content'>
          <WithdrawBalance />
          <ReferralCodeCard />
        </div>
          <Details />
          <FooterLink referAndEarn= {contextData.referAndEarn} display={flag}/>
      </section>
    </>
  );
}

export default App;