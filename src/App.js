import './App.css';
import Logo from './Componentes/Logo';
import Calculo from './Componentes/Calculo';

function App() {
  return (
    <div className="App">
      <Logo/>
      <h2>Você sabe com qual compustivel compensa mais abastecer seu carro?</h2>
      <h2>Utilize a calculadora abaixo:</h2>
      <Calculo/>
    </div>
  );
}

export default App;
