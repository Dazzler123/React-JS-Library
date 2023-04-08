export const Child = ({fromChild}) => {
    return (
        <div>
            <button onClick={() => fromChild("Children Content here.")}>Child Component</button>
        </div>
    )
}