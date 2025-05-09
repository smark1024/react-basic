function personReducer(person, action) {
    switch (action.type) {
        case "updated": {
            const { prev, current } = action;
            return {
                ...person,
                mentor: person.mentor.map((mentor) => {
                    if (mentor.name === prev) {
                        return { ...mentor, name: current };
                    }
                    return mentor;
                }),
            };
        }
        case "added": {
            const { name, title } = action;
            return {
                ...person,
                mentor: [...person.mentor, { name, title }],
            };
        }
        case "deleted": {
            const { name } = action;
            return {
                ...person,
                mentor: person.mentor.filter((mentor) => mentor.name !== name),
            };
        }
        default: {
            throw Error(`알 수 없는 액션 타입입니다. : ${action.type}`);
        }
    }
}

export default personReducer;
