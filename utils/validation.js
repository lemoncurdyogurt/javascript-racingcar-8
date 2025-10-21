export function validateCarNames(cars) {
  if (!cars.every((name) => name && name.length <= 5)) {
    throw new Error("[ERROR] 자동차 이름은 1~5자여야 합니다.");
  }
}
export function hasDuplicateNames(cars) {
  if (new Set(cars).size !== cars.length) {
    throw new Error("[ERROR] 자동차 이름이 중복되어 있습니다.");
  }
}
export function validateAttempts(attempt) {
  if (isNaN(attempt) || attempt < 1) {
    throw new Error("[ERROR] 시도 횟수는 1 이상의 숫자여야 합니다.");
  }
}
