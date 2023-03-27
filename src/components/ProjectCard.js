import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjetCard = ({
  image, title, description, technos,
}) => (
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title className="text-center">{title}</Card.Title>
      <Card.Text>{description}</Card.Text>
      <Card.Text>
        <strong>Technos : </strong>
        {technos.join(', ')}
      </Card.Text>
      <Button variant="dark" href={`#${title.split(' ').join('-')}`}>En savoir plus</Button>
    </Card.Body>
  </Card>
);

ProjetCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjetCard;
