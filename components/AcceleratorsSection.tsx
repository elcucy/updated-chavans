import React from 'react';

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a6 6 0 01-7.38 5.84m2.56-5.84a6 6 0 01 7.38-5.84m-5.84 2.56a6 6 0 015.84-7.38m-5.84 4.82v4.82" />
    </svg>
);

const CloudIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.5 4.5 0 002.25 15z" />
    </svg>
);

const DataIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" />
    </svg>
);


const accelerators = [
    { 
        icon: <RocketIcon />, 
        title: "AI Launchpad", 
        desc: "Deploy production-ready AI/ML models in weeks, not months, using our MLOps framework." 
    },
    { 
        icon: <CloudIcon />, 
        title: "Cloud Foundation Kit", 
        desc: "Automated IaC templates for secure, compliant, and cost-optimized cloud landing zones." 
    },
    { 
        icon: <DataIcon />, 
        title: "Data Mesh Fabric", 
        desc: "A decentralized data architecture for scalable analytics, real-time insights, and BI." 
    }
];

const AcceleratorsSection: React.FC = () => {
  return (
    <section id="accelerators">
      <h2>Accelerators</h2>
      <p className="lead" style={{color:'var(--muted)'}}>Leverage our pre-built frameworks and solutions to fast-track your innovation.</p>
      
      <div className="accelerator-grid">
        <div className="accelerator-visual">
          <img src="https://images.unsplash.com/photo-1554494541-33959c9417d4?auto=format&fit=crop&w=800&q=60" alt="Abstract technology blueprint representing business accelerators" />
        </div>
        <div className="accelerator-content">
          {accelerators.map((accelerator, index) => (
            <div className="accelerator-item" key={index}>
              <div className="accelerator-icon">
                {accelerator.icon}
              </div>
              <div>
                <h3>{accelerator.title}</h3>
                <p>{accelerator.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcceleratorsSection;