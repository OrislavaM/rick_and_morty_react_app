import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharacterList from "./components/CharactersList/CharactersList";
import CharacterDetails from "./components/CharacterDetails/CharacterDetails";
import FavoritesCharacters from "./components/FavoritesCharacters";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterList />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
                <Route
                    path="/favorites-characters"
                    element={<FavoritesCharacters />}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
