import { Container, Badge } from 'react-bootstrap';

const technos = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const TechnoSection = () => (
  <Container className="text-center">
    <div className="anchor" id="technos" />
    <h2 className="mt-5">Technologies</h2>
    <p>
      Voici quelques-unes des technologies que j'utilise :
    </p>
    {technos.map((techno, index) => (
      <Badge key={[index]} pill className="me-3 bg-dark p-2">
        {techno}
      </Badge>
    ))}
  </Container>
);

export default TechnoSection;
