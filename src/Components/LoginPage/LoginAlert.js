import {Alert} from 'react-bootstrap'

//Redux imports
import { connect } from 'react-redux'
import { handleAlert } from 'Redux/loginPage/loginPageActions'

const LoginAlert = (props) =>{

    const handleClose = () => {
        props.handleAlert(false)
    }
      return (
          <div>
                {
                    props.showAlert
                        &&
                    <Alert variant="danger" onClose={handleClose} dismissible>
                        Invalid credentials.
                    </Alert>
                }
          </div>
         
      ) 
  }

const mapStateTpProps = state => {
    return {
        showAlert: state.login.showAlert
    }
}
const mapDispatchToProps = dispatch => {
    return {
        handleAlert: (flag) => dispatch(handleAlert(flag)),
    }
}
  export default connect(mapStateTpProps, mapDispatchToProps)(LoginAlert) 
  