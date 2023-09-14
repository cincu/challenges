import { Star } from "./Star.svg";
import { StarFilled } from "./StarFilled.svg";

export function FavButton() {
  const isFavorite = false;
  return (
    <button
      className="favorite-button"
      onClick={() => {
        console.log("fav butt grabbed");
      }}
      aria-label="fav"
    >
      {isFavorite ? <Star /> : <StarFilled />}
    </button>
  );
}
