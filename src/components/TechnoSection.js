import { Container, Badge } from 'react-bootstrap';

const technos = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const TechnoSection = () => (
  <Container style={{ marginTop: '100px' }} className="text-center">
    <div className="anchor" id="technos" />
    <h1 className="mt-5">Technologies</h1>
    <p className="paragraph mb-4">
      Voici quelques-unes des technologies que j'utilise :
    </p>
    {technos.map((techno, index) => (
      <Badge key={[index]} pill className="me-3 bg-dark py-3 px-4 mb-3 fs-6">
        {techno}
      </Badge>
    ))}
  </Container>
);

export default TechnoSection;
