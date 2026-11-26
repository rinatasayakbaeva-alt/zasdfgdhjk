export const heroes = [
  {
    name: "Молния Маккуин",
    world: "Тачки",
    studio: "Pixar",
    year: "2006",
    image: "photo-1533473359331-0135ef1b58bf",
    tag: "Гонщик",
  },
  {
    name: "Моана",
    world: "Моана",
    studio: "Disney",
    year: "2016",
    image: "photo-1518837695005-2083093ee35b",
    tag: "Исследовательница",
  },
  {
    name: "Шрек",
    world: "Шрек",
    studio: "DreamWorks",
    year: "2001",
    image: "photo-1511497584788-876760111969",
    tag: "Огр",
  },
  {
    name: "Базз Лайтер",
    world: "История игрушек",
    studio: "Pixar",
    year: "1995",
    image: "photo-1446776811953-b23d57bd21aa",
    tag: "Космический рейнджер",
  },
  {
    name: "Панда По",
    world: "Кунг-фу Панда",
    studio: "DreamWorks",
    year: "2008",
    image: "photo-1500530855697-b586d89ba3ee",
    tag: "Воин Дракона",
  },
  {
    name: "Мэй Ли",
    world: "Я краснею",
    studio: "Pixar",
    year: "2022",
    image: "photo-1519608487953-e999c86e7455",
    tag: "Мечтательница",
  },
  {
    name: "Эльза",
    world: "Холодное сердце",
    studio: "Disney",
    year: "2013",
    image: "photo-1519681393784-d120267933ba",
    tag: "Королева Эренделла",
  },
  {
    name: "Беззубик",
    world: "Как приручить дракона",
    studio: "DreamWorks",
    year: "2010",
    image: "photo-1474511320723-9a56873867b5",
    tag: "Ночная Фурия",
  },
];

export const studios = [
  {
    name: "Disney",
    since: "1923",
    count: "60+ фильмов",
    image: "photo-1533929736458-ca588d08c8be",
    desc: "Большие истории, песни и волшебство.",
  },
  {
    name: "Pixar",
    since: "1986",
    count: "28 фильмов",
    image: "photo-1470252649378-9c29740c9fa8",
    desc: "Истории, которые трогают по-настоящему.",
  },
  {
    name: "DreamWorks",
    since: "1994",
    count: "45+ фильмов",
    image: "photo-1500534623283-312aade485b7",
    desc: "Яркие миры и герои с характером.",
  },
  {
    name: "Netflix Animation",
    since: "2013",
    count: "Оригинальные истории",
    image: "photo-1519608487953-e999c86e7455",
    desc: "Новые идеи со всего мира.",
  },
  {
    name: "Studio Ghibli",
    since: "1985",
    count: "24 фильма",
    image: "photo-1470770841072-f978cf4d019e",
    desc: "Тонкая магия и миры, полные жизни.",
  },
  {
    name: "Sony Pictures Animation",
    since: "2002",
    count: "20+ фильмов",
    image: "photo-1519608487953-e999c86e7455",
    desc: "Смелая графика и неожиданный юмор.",
  },
];

export function imageUrl(id) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;
}