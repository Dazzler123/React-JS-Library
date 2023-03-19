export const FullName = () => {
    const obj = {
        name: "Dasindu",
        address: "Gampaha",
        propic: "https://picsum.photos/seed/picsum/700/500"
    };

    const greeting = () => {
        if (obj.name != null) {
            return <h1>Hello {obj.name}!</h1>
        } else {
            return <h1>Hi There!</h1>
        }
    }

    return (
        <div className="App">
            <h1>HELLO REACT</h1>
            <h1>{greeting}</h1>
            <img src={obj.propic} alt="hello"></img>
        </div>
    );
};