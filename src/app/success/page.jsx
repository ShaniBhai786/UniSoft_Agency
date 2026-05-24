"use client"

import { motion } from "framer-motion"
import "./success.css"

export default function SuccessPage() {
    return (
        <div className="container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="card"
            >
                <div className="icon">✓</div>

                <h1>Payment Successful</h1>

                <p>
                    Thank you for your purchase. Your order has been confirmed and is now being processed.
                </p>

                <a href="/" className="btn">
                    Back to Home
                </a>
            </motion.div>
        </div>
    )
}