export const User = (props) => {
    console.log(props)
  return (
      <div>
          <h1>{props.name}</h1>
          <h1>{props.address}</h1>
          <h1>{props.salary}</h1>
      </div>
  )
}