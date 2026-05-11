"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import emailjs from '@emailjs/browser';
import Loading from './Loading';

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [isPackageSelect, setIsPackageSelect] = useState(false)
  const formRef = useRef(null)
  const [loading, setLoading] = useState(false)

  const pricingPlans = [
    {
      title: "Starter",
      price: "$299",
      desc: "Best for small businesses",
      features: [
        "1-3 Page Website",
        "Basic SEO Setup",
        "Responsive Design",
        "Email Integration"
      ],
      packageName: "Starter Package",
      popular: false
    },

    {
      title: "Professional",
      price: "$799",
      desc: "Perfect for growing brands",
      features: [
        "5-10 Page Website",
        "Advanced SEO",
        "Speed Optimization",
        "Meta Ads Setup",
        "Analytics Integration"
      ],
      packageName: "Professional Package",
      popular: true
    },

    {
      title: "Enterprise",
      price: "$1499+",
      desc: "For large scale businesses",
      features: [
        "Custom Web App",
        "Full SEO Strategy",
        "Meta + Google Ads",
        "Business Automation",
        "Priority Support"
      ],
      packageName: "Enterprise Package",
      popular: false
    },

    {
      title: "SEO Growth",
      price: "$399/mo",
      desc: "Improve rankings & organic traffic",
      features: [
        "Keyword Research",
        "On-Page SEO",
        "Technical SEO",
        "Google Search Console",
        "Monthly SEO Reports"
      ],
      packageName: "SEO Growth Package",
      popular: false
    },

    {
      title: "Meta Ads Pro",
      price: "$499/mo",
      desc: "High converting Facebook & Instagram ads",
      features: [
        "Meta Ads Campaign Setup",
        "Audience Targeting",
        "Creative Ad Design",
        "Retargeting Ads",
        "Performance Optimization"
      ],
      packageName: "Meta Ads Package",
      popular: false
    },

    {
      title: "Google Ads Expert",
      price: "$599/mo",
      desc: "Generate leads through Google Ads",
      features: [
        "Google Search Ads",
        "Conversion Tracking",
        "Keyword Optimization",
        "Competitor Analysis",
        "ROI Focused Campaigns"
      ],
      packageName: "Google Ads Package",
      popular: false
    },

    {
      title: "Business Management",
      price: "$899/mo",
      desc: "Complete digital business management",
      features: [
        "Client Management",
        "Social Media Handling",
        "Lead Generation",
        "Business Automation",
        "Monthly Strategy Meetings"
      ],
      packageName: "Business Management Package",
      popular: false
    },

    {
      title: "Social Media Growth",
      price: "$349/mo",
      desc: "Grow your brand on social platforms",
      features: [
        "Content Creation",
        "Instagram & Facebook Management",
        "Post Scheduling",
        "Engagement Strategy",
        "Monthly Insights"
      ],
      packageName: "Social Media Package",
      popular: false
    },

    {
      title: "E-Commerce Boost",
      price: "$999",
      desc: "Powerful online store solutions",
      features: [
        "Custom Online Store",
        "Payment Gateway Integration",
        "Product Management",
        "SEO Optimized Store",
        "Marketing Integration"
      ],
      packageName: "E-Commerce Package",
      popular: false
    }
  ];
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  }
  useEffect(() => {
    const items = localStorage.getItem("package-details")
    if (items) {
      const parsedItems = JSON.parse(items)
      setSelectedPackage(parsedItems)
    }
  }, [])
  const initialValues = {
    name: "",
    email: "",
    package: selectedPackage?.packageName || ""
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Enter your name"),
    email: Yup.string().email("Invalid email").required("Enter your email"),
  })

  const onSubmit = async (values, { resetForm }) => {
    try {
      setLoading(true)

      await emailjs.sendForm(
        'service_x7b7qei',
        'template_0ds7q6l',
        formRef.current,
        '5NYUNk6egOmHicaIZ'
      )
      alert(`Request Submitted Successfully`)
      setIsPackageSelect(false)
    } catch (error) {
      console.error("Email sending error:", error)
      alert(
        error?.text ||
        error?.message ||
        JSON.stringify(error)
      )
    }
    finally {
      setLoading(false)
    }
    resetForm()
    setSelectedPackage(null)
    localStorage.removeItem("package-details")
  }

  const handleSelect = (plan) => {
    setSelectedPackage(plan)
    localStorage.setItem("package-details", JSON.stringify(plan))
    setIsPackageSelect(true)
  }

  return (
    <>
      {loading && <Loading />}
      {isPackageSelect && <section className='get-started-form'>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form ref={formRef}>
            <div className="inputs-div">

              <div className="input">
                <Field type="text" name="name" className="input-field-pkg" placeholder=" " />
                <label className='label'>Your Name</label>
                <ErrorMessage name='name' component="div" className='error' />
              </div>

              <div className="input">
                <Field type="email" name="email" className="input-field-pkg" placeholder="" />
                <label className='label'>Your Email</label>
                <ErrorMessage name='email' component="div" className='error' />
              </div>

              <div className="input">
                <Field type="text" name="package" className="input-field-pkg" placeholder=" " readOnly />
                <label className='label'>Selected Package</label>
              </div>

            </div>
            <div className="buttonsDiv">
              <button type='submit' className="btn1">Submit</button>
              <button type='reset' className="btn2" onClick={() => setIsPackageSelect(false)}>Cancel</button>
            </div>
          </Form>
        </Formik>
      </section>}

      <section className="pricing">

        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeUp}
          viewport={{ once: true }}
          className="pricing-header"
        >
          <h2>Our Pricing Plans</h2>
          <p>Flexible pricing tailored for startups, businesses, and enterprises.</p>
        </motion.div>

        <div className="pricing-cards">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`card ${plan.popular ? "popular" : ""} ${selectedPackage?.title === plan.title ? "active" : ""
                }`}
            >
              {plan.popular && <span className="badge">Most Popular</span>}

              <h3>{plan.title}</h3>
              <h2>{plan.price}</h2>
              <p>{plan.desc}</p>

              <ul>
                {plan.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <button onClick={() => handleSelect(plan)}>
                {plan.title === "Enterprise" ? "Contact Us" : "Get Started"}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="services-table">
          <h3>Additional Services</h3>
          <div className="table">
            <div><span>Website Development</span><span>$300 - $1500</span></div>
            <div><span>SEO Services</span><span>$200/month</span></div>
            <div><span>Meta Ads Management</span><span>$150/month</span></div>
            <div><span>Business Development</span><span>$300/month</span></div>
            <div><span>UI/UX Design</span><span>$200 - $800</span></div>
            <div><span>Custom Software</span><span>$1000+</span></div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Pricing