import React from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data/courseContent.json';
import { ChevronLeft, Calendar, CheckSquare } from 'lucide-react';

const UnitView = () => {
    const { unitId } = useParams();
    const unit = data.units.find(u => u.unit_id === unitId);

    if (!unit) return <div className="container">Unit not found</div>;

    return (
        <div className="container">
            <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--text-light)', marginBottom: '24px' }}>
                <ChevronLeft size={20} /> Back to Course
            </Link>

            <div className="card" style={{ borderLeft: '6px solid var(--primary)', marginBottom: '32px' }}>
                <span className="badge badge-primary" style={{ marginBottom: '12px' }}>{unit.unit_id}</span>
                <h1 style={{ margin: 0, fontSize: '1.8rem' }}>{unit.title}</h1>
                <div style={{ marginTop: '16px' }}>
                    <h4 style={{ color: 'var(--text-light)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em', marginBottom: '8px' }}>Learning Outcomes</h4>
                    <ul style={{ paddingLeft: '20px', color: 'var(--text-light)' }}>
                        {unit.outcomes.map((outcome, i) => (
                            <li key={i}>{outcome}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <h2 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar className="primary" /> Daily Lessons
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {unit.days.map((day) => (
                    <Link key={day.day_number} to={`/day/${day.day_number}`} className="card" style={{
                        padding: '16px 24px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '20px',
                        transition: 'all 0.2s'
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
                            color: 'var(--primary)',
                            flexShrink: 0
                        }}>
                            {day.day_number}
                        </div>
                        <div style={{ flex: 1 }}>
                            <h4 style={{ margin: 0, fontSize: '1.05rem' }}>{day.title}</h4>
                            <p style={{ margin: 0, color: 'var(--text-light)', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '400px' }}>
                                {day.deliverable.title}
                            </p>
                        </div>
                        <CheckSquare size={20} style={{ color: 'var(--border)' }} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UnitView;
