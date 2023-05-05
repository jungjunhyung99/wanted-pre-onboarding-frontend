import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import TodoPage from './pages/TodoPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signin' element={<SignInPage/>}></Route>
        <Route path='/signup' element={<SignUpPage/>}></Route>
        <Route path='/todo' element={<TodoPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
