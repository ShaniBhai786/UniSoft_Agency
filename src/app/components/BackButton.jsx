"use client";

import { useEffect } from "react";

export default function BackButton() {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
      <i className="ri-arrow-left-line back-icon" onClick={() => window.history.back()}></i>
  );
}