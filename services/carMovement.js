import { Random } from "@woowacourse/mission-utils";

export function shouldMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  return randomNumber >= 4;
}

export function moveCar(cars) {
  cars.forEach((car) => {
    if (shouldMove) {
      car.distance += 1;
    }
  });
}
