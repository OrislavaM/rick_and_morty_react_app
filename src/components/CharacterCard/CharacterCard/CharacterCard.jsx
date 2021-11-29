const CharacterCard = ({ name, image, specie, gender }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt="character image" />
            <div>Species: {specie}</div>
            <div>Gender: {gender}</div>
        </div>
    );
};

export default CharacterCard;
