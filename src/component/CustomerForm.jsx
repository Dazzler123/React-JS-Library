export const CustomerForm = () => {
    return (
        <div>
            <h1 className="customerForm">Customer Registration Form</h1>
            <br/>
            <input id="name" type="text" placeholder="Enter Name"/>
            <br/>
            <input id="address" type="text" placeholder="Enter Address"/>
            <br/>
            <input id="contactNo" type="text" placeholder="Enter Contact No."/>
            <br/>
            <input id="salary" type="text" placeholder="Enter Salary"/>
            <br/>
            <br/>
            <button>Save Details</button>
            <button>Reset</button>
        </div>
    )
}