
export function FavButton() {
    const isFavorite = false;
    return (
        <button className="favorite-button" onClick={() => {
            console.log("fav butt grabbed");
        }}
        aria-label="fav">
            {isFavorite ? <Star></Star>}
        </button>
    )
}