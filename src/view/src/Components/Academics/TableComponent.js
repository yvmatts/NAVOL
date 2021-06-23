import 'Styles/Academics/Component/TableComponent.css';
import Table from 'react-bootstrap/Table';

const TableComponent = (props) => {
    return (  
        <div className="table-container">
            <Table striped bordered hover responsive className="table">
            <thead>
                <tr>
                {
                    props.cols.map((col) => (
                        <th key={col.name} align="center">{col.name}</th>
                    ))
                }
                </tr>
            </thead>
            <tbody> 
                {
                    Object.keys(props.courseInfo).map((keyName, keyIndex) => (
                        <tr key={keyIndex}>
                            <td>
                            {keyName}
                            </td>
                            <td>{props.courseInfo[keyName]}</td>
                        </tr>
                    ))
                }
            </tbody>
            </Table>
        </div>
      );
}
 
export default TableComponent;