import { Console } from "@woowacourse/mission-utils";
import { moveCar } from "./carMovement.js";

export const playRace = (cars, attempt) => {
  for (let i = 0; i < attempt; i++) {
    moveCar(cars);
    printRaceResult(cars);
  }
};

export const printRaceResult = (cars) => {
  Console.print("실행 결과");
  cars.forEach((car) => {
    Console.print(`${car.name} : ${"-".repeat(car.distance)}`);
  });
  Console.print("\n");
};
