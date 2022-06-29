import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form/Form.js';
import BasicExampleDataGrid from './components/TabelData';
function App() {
  console.log("first")
  return (
    <div className="App">

     <Router>
      <Routes >
        <Route element={<BasicExampleDataGrid/>}  path= '/' />
        <Route element={<Form/>}  path= '/Add' />
        <Route element={<Form/>}  path= '/Add/:id' />
      </Routes>
     
     </Router>
    </div>
  );
}

export default App;
