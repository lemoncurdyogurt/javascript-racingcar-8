import { moveCar } from "./carMovement";

export function playRace(cars, attempt) {
  for (let i; i < attempt; i++) {
    moveCar(cars);
  }
}
