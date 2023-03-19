import Bootstrap from 'bootstrap';
import $ from 'jquery';

export const CustomerForm = () => {
    // save customer details
    function saveCustomer() {
        alert("Customer Saved Successfully!");
    }

    //clear text fields
    function clearFields() {
        $('#txtName').val("")
        $('#txtAddress').val("")
        $('#txtContactNo').val("")
        $('#txtSalary').val("")
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

            <div className="row col-12 mx-auto">
                <button type="button" className="btn btn-outline-success me-3 col-5" onClick={saveCustomer}>Save
                    Customer
                </button>
                <button type="button" className="btn btn-outline-primary col-5" onClick={clearFields}>Reset</button>
            </div>
        </div>
    )
}