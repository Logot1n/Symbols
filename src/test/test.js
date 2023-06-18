import Character from '../js/Character';
import Team from '../js/Team';
import canIterate from '../js/canIterate';

describe('Итерация команды через iterator и function-генератор', () => {
  const hero1 = new Character('Gerald', 'warrior', 100, 10, 15, 15);
  const hero2 = new Character('Gendalf', 'mage', 100, 10, 20, 5);
  const hero3 = new Character('Legolas', 'archer', 100, 10, 15, 10);

  test('Добавление героев в команду и их итерация через iterator и function-генератор', () => {
    // Тест работает как для iterator, так и для function-генератор, надо только в Team раскомментировать код
    const team = new Team();
    team.addCharacters(hero1, hero2, hero3);

    const result = [];
    for (const character of team) {
      result.push(character);
    }
    expect(result).toEqual([hero1, hero2, hero3]);
  });
});

describe('Проверка на возможность итерации', () => {
  test('Проверка на возможность итерации', () => {
    expect(canIterate(undefined)).toBe(false);
    expect(canIterate([1, 2, 3])).toBe(true);
    expect(canIterate(new Map())).toBe(true);
    expect(canIterate(new Set())).toBe(true);
    expect(canIterate(null)).toBe(false);
    expect(canIterate(10)).toBe(false);
    expect(canIterate('Netology')).toBe(true);
  });
});
