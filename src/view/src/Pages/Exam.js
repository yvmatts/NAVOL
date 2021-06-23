import React  from 'react';
import { connect } from 'react-redux'
import ExamTabs from 'Components/Exam/ExamTabs';
import 'Styles/Exam/Exam.css';


const Exam = (props) => {

    return (
            <div>
              {
                props.isLoggedIn
                      &&
                <div className="container">
                  <ExamTabs />
                </div>
              }
            </div>
      );
}
 
const mapStateTpProps = state => {
  return {
      isLoggedIn : state.auth.isLoggedIn
  }
}

export default connect(mapStateTpProps)(Exam);
