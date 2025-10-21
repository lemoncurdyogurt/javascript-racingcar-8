import { Random } from "@woowacourse/mission-utils";
export function shouldMove() {
  const randomNumber = Random.pickNumberInRange(0, 9);
  return randomNumber >= 4;
}
