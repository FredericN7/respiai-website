import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Problem } from './sections/Problem';
import { Architecture } from './sections/Architecture';
import { Demo } from './sections/Demo';
import { Comparison } from './sections/Comparison';
import { UseCases } from './sections/UseCases';
import { Trust } from './sections/Trust';
import { FAQ } from './sections/FAQ';
import { Footer } from './sections/Footer';
import { LLMs } from './sections/LLMs';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <LLMs />
      <Navigation />
      <main>
        <Hero />
        <Problem />
        <Architecture />
        <Demo />
        <Comparison />
        <UseCases />
        <Trust />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
