import { FavButton } from "./FavButton";
export function Entry({ motto, date, text }) {
  return (
    <article>
      <div className="entry">
        <time className="entry__date">{date}</time>
        <div className="entry__content">
          <h2 className="entry__motto-container">
            <q>{motto}</q>
          </h2>
          <p className="entry--text">{text}</p>
          <FavButton />
        </div>
      </div>
    </article>
  );
}
