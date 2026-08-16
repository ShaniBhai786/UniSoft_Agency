import React from 'react'

const page = () => {
  return (
      <section className="teamsSection">
      <div className="resume-audit">
              <div className="header">
                  <h1>Resume Audit</h1>
                  <p>Get your resume audited by our AI-powered tool!</p>
              </div>
              <div className="resumeDiv">
                    <p>Upload your resume in PDF format and let our AI analyze it for you. You'll receive a detailed report highlighting areas of improvement, strengths, and suggestions to enhance your resume.</p>

                    <form action="/api/careers/upload" method="post" encType="multipart/form-data">
                      <input type="file" name="resume" accept=".pdf" required />
                        <button type="submit">Upload Resume</button>
                    </form>
              </div>
      </div>
    </section>
  )
}

export default page
