import { useEffect, useState } from "react";
import CharacterCard from "./components/CharacterCard/CharacterCard";

function App() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        requestCharacters();
    }, []);

    // fetch(url)
    //     .then((res) => res.json())
    //     .then((data) => setCharacters(data))
    //     .catch((err) => console.error(err));

    const requestCharacters = async () => {
        setLoading(true);
        const response = await fetch(
            "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        setLoading(false);
        console.log("our data === >", data);
        setCharacters(data.results);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div>Hello Rick & Morty</div>
            {characters.map(({ name, image, species, id }) => {
                return (
                    <CharacterCard
                        key={id}
                        name={name}
                        image={image}
                        specie={species}
                    />
                );
            })}
        </>
    );
}

export default App;
