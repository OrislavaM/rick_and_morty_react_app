import { useLocation } from "react-router-dom";

const CharacterDetails = () => {
    const { state: details } = useLocation();

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
