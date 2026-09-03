import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import WorkspacePanels from '@/components/WorkspacePanels';
import Features from '@/components/Features';
import HowItConnects from '@/components/HowItConnects';
import Themes from '@/components/Themes';
import Privacy from '@/components/Privacy';
import Download from '@/components/Download';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkspacePanels />
        <Features />
        <HowItConnects />
        <Themes />
        <Privacy />
        <Download />
      </main>
      <Footer />
    </>
  );
}
