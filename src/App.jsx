import {useState} from "react";
import Header from "./components/Header";
import Results from "./components/Results";
import UserInput from "./components/UserInput";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const inputIsVadlid = userInput.duration >= 1;
    const handleChange = (inputIdentifier, newValue) => {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: Number(newValue),
            };
        });
    };

    return (
        <>
            <Header />
            <UserInput userInput={userInput} onInputChange={handleChange} />
            {!inputIsVadlid && (
                <p className="center">
                    Please enter a duration greater than 0.
                </p>
            )}
            {inputIsVadlid && <Results input={userInput} />}
        </>
    );
}

export default App;
