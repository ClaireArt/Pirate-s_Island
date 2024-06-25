import './App.css';
import Footer from './Components/footer/Footer';
import Header from './Components/header/Header';
import Main from './Components/main/Main';
import MiniFooter from './Components/mini_footer/MiniFooter';
import Nav from './Components/nav/Nav';

function App() {
  return (
    <div className="App">
      <section>
        <Nav />
        <Header />
        <Main />
        <Footer />
      </section>
      <MiniFooter />
    </div>
  );
}

export default App;
