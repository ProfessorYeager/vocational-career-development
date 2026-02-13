import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/courseContent.json';
import { ChevronLeft, Info, HelpCircle, ListTodo, Send, Sparkles, BookOpen, ExternalLink } from 'lucide-react';

const DayView = () => {
    const { dayId } = useParams();

    // Find day across all units
    let day;
    let unit;
    for (const u of data.units) {
        const d = u.days.find(d => d.day_number === parseInt(dayId));
        if (d) {
            day = d;
            unit = u;
            break;
        }
    }

    if (!day) return <div className="container">Day not found</div>;

    return (
        <div className="container" style={{ paddingBottom: '80px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <Link to={`/unit/${unit.unit_id}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-light)' }}>
                    <ChevronLeft size={20} /> Back to {unit.unit_id}
                </Link>
                <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="badge">Day {day.day_number}</span>
                    <span className="badge badge-primary">{unit.title}</span>
                </div>
            </div>

            <div style={{ marginBottom: '40px', padding: '40px', borderRadius: '24px', background: 'var(--surface)', border: '1px solid var(--border)', boxShadow: 'var(--shadow)' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: 800, lineHeight: 1.2, margin: 0, color: 'var(--text)' }}>{day.title}</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
                {/* What Section */}
                <section className="card" style={{ borderTop: '4px solid var(--primary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--primary)' }}>
                        <div style={{ padding: '8px', backgroundColor: 'rgba(2, 132, 199, 0.1)', borderRadius: '8px' }}>
                            <Info size={20} />
                        </div>
                        <h3 style={{ margin: 0, fontSize: '1.2rem' }}>What?</h3>
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.6 }}>{day.what}</p>
                </section>

                {/* Why Section */}
                <section className="card" style={{ borderTop: '4px solid var(--secondary)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--secondary)' }}>
                        <div style={{ padding: '8px', backgroundColor: 'rgba(13, 148, 136, 0.1)', borderRadius: '8px' }}>
                            <HelpCircle size={20} />
                        </div>
                        <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Why?</h3>
                    </div>
                    <p style={{ fontSize: '1rem', color: 'var(--text)', lineHeight: 1.6 }}>{day.why}</p>
                </section>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* How Section */}
                <section className="card" style={{ borderLeft: '4px solid var(--accent)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: 'var(--accent)' }}>
                        <ListTodo size={20} />
                        <h3 style={{ margin: 0 }}>How?</h3>
                    </div>
                    <ul style={{ paddingLeft: '0', listStyle: 'none' }}>
                        {day.how.map((step, i) => (
                            <li key={i} style={{
                                marginBottom: '12px',
                                padding: '12px 16px',
                                backgroundColor: 'var(--bg)',
                                borderRadius: '8px',
                                display: 'flex',
                                gap: '12px',
                                alignItems: 'center'
                            }}>
                                <span style={{ fontWeight: 800, color: 'var(--accent)', opacity: 0.5 }}>{i + 1}</span>
                                <span style={{ fontSize: '0.95rem' }}>{step}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Resources Section */}
                {day.resources && day.resources.length > 0 && (
                    <section className="card" style={{ borderLeft: '4px solid #8b5cf6', marginBottom: '24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', color: '#8b5cf6' }}>
                            <BookOpen size={20} />
                            <h3 style={{ margin: 0 }}>Recommended Resources</h3>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
                            {day.resources.map((resource, i) => (
                                <a
                                    key={i}
                                    href={resource.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'block',
                                        padding: '16px',
                                        backgroundColor: 'var(--bg)',
                                        borderRadius: '8px',
                                        textDecoration: 'none',
                                        border: '1px solid transparent',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <h4 style={{ margin: '0 0 8px 0', color: 'var(--primary)', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {resource.title}
                                        <ExternalLink size={14} />
                                    </h4>
                                    <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: 1.4 }}>
                                        {resource.description}
                                    </p>
                                </a>
                            ))}
                        </div>
                    </section>
                )}

                {/* Deliverable Section */}
                <section className="card" style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd', boxShadow: '0 10px 15px -3px rgba(186, 230, 253, 0.2)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0369a1' }}>
                            <div style={{ padding: '8px', backgroundColor: '#e0f2fe', borderRadius: '8px' }}>
                                <Send size={20} />
                            </div>
                            <h3 style={{ margin: 0 }}>Deliverable</h3>
                        </div>
                        {day.deliverable.ai_allowed ? (
                            <span className="badge" style={{ backgroundColor: '#e0f2fe', color: '#0369a1', borderColor: '#bae6fd', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <Sparkles size={14} /> AI Allowed
                            </span>
                        ) : (
                            <span className="badge" style={{ backgroundColor: '#f1f5f9', color: '#64748b' }}>AI Not Allowed</span>
                        )}
                    </div>
                    <div style={{ padding: '24px', backgroundColor: 'white', borderRadius: '12px', border: '1px solid #e0f2fe' }}>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '12px', color: '#0c4a6e' }}>{day.deliverable.title}</h4>
                        <div style={{ color: '#334155', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                            {day.deliverable.instructions.split(/<br\s*\/?>/i).map((line, i) => (
                                <React.Fragment key={i}>
                                    {line.split('**').map((part, j) => (
                                        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                                    ))}
                                    {i < day.deliverable.instructions.split(/<br\s*\/?>/i).length - 1 && <br />}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', gap: '12px', color: '#0369a1', fontSize: '0.9rem' }}>
                        <Info size={16} />
                        <span>Submission: Email your instructor your completed deliverable with the subject "{data.course.submission_method.email_conventions.subject_format.replace('{day_number}', day.day_number).replace('{lesson_name}', day.title)}"</span>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DayView;
