import React from "react";
import "../styles.css";

export const metadata = {
    title: "Privacy Policy | UniSoft",
    description: "Privacy Policy for UniSoft",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="policy-page">
            {/* HEADER */}
            <section className="policy-hero">
                <div className="policy-hero-content">
                    <h1>Privacy Policy</h1>
                    <p>
                        Your privacy matters. This page explains how UniSoft collects,
                        uses, and protects your information.
                    </p>
                    <span>Last updated: June 19, 2026</span>
                </div>
            </section>

            {/* BODY */}
            <section className="policy-content">
            <div className="teamGradient" />
            <div className="teamGrid" />

                <div className="policy-card">
                    <h2>Overview</h2>
                    <p>
                        UniSoft ("we", "our") is committed to protecting your personal data
                        and ensuring transparency in how we handle information.
                    </p>
                </div>

                <div className="policy-card">
                    <h2>Information We Collect</h2>
                    <ul>
                        <li>Personal details (name, email, phone number)</li>
                        <li>Messages submitted via forms or WhatsApp</li>
                        <li>Device and usage data</li>
                        <li>Analytics and performance data</li>
                    </ul>
                </div>

                <div className="policy-card">
                    <h2>How We Use Information</h2>
                    <ul>
                        <li>Provide and improve services</li>
                        <li>Customer support and communication</li>
                        <li>Security and fraud prevention</li>
                        <li>Legal compliance</li>
                    </ul>
                </div>

                <div className="policy-card">
                    <h2>Third-Party Services</h2>
                    <p>
                        We may use services like Meta (WhatsApp), Google Analytics, and
                        hosting providers. These services may process data under their own policies.
                    </p>
                </div>

                <div className="policy-card">
                    <h2>Data Protection</h2>
                    <p>
                        We use secure systems and best practices to protect your personal
                        data from unauthorized access or misuse.
                    </p>
                </div>

                <div className="policy-card">
                    <h2>Your Rights</h2>
                    <p>
                        You can request access, correction, or deletion of your data by contacting us.
                    </p>
                </div>

                <div className="policy-card contact">
                    <h2>Contact Us</h2>
                    <div className="contact-info">
                        <p><strong>Company:</strong> UniSoft</p>
                        <p><strong>Website:</strong> www.unisoft.com.pk</p>
                        <p><strong>Email:</strong> support@unisoft.com.pk</p>
                    </div>
                </div>

            </section>
        </main>
    );
}