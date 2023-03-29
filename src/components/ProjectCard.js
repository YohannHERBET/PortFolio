import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjetCard = ({
  image, title, description, technos,
}) => (
  <Card style={{ width: '18rem', boxShadow: '0px 0px 20px #2c3548' }}>
    <Card.Link href={`#${title.split(' ').join('-')}`} style={{ textDecoration: 'none' }}>
      <Card.Img className="card__img-top" variant="top" src={image} />
      <Card.Body className="card__body">
        <Card.Title className="text-center card__title">{title}</Card.Title>
        <Card.Text className="card__text">{description}</Card.Text>
        <Card.Text className="card__text">
          <strong>Technos : </strong>
          {technos.join(', ')}
        </Card.Text>
        <Button
          style={{
            background: 'rgb(162 185 255 / 0%)',
            color: '#d2dcff',
            border: 'none',
            width: '100%',
          }}
          className="d-flex justify-content-center card__button"
        >
          En savoir plus
        </Button>
      </Card.Body>
    </Card.Link>
  </Card>
);

ProjetCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technos: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjetCard;
