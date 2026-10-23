import type { Game } from "../types/Game";

type GameCardProps = {
  game: Game;
};

export default function GameCard ({ game }: GameCardProps) {
  return (
    <article className="card">
      <div className="card-content">
        <p className="card-genre">[ {game.genre ?? "NO GENRE"} ]</p>
        
        <h2>{game.name}</h2>
        
        <p>STAGE: <span>EU</span></p>
        
        <div className="card-footer">
          <p>RELEASE: <span>{game.releaseDates?.Europe ?? "99/99/99"}</span></p>
        </div>
      </div>
    </article>
  );
}
