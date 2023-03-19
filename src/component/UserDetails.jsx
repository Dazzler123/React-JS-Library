import {User} from "./User";

export const UserDetails = () => {
  const user = {
      name : "Dasindu",
      address : "Wattala",
      salary : "15000.00"
  };

  return (
      <div>
          <User name={user.name} address={user.address} salary={user.salary}/>
          {/*using props*/}
      </div>
  )
}