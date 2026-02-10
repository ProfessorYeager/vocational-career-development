import React from 'react';
import data from '../data/courseContent.json';
import { ClipboardCheck, ShieldAlert } from 'lucide-react';

const Artifacts = () => {
    const { course } = data;

    return (
        <div className="container">
            <h1 style={{ marginBottom: '32px' }}>Required Artifacts</h1>

            <div className="card" style={{ backgroundColor: '#fff7ed', borderColor: '#ffedd5', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#9a3412', marginBottom: '12px' }}>
                    <ShieldAlert size={24} />
                    <h3 style={{ margin: 0 }}>Pass Requirements</h3>
                </div>
                <p style={{ color: '#c2410c', fontSize: '0.95rem' }}>
                    To pass this course, you must complete and submit all required artifacts listed below.
                    Make sure to follow the professional quality standards for each submission.
                </p>
            </div>

            <div style={{ display: 'grid', gap: '12px' }}>
                {course.pass_requirements.required_artifacts.map((artifact, i) => (
                    <div key={i} className="card" style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        padding: '20px'
                    }}>
                        <div style={{
                            color: 'var(--secondary)',
                            backgroundColor: 'var(--bg)',
                            padding: '10px',
                            borderRadius: '8px'
                        }}>
                            <ClipboardCheck size={24} />
                        </div>
                        <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{artifact}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Artifacts;
