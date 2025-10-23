export function validateCarNames(cars) {
  cars.forEach((name, index) => {
    if (!name) {
      if (cars[cars.length - 1] === "") {
        throw new Error("[ERROR] 마지막 쉼표 뒤에 자동차 이름이 없습니다.");
      }
      throw new Error(
        `[ERROR] 자동차 이름이 비어 있습니다.(인덱스 ${index + 1})`,
      );
    }
    if (name.length > 5) {
      throw new Error(
        `[ERROR] 자동차 이름은 5자를 초과할 수 없습니다.(이름: ${name})`,
      );
    }
  });
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
