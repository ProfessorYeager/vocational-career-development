import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/courseContent.json';
import { ChevronLeft, Info, HelpCircle, ListTodo, Send, Sparkles } from 'lucide-react';

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
            <Link to={`/unit/${unit.unit_id}`} style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-light)', marginBottom: '24px' }}>
                <ChevronLeft size={20} /> Back to {unit.unit_id}
            </Link>

            <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '12px' }}>
                    <span className="badge">Day {day.day_number}</span>
                    <span className="badge badge-primary">{unit.title}</span>
                </div>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 800, lineHeight: 1.2 }}>{day.title}</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* What Section */}
                <section className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--primary)' }}>
                        <Info size={20} />
                        <h3 style={{ margin: 0 }}>What?</h3>
                    </div>
                    <p>{day.what}</p>
                </section>

                {/* Why Section */}
                <section className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--secondary)' }}>
                        <HelpCircle size={20} />
                        <h3 style={{ margin: 0 }}>Why?</h3>
                    </div>
                    <p>{day.why}</p>
                </section>

                {/* How Section */}
                <section className="card">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px', color: 'var(--accent)' }}>
                        <ListTodo size={20} />
                        <h3 style={{ margin: 0 }}>How?</h3>
                    </div>
                    <ul style={{ paddingLeft: '20px' }}>
                        {day.how.map((step, i) => (
                            <li key={i} style={{ marginBottom: '8px' }}>{step}</li>
                        ))}
                    </ul>
                </section>

                {/* Deliverable Section */}
                <section className="card" style={{ backgroundColor: '#f0f9ff', border: '1px solid #bae6fd' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#0369a1' }}>
                            <Send size={20} />
                            <h3 style={{ margin: 0 }}>Deliverable</h3>
                        </div>
                        {day.deliverable.ai_allowed ? (
                            <span className="badge" style={{ backgroundColor: '#e0f2fe', color: '#0369a1', borderColor: '#bae6fd' }}>
                                <Sparkles size={12} style={{ marginRight: '4px' }} /> AI Allowed
                            </span>
                        ) : (
                            <span className="badge">AI Not Allowed</span>
                        )}
                    </div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '12px' }}>{day.deliverable.title}</h4>
                    <p style={{ color: '#0c4a6e', fontSize: '0.95rem' }}>{day.deliverable.instructions}</p>

                    <div style={{ marginTop: '20px', paddingTop: '16px', borderTop: '1px solid #bae6fd' }}>
                        <h5 style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: '#0369a1', marginBottom: '8px' }}>Submission Tip</h5>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#0369a1' }}>
                            Use the standard email subject format and include all required fields.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DayView;
