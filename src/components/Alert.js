import React from 'react'

export default function Alert(props) {
  return (
<<<<<<< HEAD
    props.alert && <div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert.type}:</strong>  {props.alert.message}.
    </div>
=======
    props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
    <strong>{props.alert.type}:</strong>  {props.alert.message}
  </div>
>>>>>>> main
  )
}
