import React, { useState } from "react";

export default function AppMentor() {
    const [person, setPerson] = useState({
        name: "홍길동",
        title: "개발자",
        mentor: {
            name: "임꺽정",
            title: "시니어 개발자",
        },
    });

    return (
        <div>
            <h1>
                {person.name}은 {person.title}
            </h1>
            <p>
                {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
            </p>

            <button
                onClick={() => {
                    const name = prompt(`what is your mentor's name?`);
                    setPerson({ ...person, mentor: { ...person.mentor, name: name } });
                }}
            >
                멘토 이름 바꾸기
            </button>
            <button
                onClick={() => {
                    const title = prompt(`what is your mentor's title?`);
                    setPerson({ ...person, mentor: { ...person.mentor, title: title } });
                }}
            >
                멘토 타이틀 바꾸기
            </button>
        </div>
    );
}
