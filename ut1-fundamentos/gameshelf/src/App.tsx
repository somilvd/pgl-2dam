import "./App.css";
import GameCard from "./components/GameCard";
import { useState } from "react";

type Game = {
  id: number;
  title: string;
  genre: string;
  price: number;
  available: boolean;
  image: string;
};

const games: Game[] = [
  { id: 1, title: "Hollow Knight", genre: "Aventura", price: 14.99, available: true, image:"/capturas/hollow-knight.jpg" },
  { id: 2, title: "Celeste", genre: "Plataformas", price: 19.99, available: true, image:"/capturas/celeste.jpg" },
  { id: 3, title: "Stardew Valley", genre: "Simulación", price: 13.99, available: false, image:"/capturas/stardew-valley.jpeg" },
  { id: 4, title: "EA FC 27", genre: "Deportes", price: 69.99, available: true, image:"/capturas/ea-fc-27.jpeg" },
  { id: 5, title: "Elden Ring", genre: "RPG de acción", price: 59.99, available: false, image:"/capturas/elden-ring.jpeg" },
  { id: 6, title: "Minecraft", genre: "Construcción", price: 29.99, available: false, image:"/capturas/minecraft.png" },
  { id: 7, title: "Fortnite", genre: "Battle Royale", price: 0, available: true, image:"/capturas/fortnite.jpeg" },
  { id: 8, title: "GTA VI", genre: "Accion y Aventura", price: 99.99, available: true, image:"/capturas/gta6.jpg" },
  { id: 9, title: "The Legend of Zelda: Breath of the Wild", genre: "Aventura", price: 59.99, available: false, image:"/capturas/zelda.jpeg" },
  { id: 10, title: "Hogwarts Legacy", genre: "RPG de mundo abierto", price: 74.99, available: true, image:"/capturas/hogwarts-legacy.jpeg" },


];

function App() {
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [onlyUnder15, setOnlyUnder15] = useState(false);
  let visibleGames = onlyAvailable
    ? games.filter((game) => game.available)
    : games;

  if (onlyUnder15) {
    visibleGames = visibleGames.filter((game) => game.price < 15);
  }
  return (
    <main className="app">
      <h1>GameShelf</h1>
      <p>Mi catálogo de videojuegos</p>

      <button onClick={() => setOnlyAvailable(!onlyAvailable)}>
        {onlyAvailable ? "Mostrar todos" : "Solo disponibles"}
      </button>

      <button onClick={() => setOnlyUnder15(!onlyUnder15)}>
        {onlyUnder15 ? "Mostrar todos los precios" : "Menos de 15 €"}
      </button>

      <section className="catalog">
        {visibleGames.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            genre={game.genre}
            price={game.price}
            available={game.available} 
            image={game.image}          
          />
        ))}
      </section>
    </main>
  );
}

export default App;