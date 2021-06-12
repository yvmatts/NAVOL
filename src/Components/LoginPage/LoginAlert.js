import {Alert} from 'react-bootstrap'

const LoginAlert = (props) =>{
      return (
          <div>
                {
                    props.showAlert
                        &&
                    <Alert variant="danger" onClose={(fasle) => props.handleAlertClose(false)} dismissible>
                        Invalid credentials.
                    </Alert>
                }
          </div>
         
      ) 
  }

  export default LoginAlert 
  