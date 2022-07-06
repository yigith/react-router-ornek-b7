import './App.css';
import { Outlet, Link } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <header>
        <div className="App-marka">
            Kişisel Websitem<br />
            <small>kararlı adımlarla</small>
        </div>
        <nav className="nav-links">
          <Link to="/">Anasayfa</Link>
          <Link to="/hakkinda">Hakkında</Link>
          <Link to="/iletisim">Iletisim</Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Her hakkı saklıdır &copy; 
        {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
