import {useState} from "react";

export const Forms = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const handleonclicksubmit = (e) => {
        e.preventDefault();
        // console.log(e)

        const data = {
            formName: name,
            formAddress: address,
            formEmail: email,
            formAge: age,
        }

        console.log(data.formName)
        console.log(data.formAddress)
        console.log(data.formEmail)
        console.log(data.formAge)
    }

    return (
        <div>
            <form className="col-8 mx-auto" onSubmit={handleonclicksubmit}>
                <label htmlFor="exampleInputName1" className="form-label font-monospace">Name</label>
                <input value={name} type="text" className="form-control" id="exampleInputName1"
                       onChange={e => setName(e.target.value)} aria-describedby="emailHelp"/>
                <label htmlFor="exampleInputAddress1" className="form-label font-monospace">Address</label>
                <input value={address} type="text" className="form-control" id="exampleInputAddress1"
                       onChange={e => setAddress(e.target.value)} aria-describedby="emailHelp"/>
                <label htmlFor="exampleInputEmail1" className="form-label font-monospace">Email</label>
                <input value={email} type="text" className="form-control" id="exampleInputEmail1"
                       onChange={e => setEmail(e.target.value)} aria-describedby="emailHelp"/>
                <label htmlFor="exampleInputAge1" className="form-label font-monospace">Age</label>
                <input value={age} type="text" className="form-control" id="exampleInputAge1"
                       onChange={e => setAge(e.target.value)} aria-describedby="emailHelp"/>
                <br/>
                <br/>
                <div className="btn-group-vertical col-6 mx-auto btn-group-lg" role="group"
                     aria-label="Vertical button group">
                    <button type="submit" className="btn btn-success mb-3">Save</button>
                    <button type="reset" className="btn btn-secondary">Reset</button>
                </div>
            </form>
        </div>
    )
}