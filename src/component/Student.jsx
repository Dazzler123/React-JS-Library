export const Student = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.course}</td>
            <td>{props.batch}</td>
            <td>{props.address}</td>
        </tr>
    )
}