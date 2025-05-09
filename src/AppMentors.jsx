import React, { useState } from "react";

export default function AppMentor() {
    const [person, setPerson] = useState({
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
    });

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

            <button
                onClick={() => {
                    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
                    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
                    setPerson({
                        ...person,
                        mentor: person.mentor.map((mentor) => {
                            if (mentor.name === prev) {
                                return { ...mentor, name: current };
                            }
                            return mentor;
                        }),
                    });
                }}
            >
                멘토 이름 바꾸기
            </button>
        </div>
    );
}
