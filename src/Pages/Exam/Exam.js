import ExamTabs from 'Components/Exam/ExamTabs';
import 'Styles/Exam/Exam.css';
import { AppContext } from 'Context/AppContext';

const Exam = () => {
    return (
      <AppContext.Consumer>{(context) => {
        return(
            <div>
              {
                context.isLoggedIn
                      &&
                <div className="container">
                  <ExamTabs />
                </div>
              }
            </div>
        );
      }}
      </AppContext.Consumer>
      );
}
 
export default Exam;