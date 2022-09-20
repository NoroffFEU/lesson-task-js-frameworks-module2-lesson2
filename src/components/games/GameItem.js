import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

function GameItem({ name, image, released, genre }) {
	return (
		<Col>
			<Card style={{ width: "18rem" }}>
				<Card.Img variant="top" src={image} />
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					<div>
						<p>Released: {released}</p>
						<p>Genre: {genre.join(", ")}</p>
					</div>
				</Card.Body>
			</Card>
		</Col>
	);
}

GameItem.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	released: PropTypes.string,
	genre: PropTypes.array.isRequired,
};

GameItem.defaultProps = {
	released: "Unknown",
};

export default GameItem;
