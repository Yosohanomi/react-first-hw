import './App.css';
const cat = {
  url: "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
  name: 'cat'
}

const name = "Sofia";
const favSite = {
  name: "Google",
  url: "https://www.google.com/"
};

let a = 5;
let b = 9;

let colors = ["Червоний", "Синій", "Зелений"];

function App() {
  return (
    <div className="App">
      <h1>{name}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img src={cat.url} alt={cat.name}></img>
      <a href={favSite.url}>{favSite.name}</a>
      <p>{a+b}</p>
      <ul>
        {colors.map(color => (
          <li>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
