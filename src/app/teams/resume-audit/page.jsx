"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./ResumeAudit.module.css";

const API_ENDPOINT = "/api/careers/upload";

/* =========================================================
   HELPERS
========================================================= */

function formatLabel(value) {
    if (!value) return "";

    return String(value)
        .replace(/_/g, " ")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
}

function safeArray(value) {
    if (Array.isArray(value)) {
        return value;
    }

    if (value === null || value === undefined) {
        return [];
    }

    return [value];
}

function getInitial(name) {
    if (!name) return "R";

    return String(name)
        .trim()
        .charAt(0)
        .toUpperCase();
}

function getScore(value) {
    const number = Number(value);

    if (Number.isNaN(number)) {
        return 0;
    }

    return Math.max(0, Math.min(100, number));
}

function isPrimitive(value) {
    return (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean"
    );
}

function cleanText(value) {
    if (value === null || value === undefined) {
        return "";
    }

    return String(value);
}

/* =========================================================
   SCORE RING
========================================================= */

function ScoreRing({
    score = 0,
    label,
    description,
    primary = false,
}) {
    const safeScore = getScore(score);

    return (
        <div
            className={`${styles.scoreCard} ${primary ? styles.primaryScore : ""
                }`}
        >
            <div className={styles.scoreCardTop}>
                <span className={styles.scoreLabel}>
                    {label}
                </span>

                {primary && (
                    <span className={styles.primaryBadge}>
                        PRIMARY
                    </span>
                )}
            </div>

            <div className={styles.scoreMain}>
                <div
                    className={styles.scoreRing}
                    style={{
                        "--score": `${safeScore * 3.6}deg`,
                    }}
                >
                    <div className={styles.scoreRingInner}>
                        <strong>{safeScore}</strong>
                        <span>/100</span>
                    </div>
                </div>

                <div className={styles.scoreInfo}>
                    <div className={styles.scoreBar}>
                        <div
                            className={styles.scoreBarFill}
                            style={{
                                width: `${safeScore}%`,
                            }}
                        />
                    </div>

                    {description && (
                        <p>{description}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
    number,
    title,
    description,
}) {
    return (
        <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>
                {number}
            </span>

            <div>
                <h2>{title}</h2>

                {description && (
                    <p>{description}</p>
                )}
            </div>
        </div>
    );
}

/* =========================================================
   SIMPLE TAG LIST
========================================================= */

function TagList({
    items,
    emptyText = "No information available.",
}) {
    const values = safeArray(items)
        .flatMap((item) => {
            if (isPrimitive(item)) {
                return [item];
            }

            return [];
        })
        .filter(Boolean);

    if (!values.length) {
        return (
            <p className={styles.emptyText}>
                {emptyText}
            </p>
        );
    }

    return (
        <div className={styles.tagList}>
            {values.map((item, index) => (
                <span
                    className={styles.tag}
                    key={`${item}-${index}`}
                >
                    {cleanText(item)}
                </span>
            ))}
        </div>
    );
}

/* =========================================================
   GENERIC VALUE RENDERER
========================================================= */

function ValueRenderer({
    value,
    fieldName = "",
}) {
    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {
        return null;
    }

    if (isPrimitive(value)) {
        return (
            <p className={styles.valueText}>
                {cleanText(value)}
            </p>
        );
    }

    if (Array.isArray(value)) {
        return (
            <div className={styles.nestedList}>
                {value.map((item, index) => (
                    <div
                        key={index}
                        className={styles.nestedItem}
                    >
                        {isPrimitive(item) ? (
                            <span>{cleanText(item)}</span>
                        ) : (
                            <ValueRenderer
                                value={item}
                                fieldName={fieldName}
                            />
                        )}
                    </div>
                ))}
            </div>
        );
    }

    if (typeof value === "object") {
        return (
            <div className={styles.objectFields}>
                {Object.entries(value).map(
                    ([key, val]) => {
                        if (
                            val === null ||
                            val === undefined ||
                            val === ""
                        ) {
                            return null;
                        }

                        return (
                            <div
                                className={styles.objectField}
                                key={key}
                            >
                                <span>
                                    {formatLabel(key)}
                                </span>

                                <ValueRenderer
                                    value={val}
                                    fieldName={key}
                                />
                            </div>
                        );
                    }
                )}
            </div>
        );
    }

    return null;
}

/* =========================================================
   GENERIC OBJECT CARD
========================================================= */

function ObjectCard({
    item,
    index,
}) {
    if (!item || typeof item !== "object") {
        return null;
    }

    const entries = Object.entries(item).filter(
        ([, value]) =>
            value !== null &&
            value !== undefined &&
            value !== ""
    );

    return (
        <article
            className={styles.objectCard}
            style={{
                animationDelay: `${index * 80}ms`,
            }}
        >
            <div className={styles.objectCardAccent} />

            <div className={styles.objectCardBody}>
                {entries.map(([key, value]) => {
                    if (
                        key.toLowerCase() === "id"
                    ) {
                        return null;
                    }

                    return (
                        <div
                            className={styles.detailBlock}
                            key={key}
                        >
                            <span className={styles.detailLabel}>
                                {formatLabel(key)}
                            </span>

                            {isPrimitive(value) ? (
                                <p className={styles.detailValue}>
                                    {cleanText(value)}
                                </p>
                            ) : Array.isArray(value) ? (
                                <div
                                    className={
                                        styles.inlineTags
                                    }
                                >
                                    {value.map(
                                        (
                                            element,
                                            elementIndex
                                        ) =>
                                            isPrimitive(
                                                element
                                            ) ? (
                                                <span
                                                    className={
                                                        styles.smallTag
                                                    }
                                                    key={
                                                        elementIndex
                                                    }
                                                >
                                                    {cleanText(
                                                        element
                                                    )}
                                                </span>
                                            ) : (
                                                <ValueRenderer
                                                    key={
                                                        elementIndex
                                                    }
                                                    value={
                                                        element
                                                    }
                                                />
                                            )
                                    )}
                                </div>
                            ) : (
                                <ValueRenderer
                                    value={value}
                                    fieldName={key}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </article>
    );
}

/* =========================================================
   OBJECT COLLECTION
========================================================= */

function ObjectCollection({
    data,
    emptyText,
}) {
    const items = safeArray(data);

    if (!items.length) {
        return (
            <p className={styles.emptyText}>
                {emptyText}
            </p>
        );
    }

    return (
        <div className={styles.objectGrid}>
            {items.map((item, index) => {
                if (isPrimitive(item)) {
                    return (
                        <div
                            className={styles.simpleCard}
                            key={index}
                        >
                            {cleanText(item)}
                        </div>
                    );
                }

                return (
                    <ObjectCard
                        item={item}
                        index={index}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

/* =========================================================
   ATS ANALYSIS
========================================================= */

function ATSAnalysis({
    data,
}) {
    if (!data) return null;

    const keywords = Array.isArray(
        data.keywords
    )
        ? data.keywords
        : [];

        let checkPayement = confirm("Do you want to proceed with the payment?")
        if (!checkPayement) {
            return <h1>Please Pay to View ATS Analysis</h1>;
        }
    return (
        <section className={styles.auditSection}>
            <SectionHeader
                number="02"
                title="ATS Analysis"
                description="How effectively your resume is optimized for Applicant Tracking Systems."
            />

            <div className={styles.atsCard}>
                {data.summary && (
                    <div className={styles.atsSummary}>
                        <div className={styles.atsIcon}>
                            ✓
                        </div>

                        <div>
                            <h3>
                                ATS Summary
                            </h3>

                            <p>
                                {data.summary}
                            </p>
                        </div>
                    </div>
                )}

                {keywords.length > 0 && (
                    <div
                        className={
                            styles.keywordSection
                        }
                    >
                        <div
                            className={
                                styles.blockHeader
                            }
                        >
                            <h3>
                                Detected Keywords
                            </h3>

                            <span
                                className={
                                    styles.countBadge
                                }
                            >
                                {keywords.length}
                            </span>
                        </div>

                        <TagList
                            items={keywords}
                        />
                    </div>
                )}

                {Object.entries(data).some(
                    ([key]) =>
                        key !== "summary" &&
                        key !== "keywords"
                ) && (
                        <div
                            className={
                                styles.additionalATS
                            }
                        >
                            {Object.entries(data)
                                .filter(
                                    ([key]) =>
                                        key !==
                                        "summary" &&
                                        key !==
                                        "keywords"
                                )
                                .map(
                                    ([key, value]) => (
                                        <div
                                            className={
                                                styles.atsDetail
                                            }
                                            key={key}
                                        >
                                            <span >
                                                {formatLabel(
                                                    key
                                                )}
                                            </span>

                                            <ValueRenderer
                                                value={
                                                    value
                                                }
                                            />
                                        </div>
                                    )
                                )}
                        </div>
                    )}
            </div>
        </section>
    );
}

/* =========================================================
   STRENGTHS
========================================================= */

function Strengths({
    items,
}) {
    const values = safeArray(items).filter(
        (item) => isPrimitive(item)
    );

    if (!values.length) return null;

    return (
        <section className={styles.auditSection}>
            <SectionHeader
                number="08"
                title="Key Strengths"
                description="The strongest aspects identified in your resume."
            />

            <div className={styles.strengthGrid}>
                {values.map((item, index) => (
                    <div
                        className={
                            styles.strengthCard
                        }
                        key={index}
                    >
                        <span
                            className={
                                styles.strengthNumber
                            }
                        >
                            {String(index + 1).padStart(
                                2,
                                "0"
                            )}
                        </span>

                        <div>
                            <div
                                className={
                                    styles.checkIcon
                                }
                            >
                                ✓
                            </div>

                            <p>
                                {cleanText(item)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* =========================================================
   WEAKNESSES
========================================================= */

function Weaknesses({
    items,
}) {
    const values = safeArray(items).filter(
        (item) => isPrimitive(item)
    );

    if (!values.length) return null;

    return (
        <section className={styles.auditSection}>
            <SectionHeader
                number="09"
                title="Areas to Improve"
                description="Potential weaknesses and opportunities for improvement."
            />

            <div className={styles.weaknessGrid}>
                {values.map((item, index) => (
                    <div
                        className={
                            styles.weaknessCard
                        }
                        key={index}
                    >
                        <div
                            className={
                                styles.warningIcon
                            }
                        >
                            !
                        </div>

                        <div>
                            <span>
                                Improvement Area{" "}
                                {index + 1}
                            </span>

                            <p>
                                {cleanText(item)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* =========================================================
   INTERVIEW QUESTIONS
========================================================= */

function InterviewQuestions({
    questions,
}) {
    const values = safeArray(questions);

    if (!values.length) return null;

    return (
        <section className={styles.auditSection}>
            <SectionHeader
                number="11"
                title="Interview Questions"
                description="Questions you should prepare for based on your resume."
            />

            <div className={styles.questionsList}>
                {values.map((question, index) => (
                    <div
                        className={
                            styles.questionCard
                        }
                        key={index}
                    >
                        <span
                            className={
                                styles.questionNumber
                            }
                        >
                            {String(
                                index + 1
                            ).padStart(2, "0")}
                        </span>

                        <div>
                            {isPrimitive(
                                question
                            ) ? (
                                <p>
                                    {cleanText(
                                        question
                                    )}
                                </p>
                            ) : (
                                <ValueRenderer
                                    value={
                                        question
                                    }
                                />
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function ResumeAudit() {
    const [file, setFile] =
        useState(null);

    const [loading, setLoading] =
        useState(false);

    const [result, setResult] =
        useState(null);

    const [error, setError] =
        useState("");

    const [dragging, setDragging] =
        useState(false);

    /* -----------------------------------------------------
       SCORE VALUES
    ----------------------------------------------------- */

    const scores = useMemo(() => {
        return result?.scores || {};
    }, [result]);

    /* -----------------------------------------------------
       HANDLE FILE
    ----------------------------------------------------- */

    const handleFile = (selectedFile) => {
        setError("");

        if (!selectedFile) {
            return;
        }

        if (
            selectedFile.type !==
            "application/pdf"
        ) {
            setError(
                "Please select a PDF resume."
            );

            return;
        }

        if (
            selectedFile.size >
            5 * 1024 * 1024
        ) {
            setError(
                "Resume must be smaller than 5MB."
            );

            return;
        }

        setFile(selectedFile);
    };

    /* -----------------------------------------------------
       FILE INPUT
    ----------------------------------------------------- */

    const handleFileChange = (event) => {
        const selectedFile =
            event.target.files?.[0];

        handleFile(selectedFile);
    };

    /* -----------------------------------------------------
       DRAG & DROP
    ----------------------------------------------------- */

    const handleDragOver = (event) => {
        event.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();

        setDragging(false);

        const droppedFile =
            event.dataTransfer.files?.[0];

        handleFile(droppedFile);
    };

    /* -----------------------------------------------------
       SUBMIT
    ----------------------------------------------------- */

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!file) {
            setError(
                "Please select a PDF resume first."
            );

            return;
        }

        setLoading(true);
        setError("");
        setResult(null);

        try {
            const formData =
                new FormData();

            formData.append(
                "resume",
                file
            );

            const response =
                await fetch(
                    API_ENDPOINT,
                    {
                        method: "POST",
                        body: formData,
                    }
                );

            const data =
                await response.json();

            console.log(
                "Resume analysis result:",
                data
            );

            if (
                !response.ok ||
                !data.success
            ) {
                throw new Error(
                    data.message ||
                    "Resume analysis failed."
                );
            }

            /*
             * Some APIs return the actual
             * analysis inside data.data.
             *
             * Support both structures.
             */

            const analysis =
                data.data ||
                data.result ||
                data.analysis ||
                data;

            setResult(analysis);
        } catch (err) {
            console.error(err);

            setError(
                err?.message ||
                "Something went wrong while analyzing your resume."
            );
        } finally {
            setLoading(false);
        }
    };

    /* -----------------------------------------------------
       RESET
    ----------------------------------------------------- */

    const analyzeAnother = () => {
        setFile(null);
        setResult(null);
        setError("");

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    /* =====================================================
       UPLOAD SCREEN
    ===================================================== */

    if (!result) {
        return (
            <main className={styles.page + " " + styles.teamsSection}>
                <div
                    className={
                        styles.backgroundGlow
                    }
                />

                <div
                    className={
                        styles.container
                    }
                >
                    <section
                        className={
                            styles.uploadHero
                        }
                    >
                        <div
                            className={
                                styles.heroBadge
                            }
                        >
                            <span>
                                ✦
                            </span>

                            AI-POWERED
                            RESUME AUDIT
                        </div>

                        <h1>
                            Know exactly how
                            <br />

                            <span>
                                your resume performs.
                            </span>
                        </h1>

                        <p>
                            Upload your resume and
                            get an intelligent analysis
                            of your ATS score, skills,
                            experience, strengths,
                            weaknesses and career
                            opportunities.
                        </p>

                        <form
                            onSubmit={
                                handleSubmit
                            }
                        >
                            <label
                                className={`${styles.dropZone} ${dragging
                                        ? styles.dragging
                                        : ""
                                    }`}
                                onDragOver={
                                    handleDragOver
                                }
                                onDragLeave={
                                    handleDragLeave
                                }
                                onDrop={
                                    handleDrop
                                }
                            >
                                <input
                                    type="file"
                                    accept=".pdf,application/pdf"
                                    onChange={
                                        handleFileChange
                                    }
                                />

                                <div
                                    className={
                                        styles.uploadIcon
                                    }
                                >
                                    ↑
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
                                            1024
                                        ).toFixed(
                                            1
                                        )} KB • PDF`
                                        : "or click to browse from your computer"}
                                </p>

                                <span
                                    className={
                                        styles.fileHint
                                    }
                                >
                                    PDF only • Maximum
                                    5MB
                                </span>
                            </label>

                            {error && (
                                <div
                                    className={
                                        styles.errorBox
                                    }
                                >
                                    <span>
                                        !
                                    </span>

                                    {error}
                                </div>
                            )}

                            <button
                                type="submit"
                                className={
                                    styles.analyzeButton
                                }
                                disabled={
                                    loading ||
                                    !file
                                }
                            >
                                {loading ? (
                                    <>
                                        <span
                                            className={
                                                styles.spinner
                                            }
                                        />

                                        Analyzing
                                        Resume...
                                    </>
                                ) : (
                                    <>
                                        Analyze
                                        My Resume

                                        <span>
                                            →
                                        </span>
                                    </>
                                )}
                            </button>
                        </form>

                        <div
                            className={
                                styles.trustRow
                            }
                        >
                            <span>
                                ✓ AI-powered
                                analysis
                            </span>

                            <span>
                                ✓ ATS
                                optimization
                            </span>

                            <span>
                                ✓ Instant
                                report
                            </span>
                        </div>
                    </section>
                </div>
            </main>
        );
    }

    /* =====================================================
       RESULTS SCREEN
    ===================================================== */

    const candidate =
        result.candidate || {};

    const candidateName =
        candidate.name ||
        "Candidate";

    return (
        <main className={styles.page}>
            <div
                className={
                    styles.backgroundGlow
                }
            />

            <div
                className={
                    styles.container
                }
            >
                {/* =========================================
                    HEADER
                ========================================= */}

                <div
                    className={
                        styles.resultsHeader
                    }
                >
                    <div>
                        <div
                            className={
                                styles.completeBadge
                            }
                        >
                            <span>
                                ✓
                            </span>

                            ANALYSIS
                            COMPLETE
                        </div>

                        <h1>
                            Resume Audit
                            Results
                        </h1>

                        <p>
                            AI-powered analysis of
                            your professional profile.
                        </p>
                    </div>

                    <button
                        className={
                            styles.secondaryButton
                        }
                        onClick={
                            analyzeAnother
                        }
                    >
                        Analyze Another
                        Resume
                    </button>
                </div>

                {/* =========================================
                    CANDIDATE
                ========================================= */}

                <section
                    className={
                        styles.candidateCard
                    }
                >
                    <div
                        className={
                            styles.avatar
                        }
                    >
                        {getInitial(
                            candidateName
                        )}
                    </div>

                    <div
                        className={
                            styles.candidateInfo
                        }
                    >
                        <span>
                            Candidate
                        </span>

                        <h2>
                            {candidateName}
                        </h2>

                        <div
                            className={
                                styles.candidateMeta
                            }
                        >
                            {candidate.email && (
                                <span>
                                    ✉{" "}
                                    {
                                        candidate.email
                                    }
                                </span>
                            )}

                            {candidate.phone && (
                                <span>
                                    ☎{" "}
                                    {
                                        candidate.phone
                                    }
                                </span>
                            )}

                            {candidate.location && (
                                <span>
                                    ◉{" "}
                                    {
                                        candidate.location
                                    }
                                </span>
                            )}
                        </div>
                    </div>

                    <div
                        className={
                            styles.profileLinks
                        }
                    >
                        {candidate.linkedin &&
                            candidate.linkedin !==
                            "Not provided" && (
                                <a
                                    href={
                                        candidate.linkedin
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    LinkedIn ↗
                                </a>
                            )}

                        {candidate.github &&
                            candidate.github !==
                            "Not provided" && (
                                <a
                                    href={
                                        candidate.github
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    GitHub ↗
                                </a>
                            )}

                        {candidate.portfolio &&
                            candidate.portfolio !==
                            "Not provided" && (
                                <a
                                    href={
                                        candidate.portfolio
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Portfolio ↗
                                </a>
                            )}
                    </div>
                </section>

                {/* =========================================
                    SCORE OVERVIEW
                ========================================= */}

                <section
                    className={
                        styles.auditSection
                    }
                >
                    <SectionHeader
                        number="01"
                        title="Resume Score Overview"
                        description="A breakdown of your resume's performance across key evaluation criteria."
                    />

                    <div
                        className={
                            styles.scoreGrid
                        }
                    >
                        <ScoreRing
                            label="ATS Score"
                            score={
                                scores.ats_score
                            }
                            primary
                            description="How effectively your resume can pass ATS screening."
                        />

                        <ScoreRing
                            label="Overall Score"
                            score={
                                scores.overall
                            }
                            description="Your overall resume quality score."
                        />

                        <ScoreRing
                            label="Technical Skills"
                            score={
                                scores.technical_skills
                            }
                            description="Strength and relevance of your technical skills."
                        />

                        <ScoreRing
                            label="Experience"
                            score={
                                scores.experience
                            }
                            description="Quality and relevance of your experience."
                        />

                        <ScoreRing
                            label="Projects"
                            score={
                                scores.projects
                            }
                            description="Strength and impact of your projects."
                        />

                        <ScoreRing
                            label="Education"
                            score={
                                scores.education
                            }
                            description="Education relevance and presentation."
                        />

                        <ScoreRing
                            label="Resume Quality"
                            score={
                                scores.resume_quality
                            }
                            description="Overall structure, clarity and professionalism."
                        />
                    </div>
                </section>

                {/* =========================================
                    ATS
                ========================================= */}

                <ATSAnalysis
                    data={
                        result.ats_analysis
                    }
                />

                {/* =========================================
                    SKILLS
                ========================================= */}

                {result.skills && (
                    <section
                        className={
                            styles.auditSection
                        }
                    >
                        <SectionHeader
                            number="03"
                            title="Skills"
                            description="Technical and professional skills detected from your resume."
                        />

                        <div
                            className={
                                styles.skillsCard
                            }
                        >
                            {Array.isArray(
                                result.skills
                            ) ? (
                                <TagList
                                    items={
                                        result.skills
                                    }
                                />
                            ) : (
                                <ValueRenderer
                                    value={
                                        result.skills
                                    }
                                />
                            )}
                        </div>
                    </section>
                )}

                {/* =========================================
                    EXPERIENCE
                ========================================= */}

                {result.experience && (
                    <section
                        className={
                            styles.auditSection
                        }
                    >
                        <SectionHeader
                            number="04"
                            title="Professional Experience"
                            description="Experience extracted and evaluated from your resume."
                        />

                        <ObjectCollection
                            data={
                                result.experience
                            }
                            emptyText="No professional experience information found."
                        />
                    </section>
                )}

                {/* =========================================
                    PROJECTS
                ========================================= */}

                {result.projects && (
                    <section
                        className={
                            styles.auditSection
                        }
                    >
                        <SectionHeader
                            number="05"
                            title="Projects"
                            description="Projects and technical work identified in your resume."
                        />

                        <ObjectCollection
                            data={
                                result.projects
                            }
                            emptyText="No project information found."
                        />
                    </section>
                )}

                {/* =========================================
                    EDUCATION
                ========================================= */}

                {result.education && (
                    <section
                        className={
                            styles.auditSection
                        }
                    >
                        <SectionHeader
                            number="06"
                            title="Education"
                            description="Educational background detected from your resume."
                        />

                        <ObjectCollection
                            data={
                                result.education
                            }
                            emptyText="No education information found."
                        />
                    </section>
                )}

                {/* =========================================
                    CERTIFICATIONS
                ========================================= */}

                {result.certifications && (
                    <section
                        className={
                            styles.auditSection
                        }
                    >
                        <SectionHeader
                            number="07"
                            title="Certifications"
                            description="Professional certifications identified in your resume."
                        />

                        <ObjectCollection
                            data={
                                result.certifications
                            }
                            emptyText="No certifications found."
                        />
                    </section>
                )}

                {/* =========================================
                    RECOMMENDED ROLES
                ========================================= */}

                {result.recommended_roles &&
                    result
                        .recommended_roles
                        .length > 0 && (
                        <section
                            className={
                                styles.auditSection
                            }
                        >
                            <SectionHeader
                                number="08"
                                title="Recommended Career Roles"
                                description="Roles that align with the skills and experience found in your resume."
                            />

                            <div
                                className={
                                    styles.rolesGrid
                                }
                            >
                                {result.recommended_roles.map(
                                    (
                                        role,
                                        index
                                    ) => (
                                        <div
                                            className={
                                                styles.roleCard
                                            }
                                            key={
                                                index
                                            }
                                        >
                                            <span>
                                                {String(
                                                    index +
                                                    1
                                                ).padStart(
                                                    2,
                                                    "0"
                                                )}
                                            </span>

                                            <h3>
                                                {cleanText(
                                                    role
                                                )}
                                            </h3>

                                            <div>
                                                →
                                            </div>
                                        </div>
                                    )
                                )}
                            </div>
                        </section>
                    )}

                {/* =========================================
                    STRENGTHS
                ========================================= */}

                <Strengths
                    items={
                        result.strengths
                    }
                />

                {/* =========================================
                    WEAKNESSES
                ========================================= */}

                <Weaknesses
                    items={
                        result.weaknesses
                    }
                />

                {/* =========================================
                    INTERVIEW RECOMMENDATION
                ========================================= */}

                {result.interview_recommendation && (
                    <section
                        className={
                            styles.auditSection
                        }
                    >
                        <SectionHeader
                            number="10"
                            title="Interview Recommendation"
                            description="AI-generated guidance based on your resume."
                        />

                        <div
                            className={
                                styles.recommendationCard
                            }
                        >
                            <div
                                className={
                                    styles.recommendationIcon
                                }
                            >
                                ★
                            </div>

                            <div>
                                <h3>
                                    Interview
                                    Readiness
                                </h3>

                                {isPrimitive(
                                    result.interview_recommendation
                                ) ? (
                                    <p>
                                        {
                                            result.interview_recommendation
                                        }
                                    </p>
                                ) : (
                                    <ValueRenderer
                                        value={
                                            result.interview_recommendation
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* =========================================
                    INTERVIEW QUESTIONS
                ========================================= */}

                <InterviewQuestions
                    questions={
                        result.interview_questions
                    }
                />

                {/* =========================================
                    FINAL ASSESSMENT
                ========================================= */}

                {result.final_assessment && (
                    <section
                        className={
                            styles.auditSection
                        }
                    >
                        <SectionHeader
                            number="12"
                            title="Final Assessment"
                            description="Overall evaluation of your current resume."
                        />

                        <div
                            className={
                                styles.finalCard
                            }
                        >
                            <div
                                className={
                                    styles.finalGlow
                                }
                            />

                            <div
                                className={
                                    styles.finalIcon
                                }
                            >
                                ✦
                            </div>

                            <div
                                className={
                                    styles.finalContent
                                }
                            >
                                <h3>
                                    AI Assessment
                                </h3>

                                {isPrimitive(
                                    result.final_assessment
                                ) ? (
                                    <p>
                                        {
                                            result.final_assessment
                                        }
                                    </p>
                                ) : (
                                    <ValueRenderer
                                        value={
                                            result.final_assessment
                                        }
                                    />
                                )}
                            </div>
                        </div>
                    </section>
                )}

                {/* =========================================
                    PDF DOWNLOAD
                ========================================= */}

                {result.pdf_url && (
                    <section
                        className={
                            styles.pdfSection
                        }
                    >
                        <div
                            className={
                                styles.pdfIcon
                            }
                        >
                            PDF
                        </div>

                        <div
                            className={
                                styles.pdfContent
                            }
                        >
                            <span>
                                COMPLETE REPORT
                            </span>

                            <h2>
                                Download Your
                                Resume Audit
                            </h2>

                            <p>
                                Get the complete
                                AI-generated analysis
                                as a professional PDF
                                report.
                            </p>
                        </div>

                        <a
                            href={
                                result.pdf_url
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                                styles.pdfButton
                            }
                        >
                            Download PDF

                            <span>
                                ↓
                            </span>
                        </a>
                    </section>
                )}

                {/* =========================================
                    FOOTER
                ========================================= */}

                <div
                    className={
                        styles.resultsFooter
                    }
                >
                    <span>
                        Powered by UniSoft AI
                    </span>

                    <button
                        onClick={
                            analyzeAnother
                        }
                    >
                        Analyze another
                        resume →
                    </button>
                </div>
            </div>
        </main>
    );
}