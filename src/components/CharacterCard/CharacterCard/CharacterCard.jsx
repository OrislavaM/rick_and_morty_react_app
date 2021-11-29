const CharacterCard = ({ name, image, specie }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="character image" />
            <div>Species: {specie}</div>
        </div>
    );
};

export default CharacterCard;
