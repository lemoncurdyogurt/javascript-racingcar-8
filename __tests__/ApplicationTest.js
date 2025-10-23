import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    const input = inputs.shift();
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();

  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

const getLogSpy = () => {
  const logSpy = jest.spyOn(MissionUtils.Console, "print");
  logSpy.mockClear();
  return logSpy;
};

describe("자동차 경주", () => {
  test("기능 테스트", async () => {
    // given
    const MOVING_FORWARD = 4;
    const STOP = 3;
    const inputs = ["pobi,woni", "1"];
    const logs = ["pobi : -", "woni : ", "최종 우승자 : pobi"];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([MOVING_FORWARD, STOP]);

    // when
    const app = new App();
    await app.run();

    // then
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("공동 우승자 테스트", async () => {
    const inputs = ["pobi, woni", "2"];
    const logs = [
      "pobi : -",
      "woni : ",
      "pobi : -",
      "woni : -",
      "최종 우승자 : pobi, woni",
    ];
    const logSpy = getLogSpy();

    mockQuestions(inputs);
    mockRandoms([5, 5]);

    const app = new App();
    await app.run();
    logs.forEach((log) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(log));
    });
  });

  test("이름 길이 예외 테스트", async () => {
    // given
    const inputs = ["pobi,javaji"];
    mockQuestions(inputs);

    // when
    const app = new App();

    // then
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름은 5자를 초과할 수 없습니다 (이름: javaji)",
    );
  });

  test("이름 중복 예외 테스트", async () => {
    const inputs = ["pobi,pobi"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름이 중복되어 있습니다.",
    );
  });

  test("시도 횟수 예외 테스트", async () => {
    const inputs = ["pobi, woni", ""];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.",
    );
  });

  test("이름 공백 예외 테스트1", async () => {
    const inputs = ["pobi, , woni"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 자동차 이름이 비어 있습니다 (인덱스 2)",
    );
  });

  test("이름 공백 예외 테스트2", async () => {
    const inputs = ["pobi, woni,"];
    mockQuestions(inputs);

    const app = new App();
    await expect(app.run()).rejects.toThrow(
      "[ERROR] 마지막 쉼표 뒤에 자동차 이름이 없습니다.",
    );
  });
});
