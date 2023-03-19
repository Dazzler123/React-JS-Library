import {Student} from "./Student";

export const StudentDetails = () => {
   const obj = {
       name : "Dasindu",
       course : "RWAD",
       batch : "59",
       address : "Gampaha",
   }

   return (
       <Student name={obj.name} course={obj.course} batch={obj.batch} address={obj.address}></Student>
   )
}