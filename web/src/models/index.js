import Table from 'react-bootstrap/Table';

function Models() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th colspan={3}>Model</th>
                    <th colspan={3}>Vehicle</th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Series</th>
                    <th>Manufacturer </th>
                    <th>Country</th>
                    <th>Year</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Hylux</td>
                    <td>Hot Wheels</td>
                    <td>Mainline</td>
                    <td>Toyota</td>
                    <td>Japan</td>
                    <td>2019</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default Models;