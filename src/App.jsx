import Tooltip from '@mui/material/Tooltip'
import Zoom from '@mui/material/Zoom';
import gameIcon from './assets/game-icon.png';
import restart from './assets/restart.png';
import { useEffect, useState } from 'react';
import { Container } from "./style";

function App() {
  const initialPoints = 0;

  const [x, setX] = useState('active');
  const [o, setO] = useState('inactive');
  const [pointsX, setPointsX] = useState(0);
  const [pointsO, setPointsO] = useState(0);
  const [theme, setTheme] = useState('light');
  const [turn, setTurn] = useState('x');
  const [table, setTable] = useState(['', '', '', '', '', '', '', '', '']);
  const [a, b, c, d, e, f, g, h, i] = table;
  const [isChecked, setIschecked] = useState();
  const [themeType, setThemeType] = useState("Nox!");
  var count = 0;

  function CheckWinner() {
    const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
    var winner = null;

    for (let i = 0; i < winCombinations.length; i++) {
      var [a, b, c] = winCombinations[i];

      if (table[a] && table[a] === table[b] && table[b] === table[c]) {
        winner = table[a];
        break;
      }
    }

    return winner;
  }

  function HandleClick(idx) {
    if (table[idx]) {
      return;
    }

    setTable((prevTable) => {
      const newTable = [...prevTable];
      newTable[idx] = turn;
      return newTable;
    });

    setTurn((prevTurn) => (prevTurn === 'x' ? 'o' : 'x'));
  }

  function AddPoints(winner) {
    winner === "x" ? setPointsX(pointsX + 1) : setPointsO(pointsO + 1);
  }

  function Restart() {
    setPointsO(initialPoints);
    setPointsX(initialPoints);
    setTable(['', '', '', '', '', '', '', '', '']);
    setX('active');
    setO('inactive');
    setTurn('x');
    count = 0;
  }

  function TableIsFull() {
    count = 0;
    table.forEach(el => {
      if (el.length > 0) {
        count++;
      }
    })
  }

  useEffect(() => {
    const winner = CheckWinner();
    TableIsFull();
    if (winner) {
      AddPoints(winner);
      NewRound();
    }
    if (count == 9) NewRound();
  }, [table]);

  function NewRound() {
    setTable(['', '', '', '', '', '', '', '', '']);
    setX('active');
    setO('inactive');
    setTurn('x');
    count = 0;
  }

  useEffect(() => {
    if (turn === 'x') {
      setX('active');
      setO('inactive');
    } else {
      setX('inactive');
      setO('active');
    }
  }, [turn]);


  useEffect(() => {
    isChecked ? setTheme("night") : setTheme("light");
    themeType == "Nox!" ? setThemeType("Lumus!") : setThemeType("Nox!");
  }, [isChecked])

  return (
    <Container>
      <input type="checkbox" id="check" onClick={(e) => setIschecked(e.target.checked)} />
      <Tooltip
        title={themeType}
        color='light'
        placement="top"
        TransitionComponent={Zoom}>
        <label htmlFor="check" className="switch">
          <span className="slider"></span>
        </label>
      </Tooltip>
      <div className={`patt ${theme}`}>
        <h1>
          <img src={gameIcon} alt="game icon" className={`logo-${theme}`} /> Jogo da velha
        </h1>
        <main>
          <ul>
            <li className={x}>X</li>
            <li>{pointsX}</li>
          </ul>
          <table>
            <tbody>
              <tr>
                <td className="sqr cell-0" onClick={() => { HandleClick(0) }}>{a}</td>
                <td className="sqr cell-1" onClick={() => { HandleClick(1) }}>{b}</td>
                <td className="sqr cell-2" onClick={() => { HandleClick(2) }}>{c}</td>
              </tr>
              <tr>
                <td className="sqr cell-3" onClick={() => { HandleClick(3) }}>{d}</td>
                <td className="sqr cell-4" onClick={() => { HandleClick(4) }}>{e}</td>
                <td className="sqr cell-5" onClick={() => { HandleClick(5) }}>{f}</td>
              </tr>
              <tr>
                <td className="sqr cell-6" onClick={() => { HandleClick(6) }}>{g}</td>
                <td className="sqr cell-7" onClick={() => { HandleClick(7) }}>{h}</td>
                <td className="sqr cell-8" onClick={() => { HandleClick(8) }}>{i}</td>
              </tr>
            </tbody>
          </table>
          <ul>
            <li className={o}>O</li>
            <li>{pointsO}</li>
          </ul>
        </main>
        <button onClick={Restart}>
          <img src={restart} alt="restart" className={`btn-${theme}`}/> Reiniciar
        </button>
      </div>
    </Container>
  );
}

export default App;
