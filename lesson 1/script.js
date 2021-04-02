let employers = [
  'АртеМ',
  'максим',
  'Владимир',
  'сергей',
  'НикиТа',
  'евГений',
  ' Дарья',
  ' ',
  'виктория ',
  'ЕкаТерина',
  '',
  ' Андрей ',
  'КИРИЛЛ',
];
const nameCourse = 'Базовый React';
let command = [];

command = employers.filter((item) => {
  return item.trim() != '';
});

command = command
  .map((item) => {
    return item.toLowerCase().trim();
  })
  .map((item) => {
    return item[0].toUpperCase() + item.slice(1);
  });

let data = {
  cash: [3, 8, 3],
  react: ['JSX', 'components', 'props', 'state', 'hooks'],
  add: ['styled-components', 'firebase'],
};

const calcCash = (own, ...args) => {
  own = own || 0;
  const everyCash = [own, ...args];
  let total = own;
  return (total = everyCash[1].reduce((sum, item) => {
    return sum + item;
  }));
};

const lesson = calcCash(null, data.cash);

const makeBusiness = (director, teacher, allModule, gang, course) => {
  teacher = teacher || 'Максим';
  const sumTech = data.react.concat(data.add, 'и другие');
  console.log(`
	Стартуем новый курс: ${course}. Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
	Команда Академии: ${gang}
	Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!
	Технологии которые мы изучим: `);
  console.log(...sumTech);
};
makeBusiness(...['Артем', null, lesson, command, nameCourse]);
