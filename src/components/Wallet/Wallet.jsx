import {useState} from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import './Wallet.css';

const Wallet =({saveState})=>{
      const [connected,setConnected]=useState(true);
      const isAndroid = /android/i.test(navigator.userAgent);
      const init =async()=>{
      try{
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({method:'eth_requestAccounts'});
        const contract = new web3.eth.Contract(
            ABI,
            "0x4A70775f80153500e1eC1823adb645298EE93560"
        );
         setConnected(false);
         saveState({web3:web3,contract:contract});
      }catch(error){
        alert("Please Install Metamask");
      }
        
      }
      return<>
      <div className="header">
      {isAndroid  && <button className="connectBTN">
         <a href="https://metamask.app.link/dapp/rahuljoysoyal.netlify.app/">Click For Mobile</a>
        </button>  } 
       <button className="connectBTN" onClick={init} disabled={!connected}> {connected? "Connect to Metamask":"Connected"}</button>
      </div>
      </>
}
export default Wallet;