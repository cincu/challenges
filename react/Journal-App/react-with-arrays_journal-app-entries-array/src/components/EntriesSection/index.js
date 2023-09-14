import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";

export default function EntriesSection({ entries }) {
  const favoritedEntries = entries.filter((entry) => entry.isFavorite === true);
  return (
    <section className="entries-section">
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>{entries.length}</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>{favoritedEntries.length}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => {
          return (
            <>
              {" "}
              <Entry
                key={entry.id}
                date={entry.date}
                motto={entry.motto}
                notes={entry.notes}
              />
              {index !== entries.length - 1 && <Divider />}
            </>
          );
        })}
        {/* <Entry
          date="Feb 27, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Divider />
        <Entry
          date="Feb 26, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
        />
        <Divider />
        <Entry
          date="Feb 25, 2028"
          motto="Thats life in the city"
          notes="Si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si mihi. Et quidem se repellere, idque instituit docere sic omne animal, simul atque."
  /> */}
      </div>
    </section>
  );
}
