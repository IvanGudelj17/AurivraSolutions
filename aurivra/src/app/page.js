// app/page.js
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Contact from '@/components/Contacts';
import HowToStart from '@/components/HowToStart';



export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
       <HowToStart />
      <Contact />
    </div>
  );
}
