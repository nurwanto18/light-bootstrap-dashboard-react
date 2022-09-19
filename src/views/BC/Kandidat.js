import React from "react";
import { DataGrid, GridApi, GridCellValue} from '@mui/x-data-grid';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
// react-bootstrap components
import {
  Card,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Candidate name',
    sortable: true,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'createdDate',
    headerName: 'Created Date',
    sortable: true,
    width: 200
  },
  {
    field: "actionDetail",
    headerName: "",
    sortable: false,
    filterable: false,
    disableColumnMenu: false,
    width: 30,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };
      return <SearchOutlinedIcon onClick={onClick}>Click</SearchOutlinedIcon>;
    }
  },
  {
    field: "actionEdit",
    headerName: "",
    sortable: false,
    filterable: false,
    width: 30,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };
      return <EditOutlinedIcon onClick={onClick}>Click</EditOutlinedIcon>;
    }
  },
  {
    field: "actionDelete",
    headerName: "",
    sortable: false,
    filterable: false,
    width: 30,
    renderCell: (params) => {
      const onClick = (e) => {
        e.stopPropagation(); // don't select this row after clicking

        api
          .getAllColumns()
          .filter((c) => c.field !== "__check__" && !!c)
          .forEach(
            (c) => (thisRow[c.field] = params.getValue(params.id, c.field))
          );

        return alert(JSON.stringify(thisRow, null, 4));
      };
      return <DeleteOutlineOutlinedIcon onClick={onClick}>Click</DeleteOutlineOutlinedIcon>;
    }
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', createdDate: '19-10-2022'},
  { id: 2, lastName: 'Luke', firstName: 'Sam', createdDate: '22-02-2022'},
  { id: 3, lastName: 'Hong', firstName: 'Wan', createdDate: '13-08-2022'},
  { id: 4, lastName: 'Ha', firstName: 'Steve', createdDate: '05-10-2022'},
  { id: 5, lastName: 'Sophie', firstName: 'Yan', createdDate: '05-10-2022'},
  { id: 6, lastName: 'Chan', firstName: 'Hitomi', createdDate: '05-10-2022'},
];

function Kandidat() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                {/* <Card.Title as="h3">Master Management</Card.Title> */}
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
              <div style={{ height: 400, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={10}
                  rowsPerPageOptions={[5]}
                  // disableColumnSelector={true}
                  disableSelectionOnClick={true}
                />
              </div>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default Kandidat;
