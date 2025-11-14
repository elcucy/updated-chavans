import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import QuickFeatureBar from './components/Testimonials'; // Repurposed for the feature bar
import AISection from './components/WhyChooseUs'; // Repurposed for AI section
import InfrastructureSection from './components/FeaturedSolutions'; // Repurposed for Infrastructure
import SecuritySection from './components/InnovationLab'; // Repurposed for Security
import ServicesSection from './components/Services'; // Repurposed for Services section
import AcceleratorsSection from './components/AcceleratorsSection'; // New section
import ResourcesSection from './components/LearningHub'; // Repurposed for Resources section
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import EdgeAdoptionRoadmap from './components/EdgeAdoptionRoadmap';
import InfrastructureArchitecturePage from './components/InfrastructureArchitecturePage';
import InfrastructureManagedServicesPage from './components/InfrastructureManagedServicesPage';

// --- AI Use Cases Page Component ---

const aiUseCasesData = [
    { mainCategory: "Customize AI Models", useCase: "AI for Marketing", provider: "AWS", url: "https://aws.amazon.com/bedrock/blueocean/", linkText: "BlueOceanAI – Amazon Bedrock" },
    { mainCategory: "Customize AI Models", useCase: "AI for Customer Engagement", provider: "AWS", url: "https://aws.amazon.com/contact-center/doordash/", linkText: "DoorDash – Amazon Bedrock Contact Center" },
    { mainCategory: "Customize AI Models", useCase: "AI for Sales", provider: "AWS", url: "https://aws.amazon.com/bedrock/showpad/", linkText: "Showpad – Bedrock Sales Enablement" },
    { mainCategory: "Customize AI Models", useCase: "AI for Marketing & Personalization", provider: "AWS", url: "https://aws.amazon.com/personalize/", linkText: "AWS Personalization Use Case" },
    { mainCategory: "Customize AI Models", useCase: "AI for Education", provider: "Microsoft (Azure)", url: "https://customers.microsoft.com/en-us/story/1677700085839954752-universidade-de-lisboa-higher-education-azure-openai", linkText: "Azure OpenAI – Higher Education Personalization" },
    { mainCategory: "Customize AI Models", useCase: "AI for Financial Services (FSI)", provider: "Google Cloud", url: "https://cloud.google.com/solutions/financial-services-gen-ai", linkText: "Generative AI in Financial Services" },
    { mainCategory: "Build Your Own AI Models", useCase: "AI for Predictive Insights", provider: "Google Cloud", url: "https://cloud.google.com/customers/otto", linkText: "OTTO – Vertex AI Forecasting" },
    { mainCategory: "Build Your Own AI Models", useCase: "AI for Operations Optimization", provider: "AWS", url: "https://aws.amazon.com/solutions/case-studies/invista-data-lake-and-machine-learning/", linkText: "INVISTA – Data Lake and ML" },
    { mainCategory: "Build Your Own AI Models", useCase: "AI for Process Automation", provider: "Google Cloud", url: "https://cloud.google.com/customers/staples", linkText: "Staple AI – Workflow Automation" },
    { mainCategory: "Build Your Own AI Models", useCase: "AI for Supply Chain", provider: "AWS", url: "https://aws.amazon.com/intelligent-supply-chain/", linkText: "AWS Intelligent Supply Chain" },
    { mainCategory: "Build Your Own AI Models", useCase: "AI Model Lifecycle Automation", provider: "AWS", url: "https://aws.amazon.com/bedrock/propulse-lab/", linkText: "Propulse Lab – MLOps with Bedrock" },
    { mainCategory: "Build Your Own AI Models", useCase: "AI Workflow Automation", provider: "Google Cloud", url: "https://cloud.google.com/customers/aes", linkText: "AES – AI Workflow Automation" },
    { mainCategory: "AI Platforms & Tools", useCase: "AI for Content Generation", provider: "Microsoft (Azure)", url: "https://customers.microsoft.com/en-us/story/1673836701831102941-azure-openai-marketing-content-creation", linkText: "Azure OpenAI – Marketing Content Creation" },
    { mainCategory: "AI Platforms & Tools", useCase: "AI Data Management", provider: "AWS", url: "https://aws.amazon.com/solutions/case-studies/invista-ai-ready-data/", linkText: "INVISTA – AI-Ready Data Management" },
    { mainCategory: "AI Platforms & Tools", useCase: "AI Security & Trust Layers", provider: "Microsoft", url: "https://www.microsoft.com/en-us/ai/responsible-ai", linkText: "Microsoft Responsible AI" },
    { mainCategory: "AI Learning & Partnerships", useCase: "AI for Healthcare", provider: "Google Cloud", url: "https://cloud.google.com/customers/doc-ai", linkText: "doc.ai – Healthcare AI Modeling" },
    { mainCategory: "AI Learning & Partnerships", useCase: "AI for Government & Public Sector", provider: "Google Cloud", url: "https://cloud.google.com/customers/telefonica", linkText: "Telefónica – AI Modernization" },
    { mainCategory: "AI Learning & Partnerships", useCase: "AI for Research & Innovation", provider: "Microsoft", url: "https://www.microsoft.com/en-us/research/project/medical-superintelligence/", linkText: "Microsoft Medical Superintelligence" },
    { mainCategory: "AI Learning & Partnerships", useCase: "AI for Enterprise", provider: "AWS", url: "https://aws.amazon.com/blogs/machine-learning/tapestry-builds-a-generative-ai-solution-for-internal-knowledge-search-using-amazon-sagemaker-and-amazon-opensearch-service/", linkText: "Tapestry – Internal Knowledge AI" },
    { mainCategory: "AI Learning & Partnerships", useCase: "AI Evaluation Tools", provider: "Microsoft", url: "https://customers.microsoft.com/en-us/story/1749103233215286558-hero-health-health-provider-azure-openai-service", linkText: "Hero AI – Evaluation Frameworks" }
];

const categories = ['All', ...Array.from(new Set(aiUseCasesData.map(item => item.mainCategory)))];
const providers = ['All', ...Array.from(new Set(aiUseCasesData.map(item => item.provider)))];

const AiUseCasesPage: React.FC = () => {
    const [filters, setFilters] = useState({ category: 'All', provider: 'All' });

    const handleFilterChange = (filterType: 'category' | 'provider', value: string) => {
        setFilters(prev => ({ ...prev, [filterType]: value }));
    };

    const filteredCases = aiUseCasesData.filter(item => {
        const categoryMatch = filters.category === 'All' || item.mainCategory === filters.category;
        const providerMatch = filters.provider === 'All' || item.provider === filters.provider;
        return categoryMatch && providerMatch;
    });

    return (
        <section id="ai-use-cases" className="container" style={{paddingTop: '40px', paddingBottom: '40px', minHeight: 'calc(100vh - 200px)'}}>
            <div className="page-header">
                <h2>AI Use Cases & Case Studies</h2>
                <p className="lead" style={{color: 'var(--muted)'}}>Explore real-world applications of AI across industries.</p>
            </div>

            <div className="filter-bar">
                <div className="filter-group">
                    <strong>Category:</strong>
                    {categories.map(cat => (
                        <button key={cat} className={`filter-btn ${filters.category === cat ? 'active' : ''}`} onClick={() => handleFilterChange('category', cat)}>{cat}</button>
                    ))}
                </div>
                 <div className="filter-group">
                    <strong>Provider:</strong>
                    {providers.map(prov => (
                        <button key={prov} className={`filter-btn ${filters.provider === prov ? 'active' : ''}`} onClick={() => handleFilterChange('provider', prov)}>{prov}</button>
                    ))}
                </div>
            </div>

            <div className="cards use-case-cards">
                {filteredCases.map((item, index) => (
                    <a href={item.url} target="_blank" rel="noopener noreferrer" className="card use-case-card" key={index}>
                        <h3>{item.linkText}</h3>
                        <p>{item.useCase}</p>
                        <span className="provider-tag">{item.provider}</span>
                    </a>
                ))}
                {filteredCases.length === 0 && <p>No matching case studies found for the selected filters.</p>}
            </div>
        </section>
    );
};


const App: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  const renderPage = () => {
    switch(currentPage) {
        case 'home':
            return (
                <main>
                    <Hero openModal={openModal} />
                    <QuickFeatureBar />
                    <AISection />
                    <InfrastructureSection />
                    <SecuritySection />
                    <ServicesSection />
                    <AcceleratorsSection />
                    <ResourcesSection />
                </main>
            );
        case 'ai-use-cases':
            return <main><AiUseCasesPage /></main>;
        case 'edge-adoption-roadmap':
            return <main><EdgeAdoptionRoadmap openModal={openModal}/></main>;
        case 'infra-arch-design':
            return <main><InfrastructureArchitecturePage openModal={openModal}/></main>;
        case 'infrastructure':
            return <main><InfrastructureManagedServicesPage openModal={openModal} /></main>;
        default:
            return <main>Page not found</main>
    }
  }

  return (
    <>
      <Header openModal={openModal} navigateTo={setCurrentPage} />
      {renderPage()}
      <Footer />
      <ContactModal isOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default App;