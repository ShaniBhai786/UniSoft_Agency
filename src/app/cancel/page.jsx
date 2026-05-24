"use client"

import { motion } from "framer-motion"
import "../cancel.css"

export default function CancelPage() {
    return (
        <div className="container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="card"
            >
                <div className="icon">✕</div>

                <h1>Payment Cancelled</h1>

                <p>
                    Your transaction was not completed. You can try again whenever you're ready.
                </p>

                <div className="actions">
                    <a href="/pricing" className="btn primary">
                        Try Again
                    </a>
                    <a href="/" className="btn secondary">
                        Back to Home
                    </a>
                </div>
            </motion.div>
        </div>
    )
}