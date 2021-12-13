import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import Select from "../SelectGender";
import { Link } from "react-router-dom";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const [gender, setGender] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const requestCharacters = async () => {
            const params = gender ? `?gender=${gender}` : "";

            setLoading(true);
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${params}`
            );
            const data = await response.json();
            console.log("fetch by gender ===>", data);
            setLoading(false);
            setCharacters(data.results);
        };
        requestCharacters();
    }, [gender]);

    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setCharacters(data))
    //     .catch((err) => console.error(err));

    return (
        <>
            {loading ? (
                <div>...Loading</div>
            ) : (
                <>
                    <Link to="/favorites-characters">Go to favorites</Link>
                    <div>Hello Rick & Morty</div>
                    <Select
                        gender={gender}
                        setGender={setGender}
                        onChange={(value) => setGender(value)}
                    />
                    {characters.map((character) => {
                        return <CharacterCard {...character} />;
                    })}
                </>
            )}{" "}
        </>
    );
};

export default CharacterList;
