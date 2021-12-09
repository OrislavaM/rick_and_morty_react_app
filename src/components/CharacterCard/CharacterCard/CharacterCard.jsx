import { Link } from "react-router-dom";

const CharacterCard = ({ name, image, specie, gender, id }) => {
    return (
        <Link to={`/character/${id}`}>
            <h3>{name}</h3>
            <img src={image} alt="character image" />
            <div>Species: {specie}</div>
            <div>Gender: {gender}</div>
        </Link>
    );
};

export default CharacterCard;
