import {Grid, TextField, Typography} from "@mui/material";

export const MUIForm = () => {

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
                <button type="button"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                         font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                          focus:outline-none dark:focus:ring-blue-800 col-12">Save
                </button>
            </div>
        </>
    )
}