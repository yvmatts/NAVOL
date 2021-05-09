import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {courseList} from '../../Pages/Academics/courses'

const TableComponent = (props) => {
    return (  
        <div className="table">
            <TableContainer component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            {
                                props.cols.map((col) => (
                                    <TableCell key={col.name} align={col.align}>{col.name}</TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            courseList.map((course) => (
                                <TableRow key={course.name}>
                                    <TableCell component="th" scope="row">
                                    {course.name}
                                    </TableCell>
                                    <TableCell align="right">{course.avg}</TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
            </TableContainer>   
        </div>
      );
}
 
export default TableComponent;