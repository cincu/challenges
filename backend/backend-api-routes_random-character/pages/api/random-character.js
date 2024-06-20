import Chance from "chance";

const chance = new Chance();
const character = {
  firstName: chance.first(),
  lastName: chance.last(),
  twitter: chance.twitter(),
  geohash: chance.geohash(),
  age: chance.age(),
  profession: chance.profession(),
  pet: chance.animal(),
  gender: chance.gender(),
  favoriteDayInWeek: chance.weekday(),
};

export default function handler(request, response) {
  response.status(200).json(character);
}
