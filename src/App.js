import { Console } from "@woowacourse/mission-utils";
import {
  hasDuplicateNames,
  validateAttempts,
  validateCarNames,
} from "../utils/validation.js";
import { playRace } from "../services/raceService.js";
class App {
  async run() {
    try {
      const carArray = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      );
      const cars = carArray
        .split(",")
        .map((name) => name.trim())
        .map((name) => ({ name, distance: 0 }));
      validateCarNames(cars.map((c) => c.name));
      hasDuplicateNames(cars.map((c) => c.name));

      const num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const attempt = Number(num);
      validateAttempts(attempt);

      playRace(cars, attempt);
    } catch (e) {
      Console.print(`${e.message}`);
    }
  }
}

export default App;
