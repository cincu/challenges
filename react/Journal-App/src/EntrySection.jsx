import { Tabs } from "./Tabs";
import { Tab } from "./Tab";
import { Badge } from "./Badge";
import { Entry } from "./Entry";

export function EntrySection() {
  return (
    <section>
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
        <Tab>
          Favorites <Badge>1</Badge>
        </Tab>
      </Tabs>
      <div className="entry--section__entries">
        <Entry motto="hello" text="blabla" date="27.02.1993" />
        <Entry motto="hello" text="blabla" date="27.02.1993" />
        <Entry motto="hello" text="blabla" date="27.02.1993" />
        <Entry motto="hello" text="blabla" date="27.02.1993" />
      </div>
    </section>
  );
}
