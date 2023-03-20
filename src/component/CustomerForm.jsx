import Bootstrap from 'bootstrap';
import $ from 'jquery';
import {CustomerTable} from "./CustomerTable";

export const CustomerForm = () => {
    let obj = {};

    // save customer details
    function saveCustomer() {
        let name = $('#txtName').val();
        let address = $('#txtAddress').val();
        let contactNo = $('#txtContactNo').val();
        let salary = $('#txtSalary').val();

        //wrap as an object
        obj = {
            name: name,
            address: address,
            contactNo: contactNo,
            salary: salary
        }

        //print values
        console.log("Name : " + name);
        console.log("Address : " + address);
        console.log("Contact No : " + contactNo);
        console.log("Salary : " + salary);

        alert("Customer Saved Successfully!");

        return (
            <CustomerTable name={obj.name} address={obj.address} contactNo={obj.contactNo} salary={obj.salary}/>
        )
    }

    //clear text fields
    function clearFields() {
        $('#txtName').val("");
        $('#txtAddress').val("");
        $('#txtContactNo').val("");
        $('#txtSalary').val("");
    }

    return (
        <div className="col-6 container mx-auto">
            <h1 className="fs-1 mt-5 mb-5 text-center fw-bolder">Customer Registration Form</h1>
            <div className="input-group mb-3 row col-12 g-4">
                <label htmlFor="">
                    Customer Name : <input id="txtName" className="form-control" type="text"
                                           placeholder="Dasindu Hewagamage"/>
                </label>

                <br/>
                <br/>
                <label htmlFor="">
                    Customer Address : <input id="txtAddress" className="form-control" type="text"
                                              placeholder="Wattala"/>
                </label>

                <br/>
                <br/>
                <label htmlFor="">
                    Customer Contact No. : <input id="txtContactNo" className="form-control" type="text"
                                                  placeholder="0762093848"/>
                </label>

                <br/>
                <br/>
                <label htmlFor="">
                    Customer Salary : <input id="txtSalary" className="form-control" type="text"
                                             placeholder="13000.00"/>
                </label>
            </div>

            <div className="row col-12 mx-auto mb-2">
                <button type="button" className="btn btn-outline-success me-3 col-5" onClick={saveCustomer}>Save
                    Customer
                </button>
                <button type="button" className="btn btn-outline-primary col-5" onClick={clearFields}>Reset</button>
            </div>

            <table className="table table-bordered table-hover caption-top">
                <caption className="ms-3 mb-1 mt-4">Customer Details Table</caption>
                <thead className="table-primary text-center">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Contact No.</th>
                    <th scope="col">Salary</th>
                </tr>
                </thead>
                <tbody id="tblCustomers" className="table-group-divider">
                </tbody>
            </table>
        </div>
    )
}