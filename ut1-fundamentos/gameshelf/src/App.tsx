import "./App.css";
import GameCard from "./components/GameCard";
import { useState } from "react";

type Game = {
  id: number;
  title: string;
  genre: string;
  price: number;
  available: boolean;
};

const games: Game[] = [
  { id: 1, title: "Hollow Knight", genre: "Aventura", price: 14.99, available: true },
  { id: 2, title: "Celeste", genre: "Plataformas", price: 19.99, available: true },
  { id: 3, title: "Stardew Valley", genre: "Simulación", price: 13.99, available: false },
  { id: 4, title: "EA FC 27", genre: "Deportes", price: 69.99, available: true },
  { id: 5, title: "Elden Ring", genre: "RPG de acción", price: 59.99, available: false },
  { id: 6, title: "Minecraft", genre: "Construcción", price: 29.99, available: false },
  { id: 7, title: "Fortnite", genre: "Battle Royale", price: 0, available: true },
  { id: 8, title: "GTA VI", genre: "Accion y Aventura", price: 99.99, available: true },
  { id: 9, title: "The Legend of Zelda: Breath of the Wild", genre: "Aventura", price: 59.99, available: false },
  { id: 10, title: "The Legend of Zelda: Breath of the Wild", genre: "Aventura", price: 74.99, available: true },


];

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const visibleGames = onlyAvailable
    ? games.filter((game) => game.available)
    : games;
  
  return (
    <main className="app">
      <h1>GameShelf</h1>
      <p>Mi catálogo de videojuegos</p>
      <section className="catalog">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            available={game.available}
          />
        ))}
      </section>
    </main>
  );
}

export default App;