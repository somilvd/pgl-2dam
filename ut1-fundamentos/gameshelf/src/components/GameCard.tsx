import type { Game } from "../types/Game";

type GameCardProps = {
  game: Game;
};

export default function GameCard ({ game }: GameCardProps) {
  return (
    <article className="card">
      <h2>{game.name}</h2>
      <p>Género: {game.genre ?? "Sin género disponible"}</p>
      <p>
        Lanzamiento en Europa:{" "} 
        {game.releaseDates?.Europe ?? "Sin dato disponible"}
      </p>
    </article>
  );
}