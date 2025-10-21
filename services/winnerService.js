import { Console } from "@woowacourse/mission-utils";

export function getWinner(cars) {
  const maxDistance = Math.max(...cars.map((car) => car.distance));
  const winners = cars
    .filter((car) => car.distance == maxDistance)
    .map((car) => car.name);

  return Console.print(`최종 우승자 : ${winners.join(", ")}`);
}
