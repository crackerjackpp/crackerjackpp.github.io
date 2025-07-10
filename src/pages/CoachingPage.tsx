import React from 'react';

const CoachingPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <p className="text-base font-semibold text-secondary uppercase tracking-wide">Our Services</p>
            <h1 className="mt-2 text-4xl font-extrabold text-primary sm:text-5xl">Leadership & Team Coaching</h1>
            <p className="mt-4 text-xl text-slate-600">
              Unlock the full potential of your leaders and teams to drive engagement, innovation, and performance.
            </p>
          </div>

          <div className="mt-16 prose prose-lg prose-indigo mx-auto text-slate-600">
            <p>
              Great leadership and cohesive teams are the ultimate competitive advantages. In a world of constant change, the ability to lead with vision, inspire action, and foster collaboration is more critical than ever. Our Leadership & Team Coaching services are designed to unlock this potential within your organization, transforming good managers into great leaders and groups of individuals into high-performing teams.
            </p>
            <p>
              We utilize proven coaching methodologies and a personalized approach to help your key talent develop self-awareness, enhance their skills, and overcome challenges. Whether it's one-on-one executive coaching or a workshop for an entire team, our goal is to create lasting behavioral change that translates into tangible business results.
            </p>

            <h2>Our Coaching Programs</h2>
            <ul>
              <li><strong>Executive Coaching:</strong> A confidential, one-on-one partnership to help senior leaders navigate complexity, enhance their strategic impact, and lead with greater confidence.</li>
              <li><strong>Leadership Development:</strong> Programs for emerging and mid-level leaders focused on building core competencies like communication, delegation, and strategic thinking.</li>
              <li><strong>Team Coaching & Effectiveness:</strong> Facilitated sessions to improve team communication, collaboration, and alignment, helping teams achieve their collective goals.</li>
            </ul>

            <h2>The Transformative Power of Coaching</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoachingPage;