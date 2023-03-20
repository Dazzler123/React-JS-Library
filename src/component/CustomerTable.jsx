import Bootstrap from "bootstrap";
import $ from 'jquery';

export const CustomerTable = (props) => {
    console.log(props)
    var row = `<tr><td>{props.name}</td><td>{props.address}</td><td>{props.contactNo}</td><td>{props.salary}</td></tr>`;
    $('#tblCustomers').append(row);
}