"use client"

import React, { useRef } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const Feedback = ({ setLoading }) => {

  const form = useRef()

  const initialValues = {
    name: '',
    email: '',
    message: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    message: Yup.string().required('Message is required')
  })

  const onSubmit = async (values, { resetForm }) => {
    try { 
      setLoading(true)

      const formData = new URLSearchParams()
      formData.append("name", values.name)
      formData.append("email", values.email)
      formData.append("message", values.message)

      const res = await fetch("https://script.google.com/macros/s/AKfycbxTasldK8MCpBvdieFrv9Sj7Hbz6Q18xen5krfSvkNd3eNC385UteHQKLOTr-KVXVroaQ/exec", {
        method: "POST",
        body: formData,
      });
      const text = await res.text();
      console.log("Response:", text);
      alert("Feedback Submitted Sucessfully!")
      resetForm()

    } catch (error) {
      console.log(error)
      alert("Failed to send feedback")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='feedback-form'>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form ref={form}>
          <div className="inputs-div">
            <h1 className='feed'>Feedback</h1>

            <div className="input">
              <Field name="name" placeholder='Your Name' className="input-field" />
              <ErrorMessage name="name" component="div" className="error" />
            </div>

            <div className="input">
              <Field name="email" placeholder='Your Email' className="input-field" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="input">
              <Field name="message" placeholder='Your Message' className="input-field" />
              <ErrorMessage name="message" component="div" className="error" />
            </div>

            <button type="submit" className='submit-btn'>
              Send Message
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}

export default Feedback