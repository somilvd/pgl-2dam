
type GameCardProps = {
  title: string;
  genre: string;
  price: number;
  available: boolean;
  image: string;
};

export default function GameCard({
  title,
  genre,
  price,
  available,
  image,
}: GameCardProps) {
  return (
    <article className="card">
      <img
        className="card-image"
        src={image}
        alt={`Portada de ${title}`}
        loading="lazy"
      />

      <div className="card-content">
        <p className="card-genre">{genre}</p>

        <h2>{title}</h2>

        <span
          className={
            available
              ? "card-status available"
              : "card-status unavailable"
          }
        >
          {available ? "Disponible" : "No disponible"}
        </span>

        <div className="card-footer">
          <span className="card-price">
            {price.toLocaleString("es-ES", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}{" "}
            €
          </span>
        </div>
      </div>
    </article>
  );
}
