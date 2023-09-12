import { Image } from "./components/Image";

export function Avatar({ avatar }) {
  return <Image className="round-image" src={avatar} alt="avatar" />;
}
