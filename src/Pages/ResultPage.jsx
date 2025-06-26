
import { Link, useLocation } from "react-router-dom"
import { ROUTES } from "../const";
import Confetti from "react-confetti";
import Result from "../components/Result/Result";
import EndLoading from "../Loading/EndLoading";
import { useEffect, useState } from "react";



export default function ResultPage() {
  const [isActive, setActive] = useState(false);

  const location = useLocation();
  const maxQuizLen = location.state.maxQuizLen;
  const correctAnswersLen = location.state.correctAnswersLen;

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 3000);
  }, [])

  return (
    <>
      <EndLoading isActive={isActive} />
      <Result maxQuizLen={maxQuizLen} correctAnswersLen={correctAnswersLen} />
      <br />
      <Link to={ROUTES.START}>スタートページへ戻る</Link>
      {correctAnswersLen >= 3 && <Confetti />}
    </>
  )
}
