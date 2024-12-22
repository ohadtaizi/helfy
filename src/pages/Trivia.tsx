import { useEffect, useState } from "react";
import { DB, Question } from "../data-providers/Server";

const Trivia = () => {

    const [questions, setQuestions] = useState<Question[]>([]);

    useEffect(() => {
        DB.getQuestions().then(questions => setQuestions(questions));
    }, [])


    return (
        <div>
            {JSON.stringify(questions, null, 2)}
        </div>
    )
}

export default Trivia
