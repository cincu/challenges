import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ light, onToggle }) {
  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle(light.id);
      }}
      $isOn={isOn}
      onToggle={handleToggle}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
