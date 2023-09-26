import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialLights = [
  {
    name: "Living Room",
    isOn: true,
    id: 1,
  },
  {
    name: "Kitchen",
    isOn: true,
    id: 2,
  },
  {
    name: "Bedroom",
    isOn: true,
    id: 3,
  },
  {
    name: "Bathroom",
    isOn: true,
    id: 4,
  },
  {
    name: "Garage",
    isOn: true,
    id: 5,
  },
  {
    name: "Porch",
    isOn: true,
    id: 6,
  },
  {
    name: "Garden",
    isOn: true,
    id: 7,
  },
  {
    name: "Office",
    isOn: true,
    id: 8,
  },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);

  function handleToggle(id, desiredState) {
    if (desiredState !== undefined) {
      lights.map((light) => (light.isOn = desiredState));
      console.log("lights", lights);
    } else {
      const targetLight = lights.find((light) => light.id === id);
      targetLight.isOn = !targetLight.isOn;
    }
    setLights([...lights]);
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} lights={lights} handleToggle={handleToggle} />
    </Layout>
  );
}
