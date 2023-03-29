import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';
import ProjetSection from './ProjectSection';
import AProposSection from './AProposSection';
import TechnoSection from './TechnoSection';
import ScrollToTopButton from './ScrollToTopButton';
import ContactForm from './ContactForm';

const App = () => (
  <div className="App space-background">
    <Header />
    <main>
      <AProposSection />
      <TechnoSection />
      <ProjetSection />
      <ScrollToTopButton />
      <ContactForm />
    </main>
    <Footer />
  </div>
);

export default App;
