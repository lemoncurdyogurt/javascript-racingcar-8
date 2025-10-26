import { Console } from "@woowacourse/mission-utils";
import { playRace } from "../services/raceService.js";
import { getWinner } from "../services/winnerService.js";
class App {
  async run() {
    try {
      const cars = await getCars();
      const attempt = await getAttempts();

      Console.print("\n"); // 사용자 입력값과 출력문 사이에 한 줄 띄우기
      playRace(cars, attempt);
      getWinner(cars);
    } catch (e) {
      Console.print(`${e.message}`);
      throw e;
    }
  }
}

export default App;
