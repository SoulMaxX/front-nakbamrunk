import * as React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Grid from "@mui/material/Grid";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import axios from "axios";
import { useRouter } from "next/router";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// Create new Modal
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
// End Create new Modal

function EmployeesList(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

EmployeesList.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, image, email, phone, address, joiningDate) {
  return {
    name,
    image,
    email,
    phone,
    address,
    joiningDate,
  };
}

const rows = [
  createData(
    "Evangelina Mcclain",
    "/images/user1.png",
    "jordansteve@gmail.com",
    "085448877",
    "bangkok",
    "5/4/2560",
  ),
  createData(
    "Candice Munoz",
    "/images/user2.png",
    "candicemunoz@gmail.com",
    "080547532",
    "bangkok",
    "1/2/2561",
  ),
  createData(
    "Mike Mcclain",
    "/images/user3.png",
    "mikemcclain@gmail.com",
    "0815678422",
    "bangkok",
    "1/5/2566",
  ),

].sort((a, b) => (a.name < b.name ? -1 : 1));

export default function EmployeesLists(props) {
  const { datas } = props
  const router = useRouter();

  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - datas.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Create new modal
  const [open, setOpen] = React.useState(false);
  const [id, setId] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };
  // End Create new Modal

  const handleDelete = (e) => {
    console.log(token)
    axios.put(`${process.env.NEXT_PUBLIC_API}/admin/delete_Employee?id=` + id, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => router.reload())
  }

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 20px 15px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            รายชื่อพนักงาน
          </Typography>

          <Button
            href="/employee/create-employee"
            // onClick={handleClickOpen}
            variant="contained"
            sx={{
              textTransform: "capitalize",
              borderRadius: "8px",
              fontWeight: "500",
              fontSize: "13px",
              padding: "12px 20px",
              color: "#fff !important",
            }}
          >
            <AddIcon
              sx={{ position: "relative", top: "-1px" }}
              className='mr-5px'
            />{" "}
            เพิ่มพนักงาน
          </Button>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table
            sx={{ minWidth: 800 }}
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  ชื่อ-นามสกุล
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Email
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  เบอร์โทรศัพท์
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  ที่อยุ่
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  วันที่เริ่มงาน
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? datas.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                : datas
              ).map((row) => (
                <TableRow key={row.id}>
                  <TableCell
                    style={{
                      width: 250,
                      borderBottom: "1px solid #F7FAFF",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        ml: '10px'
                      }}
                    >
                      <img
                        src={`${process.env.NEXT_PUBLIC_API}/admin/get_photo?id=` + row.id}
                        alt="User"
                        width={40}
                        height={40}
                        className="borRadius100"
                      />
                      <Box className='ml-10px'>
                        <Typography
                          as="h5"
                          sx={{
                            fontWeight: "500",
                            fontSize: "13.5px",
                          }}
                        >
                          {row.name + " " + row.surname}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "13px",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                    }}
                  >
                    {row.email}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      fontSize: "13px",
                    }}
                  >
                    {row.phoneNumber}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      fontSize: "13px",
                    }}
                  >
                    {row.address}
                  </TableCell>
                  <TableCell
                    align="center"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                      fontSize: "13px",
                    }}
                  >
                    {new Date(row.datestart).toLocaleDateString("th-th")}

                  </TableCell>

                  <TableCell
                    align="right"
                    sx={{ borderBottom: "1px solid #F7FAFF" }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                      }}
                    >


                      <Tooltip title="Rename" placement="top">
                        <IconButton
                          href={"/employee/edit-employee/"+row.id}
                          aria-label="rename"
                          size="small"
                          color="primary"
                          className="primary"
                        >
                          <DriveFileRenameOutlineIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Remove" placement="top">
                        <IconButton
                          onClick={() => { setOpen(true), setId(row.id) }}
                          aria-label="remove"
                          size="small"
                          color="danger"
                          className="danger"
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell
                    colSpan={7}
                    style={{ borderBottom: "1px solid #F7FAFF" }}
                  />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={8}
                  count={datas.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={EmployeesList}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

      {/* Create new modal */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#EDEFF5",
              borderRadius: "8px",
              padding: "20px 20px",
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              sx={{
                fontWeight: "500",
                fontSize: "18px",
              }}
            >
              ต้องการลบพนักงานรายนี้?
            </Typography>

            <IconButton
              aria-label="remove"
              size="small"
              onClick={handleClose}
            >
              <ClearIcon />
            </IconButton>
          </Box>

          <Box >
            <Box
              sx={{
                background: "#fff",
                padding: "20px 20px",
                borderRadius: "8px",
              }}
            >
              <Grid item xs={12} textAlign="center">
                <Button
                  type="submit"
                  variant="contained"
                  color="danger"

                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "12px 20px",
                    color: "#fff !important",
                  }}
                  className='mr-15px'
                  onClick={handleDelete}
                >

                  ลบ
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    textTransform: "capitalize",
                    borderRadius: "8px",
                    fontWeight: "500",
                    fontSize: "13px",
                    padding: "12px 20px",
                    color: "#fff !important",
                  }}
                  onClick={handleClose}
                >

                  ยกเลิก
                </Button>


              </Grid>
            </Box>
          </Box>
        </Box>
      </BootstrapDialog>
    </>
  );
}
