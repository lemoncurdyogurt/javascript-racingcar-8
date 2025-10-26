import { Random } from "@woowacourse/mission-utils";

export function shouldMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  return randomNumber >= 4;
}

function tryMove(car) {
  if (shouldMove()) {
    car.distance += 1;
  }
}

export function moveCar(cars) {
  cars.forEach(tryMove);
}
