import Link from "../components/Link";

export default function HomePage({ lights }) {
  const litLights = lights.filter((light) => light.isOn === true);
  return (
    <div>
      <h1>Home</h1>
      <p>{litLights.length} light(s) are on.</p>
      <p>
        <Link href="/lights">All lights →</Link>
      </p>
      <p>
        <Link href="/actions">Quick actions →</Link>
      </p>
    </div>
  );
}
