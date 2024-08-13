import React, { useState, useMemo } from 'react';

export default function Demo() {
    const [num, setNum] = useState(0);
    const [num2,setNum2] = useState(0);
    const answer = useMemo(() => {
        if (num === 12) {
            return 'yes';
        }
        return 'no';
    }, [num]);

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>Button</button>
            <button onClick={() => setNum2(num2 + 1)}>Button2222</button>
            num: {num}
            <div>Answer: {answer}</div>
        </div>
    );
}
