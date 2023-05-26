import React from 'react'
import './Handles.css'
import { AiFillLinkedin, AiFillTwitterSquare } from 'react-icons/ai';
import { FaGithubSquare, FaKaggle } from 'react-icons/fa';

const Handles = () => {
  return (
    <section className='socials'>
      <a href="https://www.linkedin.com/in/rahul-joysoyal/" target='_blank' rel="noopener noreferrer"><AiFillLinkedin className='icon' /></a>
      <a href="https://twitter.com/rahul_joysoyal" target='_blank' rel="noopener noreferrer"><AiFillTwitterSquare className='icon' /></a>
      <a href="https://github.com/RahulJoysoyal" target='_blank' rel="noopener noreferrer"><FaGithubSquare className='icon' /></a>
      <a href="https://www.kaggle.com/rahuljoysoyal" target='_blank' rel="noopener noreferrer"><FaKaggle className='icon' />
      </a>


    </section>
  )
}

export default Handles
