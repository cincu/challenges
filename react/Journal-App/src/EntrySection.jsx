import { Tabs } from "./Tabs";
import { Tab } from "./Tab";
import { Badge } from "./Badge";

export function EntrySection() {
  return (
    <section>
      <Tabs>
        <Tab active>
          All Entries <Badge isActive>3</Badge>
        </Tab>
      </Tabs>
    </section>
  );
}

//2.2 entries section
//2.2.1 tab bar
//2.2.1.1tab
//badge with number of entries
//2.2.1.2tab
//badge with number of entries
//2.2.2 entry list
//entry with {title}{date}{text}{icon-button}
