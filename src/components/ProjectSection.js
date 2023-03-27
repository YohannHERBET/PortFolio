import { Container, Row, Col } from 'react-bootstrap';
import img from '../assets/img/test.webp';
import ProjetCard from './ProjectCard';

const projets = [
  {
    image: img,
    title: 'Projet 1',
    description: 'Description du projet 1',
    technos: ['React', 'Node.js'],
  },
  {
    image: img,
    title: 'Projet 2',
    description: 'Description du projet 2',
    technos: ['React', 'Node.js'],
  },
  {
    image: img,
    title: 'Projet 3',
    description: 'Description du projet 3',
    technos: ['React', 'Node.js'],
  },
  {
    image: img,
    title: 'Projet 4',
    description: 'Description du projet 4',
    technos: ['React', 'Node.js'],
  },
];

const ProjectSection = () => (
  <Container className="mt-4">
    <div className="anchor" id="projets" />
    <h2 className="mb-5 mt-5 text-center">Mes Projets</h2>
    <Row>
      {projets.map((projet, index) => (
        <Col key={[index]} className="mb-4 d-flex justify-content-center">
          <ProjetCard {...projet} />
        </Col>
      ))}
    </Row>
  </Container>
);

export default ProjectSection;
