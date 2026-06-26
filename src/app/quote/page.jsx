"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Loading from "../components/Loading";
import { motion } from "framer-motion";

function Quote() {
  const [loading, setLoading] = useState(false);

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0 },
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    service: Yup.string().required("Please select a service"),
    budget: Yup.string().required("Please Enter Your Project Budget"),
    message: Yup.string().required("Please describe your project"),
  });

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true);

      const formData = new URLSearchParams();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("service", values.service);
      formData.append("budget", values.budget)
      formData.append("phone", values.phone);
      formData.append("message", values.message);

      const res = await fetch("https://script.google.com/macros/s/AKfycbzA9o9yjJM54UQ9p5jcp0xT9XIcr5GDQhcTP19S9SrcGTO1eeJCBJ1UdQWhqn50GtYCHQ/exec", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();
      console.log("Response:", text);

      resetForm();
      alert("Submitted successfully!");
    } catch (error) {
      console.log(error);
      alert("Submission failed");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="quoteSection" id="quote">

      {/* BACKGROUND */}
      <div className="quoteGradient" />
      <div className="quoteGrid" />

      {loading && <Loading />}

      <div className="quoteContainer">

        {/* LEFT CONTENT */}
        <motion.div
          className="quoteLeft"
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >

          <span className="quoteBadge">
            START YOUR DIGITAL TRANSFORMATION 🚀
          </span>

          <h2>
            Let’s Build Powerful Solutions for Your Business
          </h2>

          <p>
            UniSoft helps businesses grow with high-performance
            software development, SEO optimization, web applications,
            branding, digital marketing, and automation solutions.
          </p>

          {/* FEATURES */}
          <div className="quoteFeatures">

            <div className="featureCard">
              <i className="ri-code-box-line"></i>

              <div>
                <h4>Custom Development</h4>
                <span>Scalable software & web apps</span>
              </div>
            </div>

            <div className="featureCard">
              <i className="ri-line-chart-line"></i>

              <div>
                <h4>SEO & Marketing</h4>
                <span>Increase traffic & conversions</span>
              </div>
            </div>

            <div className="featureCard">
              <i className="ri-shield-check-line"></i>

              <div>
                <h4>Reliable Support</h4>
                <span>Fast communication & assistance</span>
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          className="quoteRight"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="formWrapper">

            <div className="formTop">
              <h3>Request a Free Quote</h3>
              <p>
                Fill out the form and our team will contact you shortly.
              </p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form className="quoteForm">

                <div className="inputGroup">
                  <i className="ri-user-line"></i>

                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                  />
                </div>

                <ErrorMessage
                  name="name"
                  component="span"
                  className="error"
                />

                <div className="inputGroup">
                  <i className="ri-mail-line"></i>

                  <Field
                    type="email"
                    name="email"
                    placeholder="Email Address"
                  />
                </div>

                <ErrorMessage
                  name="email"
                  component="span"
                  className="error"
                />

                <div className="inputGroup">
                  <i className="ri-phone-line"></i>

                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                  />
                </div>

                <ErrorMessage
                  name="phone"
                  component="span"
                  className="error"
                />

                <div className="inputGroup">
                  <i className="ri-briefcase-line"></i>

                  <Field as="select" name="service">
                    <option value="">Select Service</option>

                    <option value="SEO Service">
                      SEO Service
                    </option>

                    <option value="Website Development">
                      Website Development
                    </option>

                    <option value="Web Application">
                      Web Application
                    </option>

                    <option value="Custom Software">
                      Custom Software
                    </option>

                    <option value="Business Management">
                      Business Management
                    </option>

                    <option value="UI/UX Design">
                      UI/UX Design
                    </option>

                    <option value="Meta Ads">
                      Meta Ads
                    </option>

                    <option value="Graphics Design Services">
                      Graphics Design Services
                    </option>
                  </Field>
                </div>

                <ErrorMessage
                  name="service"
                  component="span"
                  className="error"
                />

                <div className="inputGroup textareaGroup">
                  <i className="fa fa-dollar"></i>

                  <Field
                    type="text"
                    name="budget"
                    placeholder="What is your budget for this project?"
                  />
                </div>

                <div className="inputGroup textareaGroup">
                  <i className="ri-chat-3-line"></i>

                  <Field
                    as="textarea"
                    name="message"
                    rows="5"
                    placeholder="Describe your project requirements..."
                  />
                </div>

                <ErrorMessage
                  name="message"
                  component="span"
                  className="error"
                />

                <button type="submit" className="submitBtn">
                  Submit Request
                  <i className="ri-arrow-right-line"></i>
                </button>

              </Form>
            </Formik>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Quote;