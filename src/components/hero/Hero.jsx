import React, { useEffect, useState} from 'react'
import { Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../assets/Rahul.png'
import './Hero.css'

const Hero = ({state}) => {
    const [modal, setModal] = useState(false);
    const [description,setDescription]=useState("");
    const [cid,setCid]=useState("");
    useEffect(()=>{
      const {contract}=state;
      const description=async()=>{
        const descriptionText = await contract.methods.description().call();
        setDescription(descriptionText);
      }
      contract && description();
    },[state])
    useEffect(()=>{
        const {contract}=state;
        const cidOfImage=async()=>{
          const cid = await contract.methods.imageLink().call();
          setCid(cid);
        }
        contract && cidOfImage();
      },[state])
    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p><span>Rahul </span>
                    is a Full-Stack Blockchain Developer From Bangladesh.</p>
                <h1>I develop decentralized apps in web3 space.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id - rahuljoysoyal@gmail.com
                                </label>

                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={"https://ipfs.io/ipfs/QmTKVvmSLLA62k7xxbMRybap8QrAyK2k2QCfze6AZjgwSj?filename=IMG20230111135758-removebg-preview.png"} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
