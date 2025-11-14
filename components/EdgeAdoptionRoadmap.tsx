import React, { useEffect, useRef } from 'react';

// --- Icons --- //
const ChartBarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>;
const ShieldCheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z" /></svg>;
const BoltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>;
const MapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m-10.5-1.5h15" /></svg>;
const UserGroupIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.964A3 3 0 0012 12.75a3 3 0 00-3.75 2.964m6.502 6.502a3.75 3.75 0 00-3.284-2.457c-1.141 0-2.223.442-3.034 1.206C6.091 18.282 5.25 19.823 5.25 21.5a3 3 0 003 3h3.375c.683 0 1.32-.27 1.793-.732zM12 3c2.97 0 5.432 2.023 5.938 4.685a9.048 9.048 0 01-9.876 0A5.432 5.432 0 0112 3z" /></svg>;
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BuildingOfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375m-6.375 5.25h6.375M5.25 6h.008v.008H5.25V6zm.008 5.25h.008v.008H5.25v-.008zm0 5.25h.008v.008H5.25v-.008zm13.5-5.25h.008v.008h-.008v-.008zm0 5.25h.008v.008h-.008v-.008zM12 9a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 9zm.75 5.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" /></svg>;
const CpuChipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m-12-9.75h15" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598M12 14.25a5.25 5.25 0 01-3.75-9.335 5.25 5.25 0 019.335 0A5.25 5.25 0 0112 14.25z" /></svg>;

const EdgeAdoptionRoadmap: React.FC<{ openModal: () => void }> = ({ openModal }) => {
    const sectionsRef = useRef<(HTMLElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        const currentSections = sectionsRef.current.filter(el => el !== null);
        currentSections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            currentSections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="edge-roadmap-page">
            <section className="ear-hero">
                <div className="container">
                    <h1>Edge Adoption Roadmap</h1>
                    <p>Assess, plan, and accelerate your edge transformation with confidence.</p>
                </div>
            </section>

            <section ref={el => sectionsRef.current[0] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Edge Assessment & User Profiling</h2>
                    <p>As businesses grow smarter and more connected, data is being created everywhere — on shop floors, in hospitals, in smart factories, and across devices. Before expanding edge deployments, it’s critical to know where you stand today.</p>
                    <p>Chavans’ Edge Assessment & User Profiling helps you evaluate your infrastructure, user behavior, and data flow to design edge solutions that are efficient, secure, and built around real usage — not assumptions.</p>
                </div>
            </section>
            
            <section ref={el => sectionsRef.current[1] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Why It Matters</h2>
                    <div className="ear-icon-cards">
                        <div className="ear-icon-card">
                            <ChartBarIcon /><h3>Faster Insights</h3>
                            <p>Identify where to deploy edge nodes for maximum performance and impact.</p>
                        </div>
                        <div className="ear-icon-card">
                            <ShieldCheckIcon /><h3>Stronger Security</h3>
                            <p>Detect vulnerabilities and strengthen access controls before scaling.</p>
                        </div>
                        <div className="ear-icon-card">
                            <BoltIcon /><h3>Optimized Performance</h3>
                            <p>Align compute and storage to latency and workload demands.</p>
                        </div>
                        <div className="ear-icon-card">
                            <MapIcon /><h3>Strategic Roadmap</h3>
                            <p>Create a structured rollout plan with measurable ROI milestones.</p>
                        </div>
                        <div className="ear-icon-card">
                            <UserGroupIcon /><h3>User-Centric Design</h3>
                            <p>Shape your edge around how people and devices actually interact.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[2] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Chavans’ Approach</h2>
                    <div className="ear-timeline">
                        <div className="ear-timeline-item">
                            <div className="ear-timeline-step">1</div>
                            <h3>Discovery & Baseline</h3>
                            <p>We map your existing environment — edge locations, hardware, connectivity, and network latency — to identify immediate opportunities for improvement.</p>
                            <p><strong>Outcome:</strong> Clear visibility into your edge maturity and readiness.</p>
                        </div>
                        <div className="ear-timeline-item">
                            <div className="ear-timeline-step">2</div>
                            <h3>Readiness Assessment</h3>
                            <p>We assess infrastructure capability, interoperability with cloud and datacentre systems, and potential bottlenecks.</p>
                            <p><strong>Outcome:</strong> Readiness score and prioritized recommendations.</p>
                        </div>
                        <div className="ear-timeline-item">
                            <div className="ear-timeline-step">3</div>
                            <h3>User Profiling & Experience Mapping</h3>
                            <p>We analyze how people and devices interact with your systems to align compute placement with real operational behavior.</p>
                            <p><strong>Outcome:</strong> Actionable insights on where to position intelligence.</p>
                        </div>
                        <div className="ear-timeline-item">
                            <div className="ear-timeline-step">4</div>
                            <h3>Edge Strategy Blueprint</h3>
                            <p>We design a tailored roadmap covering architecture, technology stack, deployment phases, and governance.</p>
                            <p><strong>Outcome:</strong> A structured, AI-ready blueprint for future growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[3] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Deliverables</h2>
                    <div className="ear-deliverables">
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Edge Readiness Report</h4><p>Infrastructure, connectivity, and capability scoring.</p></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>User Behavior Dashboard</h4><p>Visualization of usage trends and edge interaction.</p></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Architecture Blueprint</h4><p>Recommended topology and technology stack.</p></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Implementation Roadmap</h4><p>Phased rollout with KPIs and timelines.</p></div></div>
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[4] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Who It’s For</h2>
                    <div className="ear-columns">
                        <div className="ear-column"><BuildingOfficeIcon /><p>Enterprises planning new edge or hybrid infrastructures.</p></div>
                        <div className="ear-column"><CpuChipIcon /><p>Organizations with IoT-heavy or real-time operations.</p></div>
                        <div className="ear-column"><UsersIcon /><p>Businesses needing to match user experience with system performance.</p></div>
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[5] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Why Chavans</h2>
                    <p style={{marginBottom: "2.5rem"}}>Chavans brings deep expertise in Edge, Cloud, and Datacentre integration — with proven frameworks for AI-driven automation, scalability, and resilience.</p>
                    <div className="ear-partners">
                        <div className="ear-partner">Dell</div>
                        <div className="ear-partner">HPE</div>
                        <div className="ear-partner">NVIDIA</div>
                        <div className="ear-partner">Intel</div>
                        <div className="ear-partner">Azure</div>
                        <div className="ear-partner">AWS</div>
                        <div className="ear-partner">GCP</div>
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[6] = el} className="ear-cta fade-in-section">
                 <div className="container">
                    <h2>Start Your Edge Journey</h2>
                    <p>Discover how ready your business is for the future of distributed intelligence. Request a custom Edge Assessment from Chavans — and turn your edge strategy into measurable results.</p>
                    <button className="btn" onClick={openModal}>Request an Assessment →</button>
                </div>
            </section>
        </div>
    );
};

export default EdgeAdoptionRoadmap;