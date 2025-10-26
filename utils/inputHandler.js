import { Console } from "@woowacourse/mission-utils";
import {
  validateAttempts,
  hasDuplicateNames,
  validateCarNames,
} from "./validation";

export const getCars = async () => {
  const carArray = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n",
  );
  const cars = carArray
    .split(",")
    .map((name) => name.trim())
    .map((name) => ({ name, distance: 0 }));

  const names = cars.map((c) => c.name);
  validateCarNames(names);
  hasDuplicateNames(names);

  return cars;
};

export const getAttempts = async () => {
  const num = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
  const attempt = Number(num);
  validateAttempts(attempt);

  return attempt;
};
