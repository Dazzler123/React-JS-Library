export const EventListener = () => {
    const handleOnClickNav = (e) => {
        e.stopPropagation();
        alert("Nav Clicked!");
    }

    const handleOnClickSubmit = (e) => {
        e.stopPropagation();
        alert("Submit Clicked!");
    }

    const handleOnClickReset = (e) => {
        e.stopPropagation();
        alert("Reset Clicked!");
    }

    return (
        <div className="nav-bar" onClick={handleOnClickNav}>
            <button onClick={handleOnClickSubmit}>Submit</button>
            <button onClick={handleOnClickReset}>Reset</button>
        </div>
    )
}