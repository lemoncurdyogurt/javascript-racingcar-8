import { shouldMove } from "./carMovement.js";

export function moveCar(cars) {
  cars.forEach((car) => {
    if (shouldMove) {
      car.distance += 1;
    }
  });
}
