import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/courseContent.json';
import { ArrowRight, BookOpen, Target, ShieldCheck, Info, Calendar, CheckSquare, Sparkles } from 'lucide-react';

const Home = () => {
    const { site, course, units } = data;

    return (
        <div className="container">
            {/* Hero Section */}
            <section className="card hero-card">
                <div className="hero-content">
                    {/* Abstract decorative elements */}
                    <div className="hero-circle-1"></div>
                    <div className="hero-circle-2"></div>

                    <div className="hero-text-container">
                        <span className="hero-label">Professional Readiness Program</span>
                        <h1 className="hero-title">{site.title}</h1>
                        <p className="hero-subtitle">{site.subtitle}</p>
                    </div>
                </div>
            </section>

            {/* Course Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '40px' }}>
                <div className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--primary)' }}>
                        <Target size={24} />
                        <h3 style={{ margin: 0 }}>Course Goal</h3>
                    </div>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                        A 60-day, artifact-based course focusing on digital literacy, career exploration, and professional readiness.
                    </p>
                </div>
                <div className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--secondary)' }}>
                        <ShieldCheck size={24} />
                        <h3 style={{ margin: 0 }}>Grading</h3>
                    </div>
                    <p style={{ color: 'var(--text-light)', fontSize: '0.95rem' }}>
                        Model: <strong>{course.grading_model}</strong> based on required artifacts and daily deliverables.
                    </p>
                </div>
            </div>

            {/* Units List */}
            <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <BookOpen className="primary" /> Course Curriculum
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {units.map((unit) => {
                    const unitIcons = {
                        'U1': <Info className="primary" />,
                        'U2': <Calendar className="primary" />,
                        'U3': <CheckSquare className="primary" />,
                        'U4': <Sparkles className="primary" />
                    };
                    return (
                        <Link key={unit.unit_id} to={`/unit/${unit.unit_id}`} className="card" style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'transform 0.2s',
                            cursor: 'pointer',
                            borderLeft: `4px solid ${unit.unit_id === 'U3' ? '#8b5cf6' : unit.unit_id === 'U4' ? '#f59e0b' : 'var(--primary)'}`
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                <div style={{
                                    padding: '12px',
                                    backgroundColor: 'var(--bg)',
                                    borderRadius: '12px',
                                    color: 'var(--primary)'
                                }}>
                                    {unitIcons[unit.unit_id]}
                                </div>
                                <div>
                                    <div style={{ display: 'flex', gap: '8px', marginBottom: '4px' }}>
                                        <span className="badge" style={{ fontSize: '0.7rem' }}>{unit.unit_id}</span>
                                        <span className="badge" style={{ fontSize: '0.7rem' }}>Days {unit.day_range.start}-{unit.day_range.end}</span>
                                    </div>
                                    <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{unit.title}</h3>
                                </div>
                            </div>
                            <ArrowRight style={{ color: 'var(--primary)', opacity: 0.5 }} />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
