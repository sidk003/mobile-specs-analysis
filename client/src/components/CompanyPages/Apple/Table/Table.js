import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TablePagination,
  TableRow,
  Paper,
} from "@material-ui/core";
import EnhancedTableHead from "./EnhancedTableHead";
import useStyles from "./Styles";

const createData = (name, release, price) => {
  return { name, release, price };
};

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

const stableSort = (array, comparator) => {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};

export const PhoneTable = ({ table }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("release");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  var rows = [];
  var phone1 = "";
  var phone2 = "";
  var phone3 = "";
  var phone4 = "";
  var phone5 = "";
  var phone6 = "";
  var phone7 = "";
  var phone8 = "";
  var phone9 = "";
  var phone10 = "";
  var phone11 = "";
  var phone12 = "";
  var phone13 = "";

  if (table !== undefined && table.phone1 !== undefined) {
    phone1 = table.phone1;
    phone2 = table.phone2;
    phone3 = table.phone3;
    phone4 = table.phone4;
    phone5 = table.phone5;
    phone6 = table.phone6;
    phone7 = table.phone7;
    phone8 = table.phone8;
    phone9 = table.phone9;
    phone10 = table.phone10;
    phone11 = table.phone11;
    phone12 = table.phone12;
    phone13 = table.phone13;
  }

  rows = [
    createData(phone1.name, phone1.date, phone1.price),
    createData(phone2.name, phone2.date, phone2.price),
    createData(phone3.name, phone3.date, phone3.price),
    createData(phone4.name, phone4.date, phone4.price),
    createData(phone5.name, phone5.date, phone5.price),
    createData(phone6.name, phone6.date, phone6.price),
    createData(phone7.name, phone7.date, phone7.price),
    createData(phone8.name, phone8.date, phone8.price),
    createData(phone9.name, phone9.date, phone9.price),
    createData(phone10.name, phone10.date, phone10.price),
    createData(phone11.name, phone11.date, phone11.price),
    createData(phone12.name, phone12.date, phone12.price),
    createData(phone13.name, phone13.date, phone13.price),
  ];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover tabIndex={-1} key={row.name}>
                      <TableCell></TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        align="center"
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="center">{row.release}</TableCell>
                      <TableCell align="center">{row.price}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};
