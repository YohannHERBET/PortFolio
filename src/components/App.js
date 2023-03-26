import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import ProjetSection from './ProjectSection';
import AProposSection from './AProposSection';
import TechnoSection from './TechnoSection';

function App() {
  return (
    <div className="App">
      <Header />
      <ProjetSection />
      <AProposSection />
      <TechnoSection />
    </div>
  );
}

export default App;
