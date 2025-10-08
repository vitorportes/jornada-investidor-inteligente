import HeroSection from "../hero-section"
import CTASection from "../cta-section"
import CourseModulesSection from "../course-modules-section"
import BonusContentSection from "../bonus-content-section"
import VideoTestimonialsSection from "../video-testimonials-section"
import AuthorSection from "../author-section"
import PricingSection from "../pricing-section"
import FAQSection from "../faq-section"
import ContactSection from "../contact-section"
import SectionDivider from "../components/section-divider"
import DateLocationSection from "../date-location-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <SectionDivider />
      <CTASection />
      <SectionDivider />
      <CourseModulesSection />
      <SectionDivider />
      <BonusContentSection />
      <SectionDivider />
      <VideoTestimonialsSection />
      <SectionDivider />
      <DateLocationSection />
      <SectionDivider />
      <AuthorSection />
      <SectionDivider />
      <PricingSection />
      <SectionDivider />
      <FAQSection />
      <SectionDivider />
      <ContactSection />
    </main>
  )
}
