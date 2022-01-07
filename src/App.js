import Home from './Home';
import Student from './Student'
import Contact from './Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Student_desc from './Student_desc';
import {Studentprovide} from './CreateContext'


function App() {
  return (
    <Studentprovide>

        <Router>
        <Header/>

          <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/student' element={<Student/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/student_desc' element={<Student_desc/>}>
              <Route path=':id' element={<Student_desc/>}></Route>
            </Route>

          </Routes>

        </Router>

    </Studentprovide>
  );
}

export default App;

