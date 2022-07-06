import { Link } from 'react-router-dom'

function Hakkinda() {
  return (
    <div>
      <h1>Hakkında</h1>
      <p>Velit culpa quidem in cum impedit voluptatibus, eius blanditiis eos, adipisci deleniti reiciendis temporibus expedita nobis a corporis numquam delectus nostrum aperiam nisi! Quia esse odit officia explicabo id ab.</p>
      <p>
        <Link to="/hakkinda/ozgecmis">Özgeçmişi Göster</Link>
      </p>
    </div>
  );
}

export default Hakkinda;