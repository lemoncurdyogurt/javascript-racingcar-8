import { Console } from "@woowacourse/mission-utils";
import { validateAttempts, validateCarNames } from "../utils/validation.js";
class App {
  async run() {
    try {
      const carArray = await Console.readLineAsync(
        "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
      );
      const cars = carArray.split(",");
      validateCarNames(cars);

      const num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
      const attempt = Number(num);
      validateAttempts(attempt);
    } catch (e) {
      Console.print(`${e.message}`);
    }
  }
}

export default App;
