import { Random } from "@woowacourse/mission-utils";

export const shouldMove = () => Random.pickNumberInRange(0, 9) >= 4;

const tryMove = (car) => {
  if (shouldMove()) car.distance += 1;
};

export const moveCar = (cars) => {
  cars.forEach(tryMove);
};
