import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const CharacterDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    useEffect(() => {
        const getCharacter = async () => {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );
            const data = await response.json();
            setDetails(data);
        };
        getCharacter();
    }, [id]);

    console.log("this is id ===>", id);
    return (
        <>
            {details ? (
                <div>
                    Character details...
                    <pre>{JSON.stringify(details)}</pre>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default CharacterDetails;
