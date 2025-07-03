

import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { ROUTES } from './const'
import QuizPage from './Pages/QuizPage';
import StartPage from './Pages/StartPage';
import ResultPage from './Pages/ResultPage';

const App: React.FC = () => {

  return (
    <>
      <HashRouter>
        <Routes>
          <Route path={ROUTES.START} element={<StartPage />} />
          <Route path={ROUTES.QUIZ} element={<QuizPage />} />
          <Route path={ROUTES.RESULT} element={<ResultPage />} />
        </Routes>
      </HashRouter>

    </>
  )
}

export default App
