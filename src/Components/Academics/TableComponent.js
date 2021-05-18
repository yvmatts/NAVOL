import 'Styles/Academics/Component/TableComponent.css'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const TableComponent = (props) => {
    return (  
        <div className="table-container">
            <TableContainer component={Paper}>
                <Table aria-label="customized table" className="table">
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
                            Object.keys(props.courseInfo).map((keyName, keyIndex) => (
                                <TableRow key={keyIndex} className="table-cell">
                                    <TableCell component="th" scope="row">
                                    {keyName}
                                    </TableCell>
                                    <TableCell align="right">{props.courseInfo[keyName]}</TableCell>
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