import {Button} from "react-bootstrap";

export const Child = ({fromChild}) => {
    return (
        <div>
            <Button variant="primary" onClick={() => fromChild("Children Content here.")}>
                Child Component</Button>{' '}
        </div>
    )
}