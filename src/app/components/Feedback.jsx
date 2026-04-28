import React, { useRef } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs from '@emailjs/browser';

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

      await emailjs.sendForm(
        'service_3xs9iqc',
        'template_u09iiy3',
        form.current,
        { publicKey: '5NYUNk6egOmHicaIZ' }
      )

      alert("Feedback Sent Successfully!")
      resetForm()
      console.table(values)

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