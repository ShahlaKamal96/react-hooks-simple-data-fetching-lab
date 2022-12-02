import React, { useState, useEffect } from "react";

function App() {
    const [data, setData] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((fetchedData) => {
                setData(fetchedData.message);
                setIsLoading(true)
            });
    }, []);

    if (!isLoading) return <p>Loading...</p>;

    return (
        <img src={data} alt="A Random Dog" />
    );
}

export default App;

