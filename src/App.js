import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyComponent from './component/reactrefs/UseRefDemo'
import Sample from './component/sample';
import TableData from './component/example/tabledata';
import RefDemo from './component/reactrefs/RefDemo';
import ParentComponent from './component/example/forwardrefdemo/component2';
function App() {


  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark  bg-danger">

        <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        </ul>


        </div>

        </nav>
   <div>
      <ParentComponent/>
   </div>
  </div>

  );
}

export default App;
