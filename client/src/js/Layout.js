import generateTinyURLarr from "./test"
import { useState } from 'react'

export default function Layout() {
    const [tinyURL, tinyURLdispatcher] = useState('Your URL');
    return (
        <>
            <h1>Generate a TinyURL</h1>
            <label for="userInput"> Enter your URL: </label>
            <input name="userInput" />
            <button onClick={() => generateTinyURLarr(tinyURLdispatcher)}>Submit</button>
            <h2>tinyurl.com/{tinyURL}</h2>
        </>
    )
}