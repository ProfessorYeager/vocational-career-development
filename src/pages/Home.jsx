import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data/courseContent.json';
import { ArrowRight, BookOpen, Target, ShieldCheck } from 'lucide-react';

const Home = () => {
    const { site, course, units } = data;

    return (
        <div className="container">
            {/* Hero Section */}
            <section className="card" style={{
                padding: 0,
                overflow: 'hidden',
                border: 'none',
                position: 'relative',
                marginBottom: '40px'
            }}>
                <div style={{
                    height: '240px',
                    background: 'linear-gradient(135deg, #0284c7 0%, #0d9488 100%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '40px',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    {/* Abstract decorative elements */}
                    <div style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: '300px',
                        height: '300px',
                        background: 'rgba(255,255,255,0.1)',
                        borderRadius: '50%',
                    }}></div>
                    <div style={{
                        position: 'absolute',
                        bottom: '-10%',
                        left: '30%',
                        width: '150px',
                        height: '150px',
                        background: 'rgba(255,255,255,0.05)',
                        borderRadius: '50%',
                    }}></div>

                    <h1 style={{ color: 'white', fontSize: '2.2rem', fontWeight: 800, marginBottom: '8px', position: 'relative', zIndex: 1 }}>{site.title}</h1>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', maxWidth: '500px', position: 'relative', zIndex: 1 }}>{site.subtitle}</p>
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
                {units.map((unit) => (
                    <Link key={unit.unit_id} to={`/unit/${unit.unit_id}`} className="card" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'transform 0.2s',
                        cursor: 'pointer'
                    }}>
                        <div>
                            <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
                                <span className="badge badge-primary">{unit.unit_id}</span>
                                <span className="badge">Days {unit.day_range.start}-{unit.day_range.end}</span>
                            </div>
                            <h3 style={{ margin: 0, fontSize: '1.2rem' }}>{unit.title}</h3>
                        </div>
                        <ArrowRight style={{ color: 'var(--primary)' }} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
