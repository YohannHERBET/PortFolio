import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import ProjetSection from './ProjectSection';
import AProposSection from './AProposSection';
import TechnoSection from './TechnoSection';
import ScrollToTopButton from './ScrollToTopButton';

function App() {
  return (
    <div className="App">
      <Header />
      <AProposSection />
      <TechnoSection />
      <ProjetSection />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
