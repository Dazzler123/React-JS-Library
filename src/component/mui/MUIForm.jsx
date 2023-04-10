import {Grid, TextField, Typography} from "@mui/material";
import Swal from "sweetalert2";

export const MUIForm = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    })

    function showAlert() {
        Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
        })

        Swal.fire(
            'The Internet?',
            'That thing is still around?',
            'success'
        )
    }

    return (
        <>
            <h1 className="mt-5 text-center fs-2 font-thin">Student Registration Form</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 col-8 mx-auto mt-5">
                <div className="bg-gray-200 p-4">
                    <TextField id="outlined-basic"
                               label="Outlined"
                               variant="outlined"
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <TextField id="outlined-basic"
                               label="Outlined"
                               variant="outlined"
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <TextField id="outlined-basic"
                               label="Outlined"
                               variant="outlined"
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <TextField id="outlined-basic"
                               label="Outlined"
                               variant="outlined"
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <TextField id="outlined-basic"
                               label="Outlined"
                               variant="outlined"
                    />
                </div>
                <div className="bg-gray-200 p-4">
                    <TextField id="outlined-basic"
                               label="Outlined"
                               variant="outlined"
                    />
                </div>
            </div>
            <div className="col-8 mx-auto mt-5">
                <button type="button" onClick={showAlert}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                         font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                          focus:outline-none dark:focus:ring-blue-800 col-12">Save
                </button>
            </div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">Add a new product</h2>
                    <form action="#">
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <div className="sm:col-span-2">
                                <label htmlFor="name"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product
                                    Name</label>
                                <input type="text" name="name" id="name"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Type product name" required=""/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="brand"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand</label>
                                <input type="text" name="brand" id="brand"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="Product brand" required=""/>
                            </div>
                            <div className="w-full">
                                <label htmlFor="price"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                <input type="number" name="price" id="price"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="$2999" required=""/>
                            </div>
                            <div>
                                <label htmlFor="category"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                <select id="category"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                    <option selected="">Select category</option>
                                    <option value="TV">TV/Monitors</option>
                                    <option value="PC">PC</option>
                                    <option value="GA">Gaming/Console</option>
                                    <option value="PH">Phones</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="item-weight"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item
                                    Weight (kg)</label>
                                <input type="number" name="item-weight" id="item-weight"
                                       className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                       placeholder="12" required=""/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="description"
                                       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                <textarea id="description" rows="8"
                                          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                          placeholder="Your description here"></textarea>
                            </div>
                        </div>
                        <button type="submit"
                                className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                            Add product
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}