import React, { useReducer } from "react";
import personReducer from "./reducer/person-reducer";

export default function AppMentor() {
    const [person, dispatch] = useReducer(personReducer, initialPerson);

    const handleChange = () => {
        const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
        const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
        dispatch({ type: "updated", prev, current });
    };

    const handleAdd = () => {
        const name = prompt(`누구를 추가하고 싶은가요?`);
        const title = prompt(`멘토의 타이틀은 무엇인가요?`);
        dispatch({ type: "added", name, title });
    };

    const handleDelete = () => {
        const name = prompt(`누구를 삭제하고 싶은가요?`);
        dispatch({ type: "deleted", name });
    };

    return (
        <div>
            <h1>
                {person.name}은 {person.title}
            </h1>
            <p>{person.name}의 멘토는 :</p>
            <ul>
                {person.mentor.map((mentor, index) => (
                    <li key={index}>
                        {mentor.name} ({mentor.title})
                    </li>
                ))}
            </ul>

            <button onClick={handleChange}>멘토 이름 바꾸기</button>
            <button onClick={handleAdd}>멘토 추가하기</button>
            <button onClick={handleDelete}>멘토 삭제하기</button>
        </div>
    );
}

const initialPerson = {
    name: "홍길동",
    title: "개발자",
    mentor: [
        {
            name: "임꺽정",
            title: "시니어 개발자",
        },
        {
            name: "가우스",
            title: "시니어 개발자",
        },
    ],
};
