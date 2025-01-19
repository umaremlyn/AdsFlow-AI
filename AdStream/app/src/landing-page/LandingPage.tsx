import Hero from './components/Hero';
import Clients from './components/Clients';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

interface Feature {
  title: string;
  description: string;
  icon: string;
}

export default function LandingPage() {
  return (
    <div className="bg-white dark:text-white dark:bg-gray-900">
      <main className="isolate">
        {/* Hero Section */}
        <Hero
          title="Revolutionize Your Marketing with AdStream AI"
          subtitle="Effortlessly create, optimize, and deploy AI-driven ad campaigns in minutes."
          callToAction="Get Started Now"
          callToActionLink="/signup"
          image="/assets/hero-image.png" // Replace with your actual image path
        />

        {/* Clients Section */}
        <h2>"Trusted by Top Brands"</h2>
        <Clients
          logos={[
            "/assets/logo1.png",
            "/assets/logo2.png",
            "/assets/logo3.png",
            "/assets/logo4.png",
          ]} // Replace with actual logo paths
        />

        {/* Features Section */}
        <h2>"What Makes AdStream AI Stand Out?"</h2>
        <Features
          features={[
            {
              name: "AI-Powered Campaign Creation",
              description: "Generate impactful ad campaigns tailored to your audience.",
              icon: "/assets/icons/ai.svg",
              title: ''
            },
            {
              name: "Real-Time Performance Insights",
              description: "Track campaign performance with detailed analytics.",
              icon: "/assets/icons/analytics.svg",
              title: ''
            },
            {
              name: "Multi-Platform Support",
              description: "Launch campaigns across multiple platforms effortlessly.",
              icon: "/assets/icons/platforms.svg",
              title: ''
            },
            {
              name: "Intuitive Dashboard",
              description: "Manage all your marketing activities in one easy-to-use interface.",
              icon: "/assets/icons/dashboard.svg",
              title: ''
            },
          ]}
        />

        {/* Testimonials Section */}
        <h2>"What Our Users Say"</h2>
        <Testimonials
          testimonials={[
            {
              name: "John Doe",
              role: "Marketing Manager, XYZ Corp",
              quote: "AdStream AI transformed how we create ad campaigns. It's a game changer!",
              image: "/assets/users/john.jpg",
              socialUrl: ''
            },
            {
              name: "Jane Smith",
              role: "Founder, StartUp Co",
              quote: "Our ROI improved significantly thanks to AdStream AI’s insights.",
              image: "/assets/users/jane.jpg",
              socialUrl: ''
            },
          ]}
        />

        {/* FAQ Section */}
        <h2>"Frequently Asked Questions"</h2>
        <FAQ
          faqs={[
            {
              question: "What is AdStream AI?",
              answer: "AdStream AI is an AI-powered tool to create, optimize, and manage marketing campaigns across multiple platforms.",
              id: 0
            },
            {
              question: "How much does it cost?",
              answer: "We offer flexible pricing plans starting from $29/month. Contact us for enterprise pricing.",
              id: 0
            },
            {
              question: "Can I try it for free?",
              answer: "Yes, we offer a 14-day free trial for all new users.",
              id: 0
            },
          ]}
        />
      </main>

      {/* Footer Section */}
      <Footer
        footerNavigation={{
          app: [
            { name: "About", href: "/about" },
            { name: "Pricing", href: "/pricing" },
          ],
          company: [
            { name: "Blog", href: "/blog" },
            { name: "Contact", href: "/contact" },
          ],
        }}
      />
    </div>
  );
}
