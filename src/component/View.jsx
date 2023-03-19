import {StudentDetails} from "./StudentDetails";

export const View = () => {
   return (
       <table id="tblStudent">
           <thead>
           <tr>
               <th scope="col">Student Name</th>
               <th scope="col">Course</th>
               <th scope="col">Batch</th>
               <th scope="col">Address</th>
           </tr>
           </thead>
           <tbody>
                <StudentDetails/>
           </tbody>
       </table>
   )
}