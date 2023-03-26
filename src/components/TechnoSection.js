import { Container, Badge } from 'react-bootstrap';

const technos = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'];

const TechnoSection = () => (
  <Container id="technos">
    <h2>Technologies</h2>
    <p>
      Voici quelques-unes des technologies que j'utilise :
    </p>
    {technos.map((techno, index) => (
      <Badge key={[index]} pill variant="primary" className="mr-2">
        {techno}
      </Badge>
    ))}
  </Container>
);

export default TechnoSection;
