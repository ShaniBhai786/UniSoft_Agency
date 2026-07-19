"use client"
import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { motion } from "framer-motion"
import Loading from '../components/Loading'
import SeoSchema from '../components/SeoSchema'
import { contactSchema } from '../lib/schema'
import "../styles.css"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}
const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  service: Yup.string().required('Please select a service'),
  message: Yup.string().required('Message is required'),
})

const infoCards = [
  { icon: "ri-mail-send-line", label: "Email Us", value: "unisoftpvt@gmail.com", href: "mailto:unisoftpvt@gmail.com", color: "#38bdf8" },
  { icon: "ri-phone-line", label: "Call Us", value: "+92 (314) 8588707", href: "tel:+923148588707", color: "#22c55e" },
  { icon: "ri-map-pin-line", label: "Location", value: "Wyoming, USA —Worldwide", href: "#", color: "#a855f7" },
  { icon: "ri-time-line", label: "Working Hours", value: "Mon–Sat, 9am–8pm", href: "#", color: "#f59e0b" },
]

function Contact() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => { window.scroll(0, 0) }, [])

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true)
      const formData = new URLSearchParams()
      Object.entries(values).forEach(([k, v]) => formData.append(k, v))
      await fetch("https://script.google.com/macros/s/AKfycbxTasldK8MCpBvdieFrv9Sj7Hbz6Q18xen5krfSvkNd3eNC385UteHQKLOTr-KVXVroaQ/exec", {
        method: "POST", body: formData,
      })
      resetForm()
      setSubmitted(true)
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      alert("Failed to send. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <SeoSchema schema={contactSchema} />
      {loading && <Loading />}

      <div className="ctPage">
        {/* BG */}
        <div className="ctBg1" />
        <div className="ctBg2" />
        <div className="ctGrid" />

        <div className="ctInner">

          {/* HEADER */}
          <motion.div
            className="ctHeader"
            initial="hidden" whileInView="show" viewport={{ once: true }}
            variants={stagger}
          >
            <motion.span variants={fadeUp} className="ctEyebrow">
              <i className="ri-chat-3-line"></i> Get In Touch
            </motion.span>
            <motion.h1 variants={fadeUp} className="ctTitle">
              Let&apos;s Build Something <span className="ctGrad">Amazing Together</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="ctSubtitle">
              Have a project in mind? We&apos;d love to hear about it. Send us a message and we&apos;ll get back to you within 24 hours.
            </motion.p>
          </motion.div>

          {/* INFO CARDS */}
          <motion.div
            className="ctInfoGrid"
            variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
          >
            {infoCards.map((c) => (
              <motion.a key={c.label} href={c.href} variants={fadeUp} className="ctInfoCard">
                <div className="ctInfoIcon" style={{ background: `${c.color}15`, border: `1px solid ${c.color}30` }}>
                  <i className={c.icon} style={{ color: c.color, fontSize: 22 }}></i>
                </div>
                <div>
                  <span className="ctInfoLabel">{c.label}</span>
                  <p className="ctInfoVal">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* MAIN GRID: FORM + SIDE */}
          <div className="ctMainGrid">

            {/* FORM */}
            <motion.div
              className="ctFormCard"
              initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
            >
              <div className="ctFormHeader">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we&apos;ll respond promptly.</p>
              </div>

              <Formik
                initialValues={{ name: '', email: '', service: '', message: '' }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
              >
                {({ isSubmitting }) => (
                  <Form className="ctForm">
                    <div className="ctFormRow">
                      <div className="ctField">
                        <label>Full Name</label>
                        <div className="ctInputWrap">
                          <i className="ri-user-line"></i>
                          <Field name="name" placeholder="Your full name" className="ctInput" />
                        </div>
                        <ErrorMessage name="name" component="div" className="ctError" />
                      </div>
                      <div className="ctField">
                        <label>Email Address</label>
                        <div className="ctInputWrap">
                          <i className="ri-mail-line"></i>
                          <Field name="email" type="email" placeholder="your@email.com" className="ctInput" />
                        </div>
                        <ErrorMessage name="email" component="div" className="ctError" />
                      </div>
                    </div>

                    <div className="ctField">
                      <label>Service Needed</label>
                      <div className="ctInputWrap">
                        <i className="ri-settings-3-line"></i>
                        <Field as="select" name="service" className="ctInput ctSelect">
                          <option value="">Select a service...</option>
                          <option value="Web Development">Web Development</option>
                          <option value="Software Development">Software Development</option>
                          <option value="Mobile App">Mobile App Development</option>
                          <option value="AI Automation">AI Automation</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                          <option value="UI/UX Design">UI/UX Design</option>
                          <option value="Other">Other</option>
                        </Field>
                      </div>
                      <ErrorMessage name="service" component="div" className="ctError" />
                    </div>

                    <div className="ctField">
                      <label>Your Message</label>
                      <div className="ctInputWrap ctTextareaWrap">
                        <i className="ri-message-3-line"></i>
                        <Field as="textarea" name="message" placeholder="Tell us about your project..." className="ctInput ctTextarea" rows={5} />
                      </div>
                      <ErrorMessage name="message" component="div" className="ctError" />
                    </div>

                    <button type="submit" className="ctSubmitBtn" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <><i className="ri-loader-4-line ctSpin"></i> Sending...</>
                      ) : (
                        <><i className="ri-send-plane-line"></i> Send Message</>
                      )}
                    </button>

                    {submitted && (
                      <div className="ctSuccess">
                        <i className="ri-checkbox-circle-line"></i> Message sent! We&apos;ll get back to you soon.
                      </div>
                    )}
                  </Form>
                )}
              </Formik>
            </motion.div>

            {/* SIDE PANEL */}
            <motion.div
              className="ctSide"
              initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}
            >
              {/* Why Choose Us */}
              <div className="ctSideCard">
                <h3><i className="ri-shield-check-line" style={{ color: "#38bdf8" }}></i> Why Choose UniSoft?</h3>
                <ul className="ctWhyList">
                  {[
                    { icon: "ri-rocket-line", text: "Fast delivery, no delays" },
                    { icon: "ri-code-s-slash-line", text: "Clean, scalable code" },
                    { icon: "ri-customer-service-2-line", text: "24/7 dedicated support" },
                    { icon: "ri-bar-chart-line", text: "Results-driven approach" },
                    { icon: "ri-trophy-line", text: "100+ successful projects" },
                    { icon: "ri-lock-line", text: "NDA & confidentiality" },
                  ].map((w) => (
                    <li key={w.text}>
                      <i className={w.icon} style={{ color: "#38bdf8" }}></i>
                      <span>{w.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials */}
              <div className="ctSideCard">
                <h3><i className="ri-share-line" style={{ color: "#a855f7" }}></i> Follow Us</h3>
                <div className="ctSocials">
                  {[
                    { icon: "ri-linkedin-fill", label: "LinkedIn", color: "#0077b5", href: "#" },
                    { icon: "ri-facebook-fill", label: "Facebook", color: "#1877f2", href: "https://www.facebook.com/profile.php?id=61568003026936" },
                    { icon: "ri-instagram-line", label: "Instagram", color: "#e1306c", href: "https://www.instagram.com/unisoftpvt" },
                    { icon: "ri-github-fill", label: "GitHub", color: "#fff", href: "https://github.com/unisoftpvt" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} className="ctSocialBtn" style={{ borderColor: `${s.color}40` }}>
                      <i className={s.icon} style={{ color: s.color }}></i>
                      <span>{s.label}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Response time badge */}
              <div className="ctResponseBadge">
                <i className="ri-time-line" style={{ color: "#22c55e", fontSize: 20 }}></i>
                <div>
                  <strong>Average Response Time</strong>
                  <span>Under 2 hours during business hours</span>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
