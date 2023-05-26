import {useState,useEffect} from "react";
import './Experience.css'
import { SlCalender } from "react-icons/sl"


const Experience = ({state}) => {
    const [education,setEducation]=useState("");

    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const education = await contract.methods.allEductationDetails().call();
            setEducation(education);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {education!=="" && education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.year}</h3>
                        <p className="card-text3">{edu.degree}</p>
                        <p className="card-text3">{edu.knowledgeAcquired}</p>
                        <p className="card-text4">{edu.instutionName}</p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> April 2022 - May 2022
                        </p>
                        <h3 className="card-text2">Intern</h3>
                        <p className="card-text3">Learned how to act in an industrial environment</p>
                        <p className="card-text4">
                            Dresden Textiles Limited
                        </p>
                    </div>
                    {/* card2 */}
                    {/*
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
                    */}
                    {/* card3 */}
                    {/*
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2013 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">learned this this and that.learned this this and that.learned this this and that.learned this this and that.</p>
                        <p className="card-text4">
                            Code Eater
                        </p>
                    </div>
                    */}
              </div>
            </div>
        </section>
    )
}

export default Experience
