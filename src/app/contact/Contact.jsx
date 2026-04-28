import React, { useState } from 'react'
import Feedback from '../components/Feedback'
import ContactUs from '../components/ContactUs' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom"
import Loading from '../components/Loading';

function Contact() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
    <FontAwesomeIcon icon={faArrowLeft} className='back-icon' title="Back" onClick={handleBackClick} />
    <div className='contact' id='contact'>
      <div className="f"><Feedback setLoading={setLoading} /></div>
      <div className="c"><ContactUs /></div>
      {loading && <Loading/>}
    </div>
    </>
  )
}

export default Contact
