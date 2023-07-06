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

function createData(name, bank, branch, type, bookbank) {
  return {
    name,
    bank,
    branch,
    type,
    bookbank,
  };
}

const rows = [
  createData(
    "Evangelina ",
    "BBL",
    "สาทร",
    "ออมทรัพย์",
    "1234567890",
  ),
  createData(
    "Mcclain",
    "SCB",
    "บางนา",
    "กระแสรายวัน",
    "1111111111",
  ),

].sort((a, b) => (a.name < b.name ? -1 : 1));

export default function BookbanksLists(props) {
  const { datas, role } = props
  const router = useRouter();
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [id, setId] = React.useState('');

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

  const handleDelete = (e) => {
    axios.put(`${process.env.NEXT_PUBLIC_API}/finance/delete_bank?id=` + id, {}, {
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
            ชื่อบัญชีธนาคาร
          </Typography>

          <Button
            href={role.menuFinance?.create == 0 ? "" : "/finance/create-bookbank"}
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
            disabled={role.menuFinance?.create == 0}
          >
            <AddIcon
              sx={{ position: "relative", top: "-1px" }}
              className='mr-5px'
            />{" "}
            เพิ่มบัญชีธนาคาร
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
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  ชื่อบัญชี
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  ชื่อธนาคาร
                </TableCell>
                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  สาขา
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  ประเภทบัญชี
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  เลขบัญชีธนาคาร
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>
            {role.menuFinance?.delete == 0 ? "" :
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
                      align="center"
                      style={{
                        borderBottom: "1px solid #F7FAFF",
                        fontSize: "13px",
                        paddingTop: "13px",
                        paddingBottom: "13px",
                      }}
                    >
                      {row.nameAccount}
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
                      {row.nameBank}
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
                      {row.branchBank}
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
                      {row.type}
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
                      {row.accountNumber}
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
                            href={role.menuFinance?.edit == 0 ? "" : ("/finance/edit-bookbank/" + row.id)}
                            aria-label="rename"
                            size="small"
                            color="primary"
                            className="primary"
                            disabled={role.menuFinance?.edit == 0}

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
                            disabled={role.menuFinance?.delete == 0}

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
            }
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
              ต้องการลบ?
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
