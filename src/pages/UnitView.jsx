import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/courseContent.json';
import { ChevronLeft, Calendar, CheckSquare, Info, Sparkles, CheckCircle } from 'lucide-react';
import { useProgress } from '../context/ProgressContext';

const UnitView = () => {
    const { unitId } = useParams();
    const { isComplete } = useProgress();
    const unit = data.units.find(u => u.unit_id === unitId);

    if (!unit) return <div className="container">Unit not found</div>;

    // Unit-specific styles/icons
    const unitConfig = {
        'U1': { color: '#0284c7', icon: <Info size={40} /> },
        'U2': { color: '#0d9488', icon: <Calendar size={40} /> },
        'U3': { color: '#8b5cf6', icon: <CheckSquare size={40} /> },
        'U4': { color: '#f59e0b', icon: <Sparkles size={40} /> }
    };
    const config = unitConfig[unitId] || { color: 'var(--primary)', icon: <Calendar size={40} /> };

    return (
        <div className="container">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-light)', marginBottom: '24px' }}>
                <ChevronLeft size={20} /> Back to Course
            </Link>

            <div className="card" style={{
                padding: 0,
                overflow: 'hidden',
                border: 'none',
                marginBottom: '32px',
                background: `linear-gradient(135deg, ${config.color} 0%, rgba(255,255,255,0) 100%), var(--surface)`,
                position: 'relative',
                minHeight: '180px',
                display: 'flex',
                alignItems: 'center'
            }}>
                {/* Decorative pattern */}
                <div style={{
                    position: 'absolute',
                    right: '5%',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    opacity: 0.1,
                    color: 'white'
                }}>
                    {config.icon}
                </div>

                <div style={{ padding: '32px', position: 'relative', zIndex: 1 }}>
                    <span className="badge" style={{ backgroundColor: 'white', color: config.color, marginBottom: '12px' }}>{unit.unit_id}</span>
                    <h1 style={{ margin: 0, fontSize: '2.2rem', color: 'white', textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>{unit.title}</h1>
                </div>
            </div>

            <div style={{ marginBottom: '40px' }}>
                <h4 style={{ color: 'var(--text-light)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Sparkles size={16} /> Learning Outcomes
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                    {unit.outcomes.map((outcome, i) => (
                        <div key={i} className="card" style={{ padding: '16px', backgroundColor: 'var(--bg)', border: '1px solid var(--border)' }}>
                            <p style={{ margin: 0, fontSize: '0.95rem', color: 'var(--text)' }}>{outcome}</p>
                        </div>
                    ))}
                </div>
            </div>

            <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar className="primary" /> Daily Lessons
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {unit.days.map((day) => {
                    const completed = isComplete(day.day_number);
                    return (
                        <Link key={day.day_number} to={`/day/${day.day_number}`} className="card" style={{
                            padding: '16px 24px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '20px',
                            transition: 'all 0.2s',
                            borderLeft: completed ? '4px solid #10b981' : '1px solid var(--border)'
                        }}>
                            <div style={{
                                width: '40px',
                                height: '40px',
                                borderRadius: '8px',
                                backgroundColor: 'var(--bg)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: 800,
                                color: config.color,
                                flexShrink: 0
                            }}>
                                {day.day_number}
                            </div>
                            <div style={{ flex: 1 }}>
                                <h4 style={{ margin: 0, fontSize: '1.05rem', color: completed ? 'var(--text-light)' : 'var(--text)', textDecoration: completed ? 'line-through' : 'none' }}>{day.title}</h4>
                                <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '400px' }}>
                                    {day.deliverable.title}
                                </p>
                            </div>
                            {completed ? (
                                <CheckCircle size={24} style={{ color: '#10b981' }} />
                            ) : (
                                <CheckSquare size={20} style={{ color: 'var(--border)' }} />
                            )}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default UnitView;
