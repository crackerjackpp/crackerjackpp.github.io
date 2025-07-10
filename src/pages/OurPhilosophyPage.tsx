import React from 'react';

const PhilosophySection: React.FC<{
  title: string;
  subtitle: string;
  imageUrl: string;
  children: React.ReactNode;
  imageLeft?: boolean;
}> = ({ title, subtitle, imageUrl, children, imageLeft = false }) => {
  const imageOrder = imageLeft ? 'md:order-1' : 'md:order-2';
  const contentOrder = imageLeft ? 'md:order-2' : 'md:order-1';
  
  return (
    <div className="py-12 md:py-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className={`order-2 ${contentOrder}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
          <p className="mt-4 text-xl font-semibold text-secondary">{subtitle}</p>
          <div className="mt-6 text-lg text-slate-600 space-y-4">{children}</div>
        </div>
        <div className={`order-1 ${imageOrder}`}>
          <img src={imageUrl} alt={title} className="rounded-lg shadow-xl" />
        </div>
      </div>
    </div>
  );
};

const OurPhilosophyPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="bg-slate-100 py-16 md:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary">Our Philosophy</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-600">
            Our approach is built on three core pillars that we believe are fundamental to building resilient, high-growth organizations.
          </p>
        </div>
      </section>

      {/* Philosophy Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 divide-y divide-slate-200">
        <PhilosophySection
          title="Access the Best"
          subtitle="Link talent, practices, and operations to strategic goals."
          imageUrl="https://picsum.photos/600/500?random=5"
          imageLeft={true}
        >
          <p>
            Excellence is not an accident. It's the result of intentionally connecting every part of your people strategy to your overarching business objectives. We believe that securing the best talent is only the beginning. True success comes from implementing the best practices and streamlining operations to create an ecosystem where that talent can thrive and drive results.
          </p>
        </PhilosophySection>

        <PhilosophySection
          title="Invest in the Best"
          subtitle="Develop human capital to build resilience, retention, and loyalty."
          imageUrl="https://picsum.photos/600/500?random=6"
        >
          <p>
            Your people are your most significant appreciating asset. Investing in their growth and development is the most powerful lever for building a resilient and loyal workforce. By prioritizing human capital, you create a culture of continuous improvement and mutual commitment, leading to higher retention rates and a team that is equipped to navigate any challenge.
          </p>
        </PhilosophySection>

        <PhilosophySection
          title="Coach for Success"
          subtitle="Unlock potential, engagement, and retention through coaching."
          imageUrl="https://picsum.photos/600/500?random=7"
          imageLeft={true}
        >
          <p>
            Coaching is a transformative tool that unlocks latent potential in individuals and teams. It goes beyond traditional training by fostering self-discovery, accountability, and a proactive mindset. A strong coaching culture is directly linked to higher employee engagement, improved performance, and increased retention, creating a virtuous cycle of success.
          </p>
        </PhilosophySection>
      </div>
    </div>
  );
};

export default OurPhilosophyPage;