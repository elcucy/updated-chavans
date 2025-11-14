import React, { useState, useEffect, useRef } from 'react';

// --- Futuristic Visual Components --- //

const DataSphere: React.FC = () => (
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="data-sphere">
        <style>
            {`
            .data-sphere .orbit { animation: rotate 20s linear infinite; transform-origin: center; }
            .data-sphere .orbit-2 { animation-duration: 30s; }
            .data-sphere .orbit-3 { animation-duration: 40s; }
            .data-sphere .dot { animation: pulse 2s ease-in-out infinite alternate; }
            .data-sphere .dot-2 { animation-delay: -1s; }
            .data-sphere .dot-3 { animation-delay: -0.5s; }
            @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes pulse { from { r: 2; opacity: 0.7; } to { r: 4; opacity: 1; } }
            `}
        </style>
        <defs>
            <radialGradient id="grad-glow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{stopColor: 'rgba(59, 130, 246, 0.5)', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: 'rgba(59, 130, 246, 0)', stopOpacity: 1}} />
            </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="150" fill="url(#grad-glow)" />
        <g className="orbits">
            <g className="orbit orbit-1">
                <circle cx="200" cy="200" r="100" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
                <circle className="dot dot-1" cx="300" cy="200" r="3" fill="#3b82f6" />
            </g>
            <g className="orbit orbit-2" style={{transform: "rotate(60deg)"}}>
                <ellipse cx="200" cy="200" rx="120" ry="120" fill="none" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" transform="scale(1 0.5)"/>
                <circle className="dot dot-2" cx="320" cy="200" r="3" fill="#8b5cf6" />
            </g>
            <g className="orbit orbit-3" style={{transform: "rotate(-45deg)"}}>
                <ellipse cx="200" cy="200" rx="140" ry="140" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="0.5" transform="scale(1 0.7)"/>
                <circle className="dot dot-3" cx="60" cy="200" r="2.5" fill="#3b82f6" />
            </g>
        </g>
    </svg>
);

const BackgroundGrid: React.FC = () => (
    <div className="background-grid-container" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
                    <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="0.5"/>
                </pattern>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <rect width="40" height="40" fill="url(#smallGrid)"/>
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    </div>
);


// --- Data for the page --- //

const whatYouGetData = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
        title: 'Predictable Uptime',
        description: 'Proactive monitoring, automated alerts, and structured incident response ensure applications stay available when your business needs them most.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        title: 'Controlled Spending',
        description: 'Deep cost analytics and optimization practices remove wasteful spend and deliver predictable, well-managed cloud budgets.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
        title: 'Faster Recovery',
        description: 'Comprehensive backup, disaster recovery preparation, and rapid response workflows minimize disruption and accelerate restoration.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" /></svg>,
        title: 'Ongoing Maturity',
        description: 'Quarterly well-architected reviews keep your architecture aligned with evolving best practices, security requirements, and modernization patterns.'
    }
];

const whoItIsForData = [
    { title: 'Teams Focused on Innovation', description: 'If your engineering team spends time firefighting issues instead of building new features, managed services restores that lost productivity.' },
    { title: 'Growing and Scaling Businesses', description: 'Organizations that require stable, reliable, cost-efficient cloud operations managed by experts—not a patchwork of ad-hoc fixes—benefit from our structured, enterprise-grade approach.' }
];

const whatWeCoverData = [
  { title: "Subscription Management", content: "We oversee the complete subscription lifecycle across all major cloud providers—AWS, Azure, and Google Cloud. This includes provisioning new subscriptions, validating entitlements, handling renewals, performing transfers, and securely deactivating unused environments. Through enforced naming conventions, tagging frameworks, cost groups, and compliance baselines, we ensure your cloud estate remains organized, secure, and audit-ready. Our operations team manages all vendor escalations and administrative requests, eliminating the risk of billing errors or misconfigured subscription setups.", value: "Centralized oversight and simplified billing." },
  { title: "IAM User Management", content: "Identity is the first line of defense in cloud security. We design and maintain a strict least-privilege access model using role-based access control (RBAC), automated access reviews, multi-factor enforcement, and continuous policy tightening. Every identity—users, groups, service principals, workloads, and roles—is monitored to ensure permissions are always intentional, secure, and compliant. This dramatically reduces your exposure to unauthorized access, privilege misuse, and audit failures.", value: "Reduced security risk and streamlined user access." },
  { title: "Billing & Cost Optimization", content: "Our FinOps approach brings full transparency and control to cloud spending. We validate every billing line item for accuracy, correlate usage with actual consumption, and escalate disputes with cloud vendors when required. By applying commitment discounts, workload rightsizing, storage optimization, and cross-environment analysis, we eliminate overspend and unpredictable billing spikes. Leadership gains access to clear dashboards, showback reports, and actionable financial insights, enabling responsible, data-driven budgeting.", value: "Significant cost savings and improved budget predictability." },
  { title: "Quota & Limit Management", content: "Service limits can block deployments, autoscaling events, and provisioning workflows. We track quota thresholds across compute, networks, storage, and managed services, ensuring no workload is ever disrupted due to capacity restrictions. When limits approach critical levels, we immediately raise vendor requests—complete with justification, approval tracking, and follow-up—ensuring uninterrupted growth and scalability.", value: "Uninterrupted service availability and seamless scalability." },
  { title: "24×7 Technical Support Access", content: "We handle the full lifecycle of support engagements with AWS, Azure, and Google Cloud. From logging support cases to performing diagnostics, coordinating escalations, and validating fixes, our team ensures issues are resolved quickly and effectively. This saves your engineers countless hours and ensures the right cloud providers are engaged when needed.", value: "Faster problem resolution and minimized downtime." },
  { title: "Case Prioritization & Severity Management", content: "Not every incident requires the same urgency. We assign severity based on actual business impact, escalating critical issues immediately while managing lower-priority cases with structured timelines. This keeps your operations efficient, reduces downtime, and ensures that teams always focus on what matters most.", value: "Efficient support ticket handling and clear communication." },
  { title: "Asset & Resource Optimization", content: "We continuously monitor resource utilization to identify idle VMs, misconfigured services, unused disks, excessive autoscaling, or oversized compute instances. By right-sizing your infrastructure, cleaning up stale assets, and enforcing lifecycle management, we help reduce waste, lower cost, and keep your cloud architecture clean and manageable.", value: "Reduced cloud waste and improved resource efficiency." },
  { title: "Well-Architected Reviews (Quarterly)", content: "Each quarter, we benchmark your cloud against leading industry frameworks such as AWS Well-Architected, Azure CAF, and Google Cloud Architecture Framework. We uncover risks in security, operations, performance, reliability, cost, and sustainability. From these assessments, we create improvement roadmaps and modernize your environment continuously—not just during major projects.", value: "Ongoing architectural improvement and risk reduction." },
  { title: "Reserved Instance & Savings Plan Optimization", content: "We evaluate long-term usage patterns to build smart commitment strategies that maximize discount opportunities. Whether it is AWS Savings Plans, Azure Reservations, or GCP Committed Use Discounts, we tailor cost commitments that balance savings with flexibility. The result: lower costs without losing the ability to scale.", value: "Maximized ROI on cloud commitments." },
  { title: "Cost Allocation & Showback", content: "Cost transparency drives accountability. We build cost allocation models using tagging standards, metadata grouping, dashboards, and reporting layers. This allows business units, application teams, and finance leaders to understand where money is spent and how to manage it effectively.", value: "Full financial transparency and accountability." },
  { title: "Real-Time Cost Monitoring", content: "With hourly and daily insights into cloud spending, we detect anomalies the moment they occur. When unexpected spikes or usage breaks budgets, alerts are triggered immediately—allowing corrective action before costs spiral out of control.", value: "Proactive cost control and prevention of budget overruns." },
  { title: "Usage Forecasting & Budget Planning", content: "Using historical patterns and predictive modeling, we forecast resource usage and future cloud spending. This ensures that upcoming projects, scaling events, and seasonal workloads are planned accurately—without budget surprises or last-minute resource issues.", value: "Data-driven budgeting and financial planning." },
  { title: "Database Monitoring (Native Tools)", content: "We track database availability, query performance, replication delays, storage consumption, and failover readiness using cloud-native monitoring tools. Early detection prevents performance degradation, data risk, or unplanned downtime.", value: "Improved database reliability and performance." },
  { title: "Application Performance Monitoring (Native Tools)", content: "We monitor application latency, throughput, error rates, and dependency health using native observability platforms like CloudWatch, Azure Monitor, Application Insights, and Google Cloud Operations Suite. Issues are flagged early to maintain consistent, high-quality user experience.", value: "Enhanced application stability and user satisfaction." },
  { title: "Status Reporting (Weekly / Monthly)", content: "Our reports offer deep insights into cloud health, incidents, uptime, cost posture, resource efficiency, security gaps, and operational maturity. Executives and engineering teams gain a clear view of progress, risks, and recommended actions.", value: "Clear visibility into operational health and value delivered." },
  { title: "Incident Management", content: "We handle incident detection, triage, escalation, communication, mitigation, and root cause analysis. After recovery, we implement preventive measures, improving your environment with every incident handled.", value: "Minimized business impact from service incidents." },
  { title: "Security Recommendations", content: "Continuous security evaluation identifies misconfigurations, vulnerabilities, policy gaps, and best-practice deviations. We provide prioritized remediation plans aligned with industry frameworks, enhancing your long-term security posture.", value: "Strengthened security posture and reduced attack surface." },
  { title: "Backup & Restore Assurance", content: "Our team ensures backups are correctly configured, successfully executed, and recoverable. Regular restore tests validate your disaster readiness and guarantee data protection in scenarios of corruption, deletion, or infrastructure failure.", value: "Verified data recoverability and business continuity." },
  { title: "Database Backup (Native Tools)", content: "We configure automated database backups using native cloud services, validating them routinely against RPO/RTO objectives. All backup plans are monitored to ensure full recoverability.", value: "Reliable and compliant data protection." },
  { title: "Change Management", content: "Every cloud change—whether configuration, deployment, or scaling event—goes through structured governance including approvals, scheduling, rollback planning, and post-validation. This ensures stability and reduces operational risk.", value: "Stable and predictable production environment." },
  { title: "Ticketing System Integration", content: "We integrate with enterprise ticketing platforms to streamline all cloud-related requests. This centralized workflow ensures that changes, incidents, and service requests are tracked, audited, and completed transparently.", value: "Streamlined operational workflows and audit trails." },
];

const allPricingServices = [
    { id: 'sub-mgmt', name: 'Subscription Management' }, { id: 'iam', name: 'IAM User Management' }, { id: 'billing', name: 'Billing related issue' }, { id: 'quota', name: 'Increase quota limit' }, { id: 'support', name: 'Access to 24X7 Microsoft Technical Support - Email, Phone & Chat' }, { id: 'severity', name: 'Case Severity and Response Time- (Critical - 1hr, Moderate -4hrs, Minimal -8hrs)' }, { id: 'assets', name: 'Identify unused assets and over-provisioned VMs' }, { id: 'war', name: 'Well-architected Reviews (Quarterly)' }, { id: 'ri', name: 'Identify RI and Savings Plan opportunities' }, { id: 'cost-alloc', name: 'Allocate cost and show back spend across BUs' }, { id: 'cost-mon', name: 'Monitor costs hourly or daily & stay ahead of budget breaches' }, { id: 'forecast', name: 'Forecast usage trends and set smarter budgets' }, { id: 'db-mon', name: 'Database monitoring - Native Tool' }, { id: 'apm', name: 'App Performance monitoring - Native Tool' }, { id: 'reports', name: 'Monthly/Weekly Status-quo Reports' }, { id: 'incident', name: 'Incident management' }, { id: 'security', name: 'Security Recommendation' }, { id: 'backup', name: 'Backup & Restore' }, { id: 'db-backup', name: 'Database Backup - native tool' }, { id: 'change-mgmt', name: 'Change management' }, { id: 'ticketing', name: 'Ticketing System' },
];

const pricingTiers = [
    { name: 'Standard', price: '10%', description: 'Charged at % of MRR', isPopular: false, includedServices: new Set(['sub-mgmt', 'iam', 'billing', 'quota', 'support', 'severity', 'assets', 'war']) },
    { name: 'Premium', price: '13%', description: 'Charged at % of MRR', isPopular: false, includedServices: new Set(['sub-mgmt', 'iam', 'billing', 'quota', 'support', 'severity', 'assets', 'war', 'ri', 'cost-alloc', 'cost-mon', 'forecast', 'db-mon']) },
    { name: 'Premium+', price: '15%', description: 'Charged at % of MRR', isPopular: true, includedServices: new Set(['sub-mgmt', 'iam', 'billing', 'quota', 'support', 'severity', 'assets', 'war', 'ri', 'cost-alloc', 'cost-mon', 'forecast', 'db-mon', 'apm', 'reports', 'incident', 'security', 'backup', 'db-backup']) },
    { name: 'Enterprise', price: '17%', description: 'Charged at % of MRR', isPopular: false, includedServices: new Set(allPricingServices.map(s => s.id)) }
];

const caseStudiesData = [
    { logo: 'AWS', title: 'Reference Implementations', description: "Validated architectures and deployment patterns for security, analytics, DevOps automation, networking, and more." },
    { logo: 'Microsoft', title: 'Cloud Architecture Center', description: "Comprehensive architectural blueprints backed by Microsoft’s Cloud Adoption Framework and Well-Architected model." },
    { logo: 'Google Cloud', title: 'Architecture Framework', description: "Guidance covering reliability, security, cost optimization, and operational excellence for modern cloud workloads." }
];

const CheckIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="16" height="16" aria-hidden="true">
        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.052-.143z" clipRule="evenodd" />
    </svg>
);


// --- Main Component --- //

const InfrastructureManagedServicesPage: React.FC<{ openModal: () => void }> = ({ openModal }) => {
    const [openAccordion, setOpenAccordion] = useState<string | null>(null);
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
            }, { threshold: 0.1 }
        );
        const currentSections = sectionsRef.current.filter(el => el !== null);
        currentSections.forEach((section) => { if (section) observer.observe(section); });
        return () => { currentSections.forEach((section) => { if (section) observer.unobserve(section); }); };
    }, []);

    const toggleAccordion = (title: string) => {
        setOpenAccordion(openAccordion === title ? null : title);
    };

    // Card hover effect for glassmorphism
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const cards = document.querySelectorAll('.ims-glass-card');
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
                (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
            }
        };
        document.addEventListener('mousemove', handleMouseMove);
        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="ims-futuristic-page">
            <header className="ims-hero">
                <div className="data-sphere-container">
                    <DataSphere />
                </div>
                <div className="ims-hero-content">
                    <h1>Infrastructure Managed Services</h1>
                    <p>Chavans Infrastructure Managed Services keeps your cloud infrastructure continuously healthy, secure, operational, and fully optimized 24×7. Our cloud engineers proactively monitor, protect, and support your environment, ensuring seamless performance and reliability—so your teams can innovate without being slowed down by infrastructure operations, break/fix cycles, or administrative overhead.</p>
                </div>
            </header>
            
            <section ref={el => sectionsRef.current[0] = el} className="fade-in-section">
                <div className="container">
                    <h2 className="section-title-header">Why It Matters</h2>
                    <p className="section-summary">Most organizations face a constant stream of infrastructure noise—unexpected outages, service quota limits, budget overruns, elevated latency, access issues, and uncontrolled cloud sprawl. These disruptions drain engineering time, stall roadmaps, and inflate operational cost. With managed services, your cloud transforms from a reactive firefighting zone into a stable, predictable, well-governed operating platform. You gain consistent performance, controlled spending, strong governance, and complete operational confidence.</p>
                </div>
            </section>

            <section ref={el => sectionsRef.current[1] = el} className="fade-in-section">
                <div className="container">
                     <BackgroundGrid />
                    <h2 className="section-title-header">What You Get</h2>
                     <p className="section-summary">Chavans provides a continuously operated, enterprise-grade infrastructure foundation built for stability, performance, and cost efficiency. Your cloud is monitored, governed, secured, and optimized at all times—without needing to expand internal operations staff.</p>
                    <div className="ims-grid grid-4">
                        {whatYouGetData.map(item => (
                            <div key={item.title} className="ims-glass-card">
                                {item.icon}
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

             <section ref={el => sectionsRef.current[2] = el} className="fade-in-section">
                <div className="container">
                    <h2 className="section-title-header">What We Cover</h2>
                    <div className="ims-accordion-grid">
                        {whatWeCoverData.map(item => (
                            <div className="ims-accordion-item" key={item.title} aria-expanded={openAccordion === item.title}>
                                <button className="ims-accordion-button" onClick={() => toggleAccordion(item.title)} aria-controls={`content-${item.title}`}>
                                    <span>{item.title}</span>
                                    <span className="ims-accordion-icon">+</span>
                                </button>
                                {openAccordion === item.title && (
                                    <div className="ims-accordion-content" id={`content-${item.title}`}>
                                        <p>{item.content}</p>
                                        <p><strong>Value Delivered:</strong> {item.value}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[3] = el} className="fade-in-section">
                <div className="container">
                    <h2 className="section-title-header">Who It’s For</h2>
                    <div className="ims-grid grid-2">
                        {whoItIsForData.map(item => (
                            <div key={item.title} className="ims-glass-card">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section ref={el => sectionsRef.current[4] = el} className="fade-in-section ims-pricing-section">
                <div className="container">
                    <h2 className="section-title-header">Managed Services Tiers</h2>
                    <div className="pricing-grid">
                        {pricingTiers.map(tier => (
                            <div key={tier.name} className={`pricing-card ${tier.isPopular ? 'popular' : ''}`}>
                                {tier.isPopular && <div className="popular-badge">MOST POPULAR</div>}
                                <div className="card-header">
                                    <h2>{tier.name}</h2>
                                    <div className="price">{tier.price}</div>
                                    <p className="price-desc">{tier.description}</p>
                                </div>
                                <div className="card-body">
                                    <h3>INCLUDED SERVICES</h3>
                                    <ul className="service-list">
                                        {allPricingServices.map(service => {
                                            const isIncluded = tier.includedServices.has(service.id);
                                            return (
                                                <li key={service.id} className={isIncluded ? 'included' : 'excluded'}>
                                                    {isIncluded && <CheckIcon />}
                                                    <span>{service.name}</span>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[5] = el} className="fade-in-section">
                <div className="container">
                    <h2 className="section-title-header">Case Studies / References</h2>
                    <div className="ims-grid grid-3">
                        {caseStudiesData.map(item => (
                             <div key={item.title} className="ims-glass-card">
                                <h3 style={{fontSize: '1.5rem', fontWeight: '800'}}>{item.logo}</h3>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section ref={el => sectionsRef.current[6] = el} className="fade-in-section" style={{paddingBottom: 0}}>
                <div className="container">
                    <div className="ims-discover-section">
                        <h2 className="section-title-header" style={{fontSize: '2rem'}}>Discover More in Managed Services</h2>
                        <p className="section-summary" style={{marginBottom: 0}}>Explore additional Managed Services offerings and the broader operational capabilities available from Chavans.</p>
                    </div>
                </div>
            </section>

            <section ref={el => sectionsRef.current[7] = el} className="ims-final-cta-section fade-in-section">
                <div className="container">
                    <h2 className="section-title-header">Start Your Journey</h2>
                    <p className="section-summary">Let our experts manage the complexity of cloud operations, improve reliability, reduce costs, and strengthen your security posture—while your teams focus on building what matters.</p>
                    <div className="ims-cta-buttons">
                        <button className="btn primary" onClick={() => window.open('https://chavans.in/contact', '_blank')}>Start Your Journey</button>
                        <button className="btn secondary" onClick={openModal}>Request a Consultation</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default InfrastructureManagedServicesPage;