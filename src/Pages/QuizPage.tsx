
import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Display from "../components/Display/Display"
import { QuizData } from "../data/QuizData"
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../const";
import StartLoading from "../Loading/StartLoading";



export default function QuizPage() {
    const [quizIndex, setQuizIndex] = useState(0);
    const [answerLogs, setAnswerLogs] = useState<boolean[]>([]);
    const navigate = useNavigate();
    const MAX_QUIZ_LEN = QuizData.length;
    const [isCurtain, setIsCurtain] = useState(true);





    const handleClick = (clickedIndex: number) => {
        if (clickedIndex === QuizData[quizIndex].answerIndex) {
            setAnswerLogs((prev) => [...prev, true]);
        } else {
            setAnswerLogs((prev) => [...prev, false]);
        }
        setQuizIndex((prev) => prev + 1);
    }

    useEffect(() => {
        if (answerLogs.length === QuizData.length) {

            const correctAnswers = answerLogs.filter((answer) => {
                return answer === true;
            })
            navigate("/result", {
                state: {
                    maxQuizLen: MAX_QUIZ_LEN,
                    correctAnswersLen: correctAnswers.length

                }
            });
        }
    }, [answerLogs]);



    return (
        <>
            {isCurtain && <StartLoading onFinish={() => setIsCurtain(false)} />}

            <div style={{ opacity: isCurtain ? 0 : 1, transition: "opacity 0.5s" }}>
                {QuizData[quizIndex] && <Display >{`第${quizIndex + 1}問　${QuizData[quizIndex].question}`}</Display>}
                {QuizData[quizIndex] && QuizData[quizIndex].options.map((option, index) => {
                    return (
                        <Button key={`question-${index}`} onClick={() => { handleClick(index) }}>
                            {option}
                        </Button>
                    )
                })}
                <br />
                <br />
                <Link to={ROUTES.START}>初めからやり直す</Link>
            </div>
        </>
    )
}

