import React, { useEffect, useRef } from 'react';

// --- Icons --- //
const CheckCircleIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const BuildingOfficeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375M9 12h6.375m-6.375 5.25h6.375M5.25 6h.008v.008H5.25V6zm.008 5.25h.008v.008H5.25v-.008zm0 5.25h.008v.008H5.25v-.008zm13.5-5.25h.008v.008h-.008v-.008zm0 5.25h.008v.008h-.008v-.008zM12 9a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0112 9zm.75 5.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z" /></svg>;
const CpuChipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5m0 16.5v-1.5m-12-9.75h15" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-4.598M12 14.25a5.25 5.25 0 01-3.75-9.335 5.25 5.25 0 019.335 0A5.25 5.25 0 0112 14.25z" /></svg>;
const UserGroupIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m-7.5-2.964A3 3 0 0012 12.75a3 3 0 00-3.75 2.964m6.502 6.502a3.75 3.75 0 00-3.284-2.457c-1.141 0-2.223.442-3.034 1.206C6.091 18.282 5.25 19.823 5.25 21.5a3 3 0 003 3h3.375c.683 0 1.32-.27 1.793-.732zM12 3c2.97 0 5.432 2.023 5.938 4.685a9.048 9.048 0 01-9.876 0A5.432 5.432 0 0112 3z" /></svg>;

// Icons for the TAD
const ServerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V7.5a3 3 0 013-3h13.5a3 3 0 013 3v3.75a3 3 0 01-3 3m-13.5 0v-3.75a3 3 0 013-3h13.5a3 3 0 013 3V14.25" /></svg>;
const GlobeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A11.953 11.953 0 0112 16.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 013 12c0-.778.099-1.533.284-2.253m0 0c1.393-2.796 4.143-4.823 7.433-5.163" /></svg>;
const DatabaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>;
const CloudIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" /></svg>;


const InfrastructureArchitecturePage: React.FC<{ openModal: () => void }> = ({ openModal }) => {
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
        <div className="iad-page">
            <section className="ear-hero">
                <div className="container">
                    <h1>Infrastructure Architecture & Design</h1>
                    <p>Building Resilient, Scalable, and Future-Ready Foundations for Enterprise IT</p>
                </div>
            </section>

            <section ref={el => sectionsRef.current[0] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Overview</h2>
                    <p>Modern enterprises depend on robust infrastructure to enable agility, reliability, and security — yet many face fragmented systems, legacy dependencies, and scalability challenges.</p>
                    <p>Chavan’s Infrastructure Architecture & Design service helps organizations establish a unified, standards-based foundation built for performance and long-term adaptability. Grounded in TOGAF, ITIL, and leading cloud reference models, our approach bridges on-premises, cloud, and hybrid environments to support digital modernization and enterprise growth.</p>
                </div>
            </section>

            <section ref={el => sectionsRef.current[1] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Our Proven Process</h2>
                    <div className="iad-process">
                        <div className="iad-process-item">
                            <div className="iad-process-phase">1</div>
                            <h3>Assessment & Discovery</h3>
                            <ul>
                                <li>Conduct a full inventory of infrastructure assets and dependencies.</li>
                                <li>Facilitate business and technical alignment workshops.</li>
                                <li>Assess capacity, performance, and scalability gaps.</li>
                                <li>Benchmark existing architecture against TOGAF and industry best practices.</li>
                            </ul>
                        </div>
                        <div className="iad-process-item">
                            <div className="iad-process-phase">2</div>
                            <h3>Design & Blueprinting</h3>
                             <ul>
                                <li>Develop logical and physical architecture models.</li>
                                <li>Design network, compute, and storage frameworks.</li>
                                <li>Define multi-cloud, hybrid, and edge integration strategies.</li>
                                <li>Incorporate zero-trust security, identity, and monitoring frameworks.</li>
                            </ul>
                        </div>
                        <div className="iad-process-item">
                            <div className="iad-process-phase">3</div>
                            <h3>Validation & Assurance</h3>
                            <ul>
                                <li>Conduct design walkthroughs with stakeholders.</li>
                                <li>Validate scalability, resilience, cost, and compliance readiness.</li>
                                <li>Identify risks and develop mitigation strategies.</li>
                                <li>Deliver a reference implementation and deployment roadmap.</li>
                            </ul>
                        </div>
                        <div className="iad-process-item">
                            <div className="iad-process-phase">4</div>
                            <h3>Transition & Governance</h3>
                             <ul>
                                <li>Prepare migration and rollout playbooks.</li>
                                <li>Establish governance and lifecycle management aligned with ITIL v4.</li>
                                <li>Define configuration, change, and capacity management processes.</li>
                                <li>Deliver comprehensive documentation and architecture sign-off.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section ref={el => sectionsRef.current[2] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>What You Get</h2>
                    <div className="ear-deliverables">
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Current-State Assessment Report</h4></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Target-State Architecture Blueprint</h4></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Infrastructure Design Diagrams</h4></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Security & Resiliency Framework</h4></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Implementation & Migration Roadmap</h4></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Governance & Compliance Model</h4></div></div>
                        <div className="ear-deliverable-card"><CheckCircleIcon /><div><h4>Architecture Review & Sign-Off</h4></div></div>
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[3] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Who It’s For</h2>
                    <p style={{marginBottom: "2rem"}}>Our Infrastructure Architecture & Design services help businesses build secure, scalable, and reliable IT systems for daily operations and future growth.</p>
                    <div className="ear-columns">
                        <div className="ear-column"><BuildingOfficeIcon /><p>Companies upgrading or expanding their IT infrastructure.</p></div>
                        <div className="ear-column"><CpuChipIcon /><p>Industries like Manufacturing, Pharma, Healthcare, Retail, and Logistics needing stable, connected systems.</p></div>
                        <div className="ear-column"><UsersIcon /><p>Organizations moving to cloud or hybrid environments.</p></div>
                    </div>
                </div>
            </section>

             <section ref={el => sectionsRef.current[4] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Case Studies, Use Cases & White Papers</h2>
                    <div className="iad-case-studies">
                        <div className="iad-case-card"><h4>Data Center Infrastructure Blueprint</h4><p>A complete guide to designing scalable, efficient, and resilient enterprise data centers that ensure high availability and operational continuity.</p><a href="#">🔗 Data Center Infrastructure Design (White Paper)</a></div>
                        <div className="iad-case-card"><h4>AWS Application Portfolio & Modernization</h4><p>A prescriptive blueprint for assessing, modernizing, and migrating enterprise applications to AWS — improving agility and cost efficiency.</p><a href="#">🔗 AWS Prescriptive Guidance Blueprint</a></div>
                        <div className="iad-case-card"><h4>Cloud Migration for Airlines (Hexaware)</h4><p>Accelerated migration for a global airline through application portfolio assessment, dependency mapping, and risk reduction.</p><a href="#">🔗 Cloud Migration Case Study (Hexaware)</a></div>
                        <div className="iad-case-card"><h4>Enterprise Application Rationalization</h4><p>Strategies for consolidating and optimizing legacy enterprise systems across business units to reduce complexity and improve performance.</p><a href="#">🔗 Enterprise Rationalization Case Studies (CIO Index)</a></div>
                        <div className="iad-case-card"><h4>Landscape and TAD Visuals</h4><p>Visual representations of enterprise landscapes and Technical Architecture Diagrams (TADs) that reveal how structured visibility accelerates modernization.</p><a href="#">🔗 LeanIX Landscape Report & Visual Reference</a></div>
                    </div>
                </div>
            </section>
            
            <section ref={el => sectionsRef.current[5] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>What We Cover</h2>
                     <div className="iad-framework-table">
                        <div className="framework-header">Domain</div>
                        <div className="framework-header">Focus Areas</div>
                        
                        <div className="framework-domain">Compute & Virtualization</div>
                        <div>On-premises, cloud, and hybrid compute design, capacity planning, and automation.</div>

                        <div className="framework-domain">Network & Connectivity</div>
                        <div>WAN, LAN, SD-WAN, VPN, and zero-trust segmentation for secure interconnectivity.</div>

                        <div className="framework-domain">Storage & Data Management</div>
                        <div>Tiered storage, backup, archival, and lifecycle governance strategies.</div>
                        
                        <div className="framework-domain">Cloud & Hybrid Integration</div>
                        <div>Multi-cloud frameworks, landing-zone design, automation, and governance.</div>
                        
                        <div className="framework-domain">Security & Compliance</div>
                        <div>IAM, encryption, logging, and alignment with ISO 27001, NIST, HIPAA.</div>

                        <div className="framework-domain">Resiliency & Continuity</div>
                        <div>Disaster recovery, redundancy, and incident response aligned with ITIL.</div>
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[6] = el} className="ear-section fade-in-section">
                <div className="container">
                    <h2>Architecture Diagram (TAD)</h2>
                    <div className="iad-tad-container">
                        <div className="iad-tad-actor">
                            <UserGroupIcon />
                            <span>End Users</span>
                        </div>
                        <div className="iad-tad-arrow">↓</div>
                        <div className="iad-tad-service">
                            <GlobeIcon />
                            <span>Global Traffic Manager & WAF</span>
                        </div>
                        <div className="iad-tad-arrow">↓</div>

                        <div className="iad-tad-regions">
                            <div className="iad-tad-region">
                                <h4>Primary Region (US East)</h4>
                                <div className="iad-tad-vnet">
                                    <h5>Virtual Network</h5>
                                    <div className="iad-tad-tier">
                                        <h6>Web Tier (VM Scale Set)</h6>
                                        <div className="iad-tad-component-group">
                                            <div className="iad-tad-component"><ServerIcon /><span>Web Server 1</span></div>
                                            <div className="iad-tad-component"><ServerIcon /><span>Web Server 2</span></div>
                                        </div>
                                    </div>
                                    <div className="iad-tad-tier">
                                        <h6>App Tier (App Service)</h6>
                                        <div className="iad-tad-component-group">
                                            <div className="iad-tad-component"><CpuChipIcon /><span>App Logic 1</span></div>
                                            <div className="iad-tad-component"><CpuChipIcon /><span>App Logic 2</span></div>
                                        </div>
                                    </div>
                                    <div className="iad-tad-tier">
                                        <h6>Data Tier (Azure SQL)</h6>
                                        <div className="iad-tad-component-group">
                                            <div className="iad-tad-component"><DatabaseIcon /><span>Primary DB</span></div>
                                            <div className="iad-tad-component"><DatabaseIcon /><span>Read Replica</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="iad-tad-connector">
                                <span>Geo-Replication</span>
                                <span>↔</span>
                            </div>

                            <div className="iad-tad-region">
                                <h4>DR Region (US West)</h4>
                                <div className="iad-tad-vnet">
                                    <h5>Virtual Network</h5>
                                    <div className="iad-tad-tier">
                                        <h6>Web Tier (VM Scale Set)</h6>
                                        <div className="iad-tad-component-group">
                                            <div className="iad-tad-component standby"><ServerIcon /><span>Standby</span></div>
                                        </div>
                                    </div>
                                    <div className="iad-tad-tier">
                                        <h6>App Tier (App Service)</h6>
                                        <div className="iad-tad-component-group">
                                            <div className="iad-tad-component standby"><CpuChipIcon /><span>Standby</span></div>
                                        </div>
                                    </div>
                                    <div className="iad-tad-tier">
                                        <h6>Data Tier (Azure SQL)</h6>
                                        <div className="iad-tad-component-group">
                                            <div className="iad-tad-component standby"><DatabaseIcon /><span>Failover DB</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p style={{marginTop: '1.5rem', color: 'var(--muted)', maxWidth: '800px', margin: '1.5rem auto 0'}}>
                        This is an illustrative diagram of a high-availability, multi-region cloud architecture. Chavans designs robust solutions like this to ensure business continuity, disaster recovery, and global scalability for mission-critical applications.
                    </p>
                </div>
            </section>


            <section ref={el => sectionsRef.current[7] = el} className="ear-cta fade-in-section">
                 <div className="container">
                    <h2>Start Your Infrastructure Journey</h2>
                    <p>Transform your infrastructure into a resilient, scalable, and cloud-ready foundation for your enterprise.</p>
                    <button className="btn" onClick={openModal}>Request a Consultation →</button>
                </div>
            </section>
        </div>
    );
};

export default InfrastructureArchitecturePage;