import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import ProjetSection from './ProjectSection';
import AProposSection from './AProposSection';
import TechnoSection from './TechnoSection';
import ScrollToTopButton from './ScrollToTopButton';
import ContactForm from './ContactForm';

function App() {
  return (
    <div className="App space-background">
      <Header />
      <AProposSection />
      <TechnoSection />
      <ProjetSection />
      <ScrollToTopButton />
      <ContactForm />
    </div>
  );
}

export default App;
