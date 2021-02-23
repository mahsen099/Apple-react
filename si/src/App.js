import './App.css';
import './css/styles.css'
import Footer from './Component/Footer/Footer';
import Nav from './Component/Nav/Nav';
import Alertsection from './Component/Alertsection/Alertsection';
import Main1 from './Component/Main1/Main1';
import Main2 from './Component/Main2/Main2';
import Main3 from './Component/Main3/Main3';
import Main4 from './Component/Main4/Main4';
import Main5 from './Component/Main5/Main5';
import Main6 from './Component/Main6/Main6';
import Videos from './Component/Videos/Videos';

function App() {
  return (
    <div>
      <Nav />
      <Alertsection />
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
      <Videos />
      <Footer />
    </div>
  );
}

export default App;
