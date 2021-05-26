import React, {useContext} from 'react';
import ExamTabs from 'Components/Exam/ExamTabs';
import 'Styles/Exam/Exam.css';
import { AppContext } from 'Context/AppContext';

const Exam = () => {
  const appContext = useContext(AppContext);

    return (
            <div>
              {
                appContext.isLoggedIn
                      &&
                <div className="container">
                  <ExamTabs />
                </div>
              }
            </div>
      );
}
 
export default Exam;