import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "name", label: "Name", minWidth: 100 },
  {
    id: "age",
    label: "Age",
    minWidth: 75,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "gender",
    label: "Gender",
    minWidth: 100,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "educationLevel",
    label: "Education Level",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "jobTitle",
    label: "Job Title",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "yearsOfExperience",
    label: "Years of Experience",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "salary",
    label: "Salary",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
    align: "center",
    format: (value) => value.toLocaleString("en-US"),
  },
];

function createData(
  name,
  age,
  gender,
  educationLevel,
  jobTitle,
  yearsOfExperience,
  salary,
  action
) {
  return {
    name,
    age,
    gender,
    educationLevel,
    jobTitle,
    yearsOfExperience,
    salary,
    action,
  };
}

const rows = [
  createData(
    "Franny Frail",
    "1",
    "Male",
    "Geological Engineer",
    "Paralegal",
    "1",
    "2685948171"
  ),
  createData(
    "Eberhard Poulney",
    "2",
    "Male",
    "Cost Accountant",
    "Associate Professor",
    "2",
    "9970218646"
  ),
  createData(
    "Hedda Boother",
    "3",
    "Female",
    "Software Engineer II",
    "Senior Editor",
    "3",
    "7789303813"
  ),
  createData(
    "Kassey Wurst",
    "4",
    "Female",
    "Senior Editor",
    "Nuclear Power Engineer",
    "4",
    "1999554078"
  ),
  createData(
    "Kendal Robertis",
    "5",
    "Male",
    "Nuclear Power Engineer",
    "Compensation Analyst",
    "5",
    "0137789785"
  ),
  createData(
    "Merill Blumsom",
    "6",
    "Male",
    "Administrative Assistant II",
    "Food Chemist",
    "6",
    "8250077849"
  ),
  createData(
    "Sally Laguerre",
    "7",
    "Female",
    "Programmer IV",
    "Design Engineer",
    "7",
    "1681786982"
  ),
  createData(
    "Evania Allridge",
    "8",
    "Female",
    "Electrical Engineer",
    "Help Desk Operator",
    "8",
    "2173923420"
  ),
  createData(
    "Hallsy Tebbut",
    "9",
    "Male",
    "Recruiting Manager",
    "Senior Cost Accountant",
    "9",
    "6849632965"
  ),
  createData(
    "Sella Pringer",
    "10",
    "Female",
    "Chief Design Engineer",
    "Occupational Therapist",
    "10",
    "7891157995"
  ),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 340 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
