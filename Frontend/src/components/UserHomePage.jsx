// Import CSS files
import '../assets/css/animate.min.css';
import '../assets/css/bootstrap.css';
import '../assets/css/font-awesome.min.css';
import '../assets/css/jquery-ui.css';
import '../assets/css/style.css';

// Import all section components
import Preloader from './Preloader';
import PopupSearch from './PopupSearch';
import TopMenu from './TopMenu';
import MainMenu from './MainMenu';
import HeroSearchSection from './HeroSearchSection';
import QuickAccessSection from './QuickAccessSection';
import TrustBrandsSection from './TrustBrandsSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import FeaturesSection from './FeaturesSection';
import AboutWelcomeSection from './AboutWelcomeSection';
import StatsSection from './StatsSection';
import HowItWorksSection from './HowItWorksSection';
import RecentCouplesSection from './RecentCouplesSection';
import TeamSection from './TeamSection';
import GallerySection from './GallerySection';
import BlogSection from './BlogSection';
import FindYourMatchCTASection from './FindYourMatchCTASection';
import FooterSection from './FooterSection';

export default function UserHomePage() {
  return (
    <>
      {/* Header & Navigation Components */}
      <Preloader />
      <PopupSearch />
      <TopMenu />
      <MainMenu />
      
      {/* Hero Section */}
      <HeroSearchSection />
      
      {/* Quick Access & Services */}
      <QuickAccessSection />
      
      {/* Social Proof & Reviews */}
      <TrustBrandsSection />
      
      {/* Why Choose Us Section */}
      <WhyChooseUsSection />
      
      {/* Features/Benefits */}
      <FeaturesSection />
      
      {/* About Us Section */}
      <AboutWelcomeSection />
      
      {/* Statistics */}
      <StatsSection />
      
      {/* How It Works Timeline */}
      <HowItWorksSection />
      
      {/* Recent Couples Showcase */}
      <RecentCouplesSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Photo Gallery */}
      <GallerySection />
      
      {/* Blog & Articles */}
      <BlogSection />
      
      {/* Final CTA */}
      <FindYourMatchCTASection />
      
      {/* Footer */}
      <FooterSection />
    </>
  );
}
