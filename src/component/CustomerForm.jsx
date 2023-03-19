export const CustomerForm = () => {
    return (
        <div>
            <h1 className="customerForm">Customer Registration Form</h1>
            <br/>
            <input id="name" type="text"/>
            <br/>
            <input id="address" type="text"/>
            <br/>
            <input id="salary" type="text"/>
            <br/>
            <input id="contactNo" type="text"/>
            <br/>
            <button>Save Details</button>
            <button>Reset</button>
        </div>
    )
}