import React, { useState } from 'react'
import './MoodTogger.css'
export const MoodToggler = () => {
    const [isHappy, setIsHappy] = useState(true);

    const toggleIsHappy = () => setIsHappy(!isHappy)
    const styles = { color: isHappy ? 'green' : 'red' };

    return (
        <div>
            <h3 className="moodToggler" style={styles} onClick={toggleIsHappy}>{isHappy ? ":-)" : ":-("}</h3>
        </div>
    )
}
