"use client";

import { useState } from "react";
import styles from "./ResumeAudit.module.css";

export default function ResumeAudit() {
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");
    const [dragActive, setDragActive] = useState(false);

    const handleFile = (selectedFile) => {
        setError("");

        if (!selectedFile) return;

        if (selectedFile.type !== "application/pdf") {
            setError("Please upload a PDF resume.");
            return;
        }

        setFile(selectedFile);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragActive(false);

        const droppedFile = e.dataTransfer.files?.[0];

        handleFile(droppedFile);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!file) {
            setError("Please select your PDF resume first.");
            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const formData = new FormData();

            formData.append("resume", file);

            const response = await fetch(
                "/api/careers/upload",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            console.log("Resume analysis result:", data);

            if (!response.ok || !data.success) {
                throw new Error(
                    data.message || "Resume analysis failed."
                );
            }

            setResult(data);

        } catch (err) {
            console.error("Resume analysis error:", err);

            setError(
                err.message ||
                "Something went wrong while analyzing your resume."
            );

        } finally {
            setLoading(false);
        }
    };

    const resetAnalyzer = () => {
        setFile(null);
        setResult(null);
        setError("");
    };

    const scoreValue = (value) => {
        if (value === null || value === undefined) {
            return 0;
        }

        return Number(value) || 0;
    };

    const getScoreClass = (score) => {
        if (score >= 80) return styles.excellent;
        if (score >= 60) return styles.good;
        if (score >= 40) return styles.average;
        return styles.low;
    };

    return (
        <section className={styles.wrapper}>

            <div className={styles.backgroundGlow}></div>

            <div className={styles.container}>

                {/* HEADER */}

                <div className={styles.header}>

                    <div className={styles.badge}>
                        <span className={styles.badgeDot}></span>
                        AI POWERED RESUME ANALYZER
                    </div>

                    <h1>
                        Get Your Resume
                        <span> AI Audited</span>
                    </h1>

                    <p>
                        Upload your resume and let our AI analyze your
                        skills, ATS compatibility, experience, projects,
                        and career potential.
                    </p>

                </div>


                {/* UPLOAD AREA */}

                {!result && (

                    <form
                        onSubmit={handleSubmit}
                        className={styles.uploadCard}
                    >

                        <div
                            className={`${styles.dropZone} ${dragActive
                                    ? styles.dragActive
                                    : ""
                                }`}
                            onDragOver={(e) => {
                                e.preventDefault();
                                setDragActive(true);
                            }}
                            onDragLeave={() =>
                                setDragActive(false)
                            }
                            onDrop={handleDrop}
                            onClick={() =>
                                document
                                    .getElementById("resume-upload")
                                    ?.click()
                            }
                        >

                            <input
                                id="resume-upload"
                                type="file"
                                accept=".pdf,application/pdf"
                                hidden
                                onChange={(e) =>
                                    handleFile(
                                        e.target.files?.[0]
                                    )
                                }
                            />

                            <div className={styles.uploadIcon}>
                                <svg
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="1.7"
                                >
                                    <path
                                        d="M12 16V4"
                                    />
                                    <path
                                        d="M7 9l5-5 5 5"
                                    />
                                    <path
                                        d="M5 20h14"
                                    />
                                </svg>
                            </div>

                            <h3>
                                {file
                                    ? file.name
                                    : "Drop your resume here"}
                            </h3>

                            <p>
                                {file
                                    ? `${(
                                        file.size /
                                        1024 /
                                        1024
                                    ).toFixed(2)} MB`
                                    : "or click to browse your computer"}
                            </p>

                            <span className={styles.fileHint}>
                                PDF files only
                            </span>

                        </div>


                        {error && (
                            <div className={styles.error}>
                                <span>!</span>
                                {error}
                            </div>
                        )}


                        {file && !loading && (
                            <div className={styles.selectedFile}>

                                <div className={styles.fileIcon}>
                                    PDF
                                </div>

                                <div className={styles.fileInfo}>
                                    <strong>
                                        {file.name}
                                    </strong>

                                    <small>
                                        Ready for AI analysis
                                    </small>
                                </div>

                                <button
                                    type="button"
                                    className={styles.removeFile}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setFile(null);
                                    }}
                                >
                                    ×
                                </button>

                            </div>
                        )}


                        <button
                            type="submit"
                            className={styles.analyzeButton}
                            disabled={!file || loading}
                        >

                            {loading ? (

                                <>
                                    <span className={styles.spinner}></span>

                                    <span>
                                        AI is analyzing your resume...
                                    </span>
                                </>

                            ) : (

                                <>
                                    <span>
                                        Analyze My Resume
                                    </span>

                                    <span className={styles.arrow}>
                                        →
                                    </span>
                                </>

                            )}

                        </button>


                        <div className={styles.security}>
                            <span>🔒</span>
                            Your resume is processed securely.
                        </div>

                    </form>

                )}


                {/* RESULTS */}

                {result && (

                    <div className={styles.results}>

                        {/* RESULT HEADER */}

                        <div className={styles.resultHeader}>

                            <div>

                                <div className={styles.successBadge}>
                                    <span>✓</span>
                                    ANALYSIS COMPLETE
                                </div>

                                <h2>
                                    Resume Audit Results
                                </h2>

                                <p>
                                    AI-powered analysis of your
                                    professional profile.
                                </p>

                            </div>

                            <button
                                onClick={resetAnalyzer}
                                className={styles.newAnalysis}
                            >
                                Analyze Another Resume
                            </button>

                        </div>


                        {/* CANDIDATE */}

                        <div className={styles.candidateCard}>

                            <div className={styles.avatar}>
                                {result.candidate?.name
                                    ?.charAt(0)
                                    ?.toUpperCase() || "R"}
                            </div>

                            <div className={styles.candidateInfo}>

                                <h3>
                                    {result.candidate?.name ||
                                        "Candidate"}
                                </h3>

                                <p>
                                    {result.candidate?.email ||
                                        "Email not provided"}
                                </p>

                                <span>
                                    {result.candidate?.location ||
                                        "Location not provided"}
                                </span>

                            </div>

                        </div>


                        {/* SCORE OVERVIEW */}

                        <div className={styles.sectionTitle}>
                            <span>01</span>
                            Resume Score Overview
                        </div>

                        <div className={styles.scoreGrid}>

                            <ScoreCard
                                title="ATS Score"
                                value={scoreValue(
                                    result.scores?.ats_score
                                )}
                                primary
                                getScoreClass={getScoreClass}
                            />

                            <ScoreCard
                                title="Overall Score"
                                value={scoreValue(
                                    result.scores?.overall
                                )}
                                getScoreClass={getScoreClass}
                            />

                            <ScoreCard
                                title="Technical Skills"
                                value={scoreValue(
                                    result.scores?.technical_skills
                                )}
                                getScoreClass={getScoreClass}
                            />

                            <ScoreCard
                                title="Experience"
                                value={scoreValue(
                                    result.scores?.experience
                                )}
                                getScoreClass={getScoreClass}
                            />

                            <ScoreCard
                                title="Projects"
                                value={scoreValue(
                                    result.scores?.projects
                                )}
                                getScoreClass={getScoreClass}
                            />

                            <ScoreCard
                                title="Education"
                                value={scoreValue(
                                    result.scores?.education
                                )}
                                getScoreClass={getScoreClass}
                            />

                            <ScoreCard
                                title="Resume Quality"
                                value={scoreValue(
                                    result.scores?.resume_quality
                                )}
                                getScoreClass={getScoreClass}
                            />

                        </div>


                        {/* ATS ANALYSIS */}

                        {result.ats_analysis && (

                            <ResultSection
                                number="02"
                                title="ATS Analysis"
                            >

                                <div className={styles.textCard}>
                                    {typeof result.ats_analysis ===
                                        "string"
                                        ? result.ats_analysis
                                        : JSON.stringify(
                                            result.ats_analysis,
                                            null,
                                            2
                                        )}
                                </div>

                            </ResultSection>

                        )}


                        {/* RECOMMENDED ROLES */}

                        {Array.isArray(
                            result.recommended_roles
                        ) &&
                            result.recommended_roles.length > 0 && (

                                <ResultSection
                                    number="03"
                                    title="Recommended Career Roles"
                                >

                                    <div className={styles.rolesGrid}>

                                        {result.recommended_roles.map(
                                            (role, index) => (

                                                <div
                                                    className={styles.roleCard}
                                                    key={index}
                                                >

                                                    <div>
                                                        <span>
                                                            {String(
                                                                index + 1
                                                            ).padStart(
                                                                2,
                                                                "0"
                                                            )}
                                                        </span>
                                                    </div>

                                                    <strong>
                                                        {role}
                                                    </strong>

                                                    <span className={styles.roleArrow}>
                                                        →
                                                    </span>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </ResultSection>

                            )}


                        {/* SKILLS */}

                        {result.skills && (

                            <ResultSection
                                number="04"
                                title="Skills Analysis"
                            >

                                <DynamicContent
                                    data={result.skills}
                                />

                            </ResultSection>

                        )}


                        {/* EXPERIENCE */}

                        {result.experience && (

                            <ResultSection
                                number="05"
                                title="Experience Analysis"
                            >

                                <DynamicContent
                                    data={result.experience}
                                />

                            </ResultSection>

                        )}


                        {/* PROJECTS */}

                        {result.projects && (

                            <ResultSection
                                number="06"
                                title="Projects Analysis"
                            >

                                <DynamicContent
                                    data={result.projects}
                                />

                            </ResultSection>

                        )}


                        {/* EDUCATION */}

                        {result.education && (

                            <ResultSection
                                number="07"
                                title="Education"
                            >

                                <DynamicContent
                                    data={result.education}
                                />

                            </ResultSection>

                        )}


                        {/* CERTIFICATIONS */}

                        {result.certifications && (

                            <ResultSection
                                number="08"
                                title="Certifications"
                            >

                                <DynamicContent
                                    data={result.certifications}
                                />

                            </ResultSection>

                        )}


                        {/* STRENGTHS / WEAKNESSES */}

                        <div className={styles.twoColumns}>

                            {result.strengths && (

                                <div className={styles.insightCard}>

                                    <div className={styles.insightHeader}>
                                        <span>✓</span>
                                        <h3>Strengths</h3>
                                    </div>

                                    <DynamicList
                                        data={result.strengths}
                                    />

                                </div>

                            )}


                            {result.weaknesses && (

                                <div className={styles.insightCard}>

                                    <div className={styles.insightHeader}>
                                        <span>!</span>
                                        <h3>Areas to Improve</h3>
                                    </div>

                                    <DynamicList
                                        data={result.weaknesses}
                                    />

                                </div>

                            )}

                        </div>


                        {/* INTERVIEW */}

                        {result.interview_recommendation && (

                            <ResultSection
                                number="09"
                                title="Interview Recommendation"
                            >

                                <div className={styles.interviewCard}>

                                    <div className={styles.interviewIcon}>
                                        ✦
                                    </div>

                                    <div>
                                        <p>
                                            {
                                                result.interview_recommendation
                                            }
                                        </p>
                                    </div>

                                </div>

                            </ResultSection>

                        )}


                        {/* INTERVIEW QUESTIONS */}

                        {Array.isArray(
                            result.interview_questions
                        ) &&
                            result.interview_questions.length > 0 && (

                                <ResultSection
                                    number="10"
                                    title="Suggested Interview Questions"
                                >

                                    <div className={styles.questions}>

                                        {result.interview_questions.map(
                                            (question, index) => (

                                                <div
                                                    className={
                                                        styles.question
                                                    }
                                                    key={index}
                                                >

                                                    <span>
                                                        Q{index + 1}
                                                    </span>

                                                    <p>
                                                        {typeof question ===
                                                            "string"
                                                            ? question
                                                            : JSON.stringify(
                                                                question
                                                            )}
                                                    </p>

                                                </div>

                                            )
                                        )}

                                    </div>

                                </ResultSection>

                            )}


                        {/* FINAL ASSESSMENT */}

                        {result.final_assessment && (

                            <div className={styles.finalAssessment}>

                                <div className={styles.finalGlow}></div>

                                <span className={styles.finalLabel}>
                                    FINAL AI ASSESSMENT
                                </span>

                                <h2>
                                    Your Resume Has Been Audited
                                </h2>

                                <p>
                                    {typeof result.final_assessment ===
                                        "string"
                                        ? result.final_assessment
                                        : JSON.stringify(
                                            result.final_assessment,
                                            null,
                                            2
                                        )}
                                </p>

                            </div>

                        )}


                        {/* PDF */}

                        {result.pdf_url && (

                            <div className={styles.pdfCard}>

                                <div className={styles.pdfIcon}>
                                    PDF
                                </div>

                                <div className={styles.pdfInfo}>

                                    <h3>
                                        Full Resume Audit Report
                                    </h3>

                                    <p>
                                        Download your complete
                                        AI-generated PDF report.
                                    </p>

                                </div>

                                <a
                                    href={result.pdf_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.downloadButton}
                                >
                                    Download PDF
                                    <span>↓</span>
                                </a>

                            </div>

                        )}

                    </div>

                )}

            </div>

        </section>
    );
}


/* SCORE CARD */

function ScoreCard({
    title,
    value,
    primary,
    getScoreClass,
}) {
    return (

        <div
            className={`${styles.scoreCard} ${primary ? styles.primaryScore : ""
                }`}
        >

            <div className={styles.scoreTop}>

                <span>
                    {title}
                </span>

                {primary && (
                    <small>PRIMARY</small>
                )}

            </div>

            <div className={styles.scoreNumber}>

                <strong>
                    {value}
                </strong>

                <span>
                    /100
                </span>

            </div>

            <div className={styles.progressTrack}>

                <div
                    className={`${styles.progressBar} ${getScoreClass(value)
                        }`}
                    style={{
                        width: `${Math.min(
                            value,
                            100
                        )}%`,
                    }}
                />

            </div>

        </div>

    );
}


/* RESULT SECTION */

function ResultSection({
    number,
    title,
    children,
}) {
    return (

        <section className={styles.resultSection}>

            <div className={styles.sectionTitle}>
                <span>{number}</span>
                {title}
            </div>

            {children}

        </section>

    );
}


/* DYNAMIC CONTENT */

function DynamicContent({ data }) {

    if (Array.isArray(data)) {

        return (

            <div className={styles.dynamicGrid}>

                {data.map((item, index) => (

                    <div
                        className={styles.dynamicItem}
                        key={index}
                    >

                        {typeof item === "string"
                            ? item
                            : JSON.stringify(
                                item,
                                null,
                                2
                            )}

                    </div>

                ))}

            </div>

        );

    }

    if (typeof data === "object") {

        return (

            <div className={styles.objectGrid}>

                {Object.entries(data).map(
                    ([key, value]) => (

                        <div
                            className={styles.objectItem}
                            key={key}
                        >

                            <span>
                                {key
                                    .replaceAll("_", " ")
                                    .replace(
                                        /\b\w/g,
                                        (char) =>
                                            char.toUpperCase()
                                    )}
                            </span>

                            <strong>

                                {typeof value ===
                                    "object"
                                    ? JSON.stringify(
                                        value,
                                        null,
                                        2
                                    )
                                    : String(value)}

                            </strong>

                        </div>

                    )
                )}

            </div>

        );

    }

    return (
        <div className={styles.textCard}>
            {String(data)}
        </div>
    );
}


/* DYNAMIC LIST */

function DynamicList({ data }) {

    let items = [];

    if (Array.isArray(data)) {
        items = data;
    } else if (typeof data === "string") {
        items = [data];
    } else if (typeof data === "object" && data !== null) {
        items = Object.entries(data).map(
            ([key, value]) =>
                `${key}: ${typeof value === "object"
                    ? JSON.stringify(value)
                    : value
                }`
        );
    }

    return (

        <ul className={styles.insightList}>

            {items.map((item, index) => (

                <li key={index}>
                    <span>→</span>
                    <div>
                        {typeof item === "string"
                            ? item
                            : JSON.stringify(item)}
                    </div>
                </li>

            ))}

        </ul>

    );
}