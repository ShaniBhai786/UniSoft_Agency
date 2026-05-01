"use client"
import React, {useEffect, useRef, useState} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from '@emailjs/browser';
import Loading from "../components/Loading";
import { motion } from "framer-motion";

function Quote() {
  const [loading, setLoading] = useState(false)
  
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Please Enter Contact number"),
    service: Yup.string().required("Please select a service"),
    message: Yup.string().required("Please describe your project")
  });

  const form = useRef()
  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true)
      await emailjs.sendForm('service_3xs9iqc', 'template_0ds7q6l', form.current, {
        publicKey: '5NYUNk6egOmHicaIZ',
      })
      resetForm();
    } catch (error) {
      console.log(error)      
      alert("Error Getting a Qoute, Please try again later")
    }
    finally{
      alert("Quote request sent successfully!");
      setLoading(false)
    }
    console.log(values);
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  },[!onSubmit])
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="quote" id="quote">
      {loading && <Loading />}
      <motion.div
              key={1}
              className="quote-header"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 1 * 0.2 }}
              viewport={{ once: true }}
            >
        <h2>Get a Quote</h2>
        <p>
          Tell us about your project and the UniSoft team will provide a
          customized solution for your business.
        </p>
      </motion.div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >

        <Form className="quote-form" ref={form}>

          <motion.div
              key={2}
              className="form-group"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 2 * 0.2 }}
              viewport={{ once: true }}
            >
            <Field type="text" name="name" placeholder="Your Name" />
            <ErrorMessage name="name" component="span" className="error"/>
          </motion.div>

          <motion.div
              key={3}
              className="form-group"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 2 * 0.2 }}
              viewport={{ once: true }}
            >
            <Field type="email" name="email" placeholder="Your Email" />
            <ErrorMessage name="email" component="span" className="error"/>
          </motion.div>

          <motion.div
              key={4}
              className="form-group"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 2 * 0.2 }}
              viewport={{ once: true }}
            >
            <Field type="tel" name="phone" placeholder="Phone Number" />
          </motion.div>

          <motion.div
              key={5}
              className="form-group"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 2 * 0.2 }}
              viewport={{ once: true }}
            >
            <Field as="select" name="service">
              <option value="">Select Service</option>
              <option value="SEO Service">SEO Service</option>
              <option value="Website Development">Website Development</option>
              <option value="Web Application">Web Application</option>
              <option value="Custom Software">Custom Software</option>
              <option value="Business Management">Business Management</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Meta Ads">Meta Ads</option>
              <option value="Graphics Design Services">Graphics Design Services</option>
            </Field>
            <ErrorMessage name="service" component="span" className="error"/>
          </motion.div>

          <motion.div
              key={6}
              className="form-group"
              initial="hidden"
              whileInView="show"
              variants={fadeUp}
              transition={{ delay: 2 * 0.2 }}
              viewport={{ once: true }}
            >
            <Field
              as="textarea"
              name="message"
              rows="5"
              placeholder="Describe your project"
            />
            <ErrorMessage name="message" component="span" className="error"/>
          </motion.div>

          <button type="submit">Request Quote</button>

        </Form>

      </Formik>

    </section>
  );
}

export default Quote;