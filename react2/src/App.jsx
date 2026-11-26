import { useState } from "react";
import {
  Link,
  NavLink,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";

const characters = [
  { name: "Молния Маккуин", film: "Тачки", studio: "Pixar", year: "2006", image: "photo-1533473359331-0135ef1b58bf", label: "Гонщик" },
  { name: "Моана", film: "Моана", studio: "Disney", year: "2016", image: "photo-1518837695005-2083093ee35b", label: "Исследовательница" },
  { name: "Шрек", film: "Шрек", studio: "DreamWorks", year: "2001", image: "photo-1511497584788-876760111969", label: "Огр" },
  { name: "Базз Лайтер", film: "История игрушек", studio: "Pixar", year: "1995", image: "photo-1446776811953-b23d57bd21aa", label: "Космический рейнджер" },
  { name: "Панда По", film: "Кунг-фу Панда", studio: "DreamWorks", year: "2008", image: "photo-1500530855697-b586d89ba3ee", label: "Воин Дракона" },
  { name: "Мэй Ли", film: "Я краснею", studio: "Pixar", year: "2022", image: "photo-1519608487953-e999c86e7455", label: "Мечтательница" },
  { name: "Эльза", film: "Холодное сердце", studio: "Disney", year: "2013", image: "photo-1519681393784-d120267933ba", label: "Королева Эренделла" },
  { name: "Беззубик", film: "Как приручить дракона", studio: "DreamWorks", year: "2010", image: "photo-1474511320723-9a56873867b5", label: "Ночная Фурия" },
];

const studios = [
  { name: "Disney", year: "1923", films: "60+ фильмов", image: "photo-1533929736458-ca588d08c8be", text: "Большие истории, песни и волшебство." },
  { name: "Pixar", year: "1986", films: "28 фильмов", image: "photo-1470252649378-9c29740c9fa8", text: "Истории, которые трогают по-настоящему." },
  { name: "DreamWorks", year: "1994", films: "45+ фильмов", image: "photo-1500534623283-312aade485b7", text: "Яркие миры и герои с характером." },
  { name: "Netflix Animation", year: "2013", films: "Оригинальные истории", image: "photo-1519608487953-e999c86e7455", text: "Новые идеи со всего мира." },
  { name: "Studio Ghibli", year: "1985", films: "24 фильма", image: "photo-1470770841072-f978cf4d019e", text: "Магия и миры, полные жизни." },
  { name: "Sony Pictures Animation", year: "2002", films: "20+ фильмов", image: "photo-1519608487953-e999c86e7455", text: "Смелая графика и неожиданный юмор." },
];

function photo(id, width = 800) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

function Header({ query, setQuery }) {
  const location = useLocation();
  const placeholder = location.pathname === "/studios"
    ? "Найти студию..."
    : "Найти персонажа...";

  return (
    <header className="header">
      <Link to="/" className="logo">
        <span className="logo-icon">К</span>
        кадр<span className="lime">.</span>
      </Link>

      <nav className="nav">
        <NavLink to="/" end>Главная</NavLink>
        <NavLink to="/characters">Персонажи</NavLink>
        <NavLink to="/studios">Студии</NavLink>
      </nav>

      <label className="search">
        <span>⌕</span>
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={placeholder}
        />
        {query && <button onClick={() => setQuery("")}>×</button>}
      </label>
    </header>
  );
}

function CharacterCards({ items }) {
  if (!items.length) {
    return <p className="empty">Ничего не найдено. Попробуй другой запрос.</p>;
  }

  return (
    <div className="character-grid">
      {items.map((character, index) => (
        <article className="character-card" key={character.name}>
          <div className="card-image">
            <img src={photo(character.image)} alt={character.name} />
            <span className="number">0{index + 1}</span>
            <span className="card-arrow">↗</span>
          </div>
          <div className="card-info">
            <div>
              <span className="small-text">{character.studio} · {character.year}</span>
              <h3>{character.name}</h3>
            </div>
            <span className="tag">{character.label}</span>
          </div>
          <p className="world">МУЛЬТФИЛЬМ: {character.film}</p>
        </article>
      ))}
    </div>
  );
}

function StudioCards({ items }) {
  if (!items.length) {
    return <p className="empty">Студию не нашли. Попробуй другое название.</p>;
  }

  return (
    <div className="studio-grid">
      {items.map((studio, index) => (
        <article className="studio-card" key={studio.name}>
          <img src={photo(studio.image)} alt="" />
          <div className="studio-shade" />
          <span className="number">0{index + 1}</span>
          <div className="studio-info">
            <span>{studio.year} · {studio.films}</span>
            <h3>{studio.name}</h3>
            <p>{studio.text}</p>
          </div>
          <span className="card-arrow">↗</span>
        </article>
      ))}
    </div>
  );
}

function Home({ query }) {
  const filtered = characters.filter((character) =>
    `${character.name} ${character.film} ${character.studio}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">ТВОЯ ВСЕЛЕННАЯ АНИМАЦИИ</div>
          <h1>Истории,<br />которые <em>живут</em><br />внутри нас.</h1>
          <p>Любимые герои, удивительные миры и студии,<br />которые всё это придумали.</p>
          <Link to="/characters" className="button">
            Исследовать героев <span>→</span>
          </Link>
          <div className="hero-note">✦ Вдохновлено большими историями</div>
        </div>
        <div className="hero-art">
          <div className="hero-photo" />
          <div className="floating-card"><b>Целый мир</b><small>в одном кадре</small></div>
          <div className="floating-card second"><b>1 200+</b><small>историй и героев</small></div>
          <span className="star">✳</span>
        </div>
      </section>

      <div className="ticker">
        <span>PIXAR</span><span>DISNEY</span><span>DREAMWORKS</span>
        <span>STUDIO GHIBLI</span><span>NETFLIX ANIMATION</span>
      </div>

      <section className="section" id="characters">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">КТО ЖИВЁТ В ЭТИХ МИРАХ</span>
            <h2>Знакомься с <em>героями</em></h2>
          </div>
          <Link to="/characters" className="view-link">Все персонажи →</Link>
        </div>
        <CharacterCards items={filtered.slice(0, 4)} />
      </section>

      <section className="quote">
        <p>В каждом из нас живёт история,<br />которая <em>ждёт своего кадра.</em></p>
        <span>СОБРАНО С ЛЮБОВЬЮ К АНИМАЦИИ</span>
      </section>

      <section className="section">
        <div className="section-heading">
          <div>
            <span className="eyebrow dark">ЗА КАДРОМ</span>
            <h2>Миры создают <em>они</em></h2>
          </div>
          <Link to="/studios" className="view-link">Все студии →</Link>
        </div>
        <StudioCards items={studios.slice(0, 3)} />
      </section>
    </>
  );
}

function CharactersPage({ query, setQuery }) {
  const filtered = characters.filter((character) =>
    `${character.name} ${character.film} ${character.studio} ${character.label}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">БОЛЬШАЯ КОЛЛЕКЦИЯ</span>
        <h1>Они делают<br />миры <em>живыми.</em></h1>
        <p>У каждого своя история — найди героя, который близок тебе.</p>
      </section>
      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow dark">КАТАЛОГ ПЕРСОНАЖЕЙ</span><h2>Герои · {filtered.length}</h2></div>
          <label className="catalog-search">
            <span>⌕</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Найти персонажа..." />
          </label>
        </div>
        <CharacterCards items={filtered} />
      </section>
    </>
  );
}

function StudiosPage({ query, setQuery }) {
  const filtered = studios.filter((studio) =>
    `${studio.name} ${studio.text}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <section className="page-hero">
        <span className="eyebrow">ЗА КАДРОМ КАЖДОЙ ИСТОРИИ</span>
        <h1>Мастерские<br /><em>волшебства.</em></h1>
        <p>Студии, которые превращают идеи в целые вселенные.</p>
      </section>
      <section className="section">
        <div className="section-heading">
          <div><span className="eyebrow dark">АНИМАЦИОННЫЕ СТУДИИ</span><h2>Создатели миров · {filtered.length}</h2></div>
          <label className="catalog-search">
            <span>⌕</span>
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Найти студию..." />
          </label>
        </div>
        <StudioCards items={filtered} />
      </section>
    </>
  );
}

export default function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="app">
      <Header query={query} setQuery={setQuery} />
      <main>
        <Routes>
          <Route path="/" element={<Home query={query} />} />
          <Route path="/characters" element={<CharactersPage query={query} setQuery={setQuery} />} />
          <Route path="/studios" element={<StudiosPage query={query} setQuery={setQuery} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <footer className="footer">
        <Link to="/" className="logo"><span className="logo-icon">К</span>кадр<span className="lime">.</span></Link>
        <span>Все истории начинаются с одного кадра.</span>
        <span>© 2026 Кадр</span>
      </footer>
    </div>
  );
}