import { Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import TodoPage from './pages/TodoPage';
import { HomeContainer, HomeDiv } from './styled-components/Home-styled';
import NotFound from './pages/NotFound';

function App() {
  return (
    <HomeContainer>
      <HomeDiv>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/signin' element={<SignInPage/>}/>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path='/todo' element={<TodoPage/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
      </HomeDiv>
    </HomeContainer>
  );
}

export default App;
