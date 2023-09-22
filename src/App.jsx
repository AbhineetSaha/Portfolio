import './App.css';
import * as nav from './components/navbar';
import * as ti from './components/title';
import * as me from './components/me';
import * as sk from './components/skills';
import * as co from './components/contact';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div>
      <nav.default />
      <ti.default />
      <me.default />
      <sk.default />
      <co.default />
    </div>
  );
}

export default App;
