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

function RolesList(props) {
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

RolesList.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(role, permission1, permission2, permission3, permission4, permission5, permission6, permission7, permission8, permission9,) {
  return {
    role,
    permission1,
    permission2,
    permission3,
    permission4,
    permission5,
    permission6,
    permission7,
    permission8,
    permission9,

  };
}

const rows = [
  createData(
    "Sales ",
    "1.การซื้อ  View Create Edit ",
    "2.การชาย  View Create Edit ",
    "3.จัดการสินค้า  View Create Edit ",
    "4.จัดการคล้งสินค้า  View Create Edit ",
    "5.ลูกค้า  View Create Edit ",
    "6.เจ้าหนี้  View Create Edit ",

  ),
  createData(
    "Admin",
    "1.การซื้อ  View Create Edit Delete",
    "2.การชาย  View Create Edit Delete",
    "3.จัดการสินค้า  View Create Edit Delete",
    "4.จัดการคล้งสินค้า  View Create Edit Delete",
    "5.ลูกค้า  View Create Edit Delete",
    "6.เจ้าหนี้  View Create Edit Delete",
    "7.การเงิน  View Create Edit Delete",
    "8.ธุรการ  View Create Edit Delete",
    "9.จัดการระบบ  View Create Edit Delete",

  ),

].sort((a, b) => (a.username < b.username ? -1 : 1));

export default function RolesLists(props) {
  const { datas } = props;
  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const router = useRouter();
  const token = typeof window !== "undefined" ? window.localStorage.getItem("token") : ""

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
  const [id, setId] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {

    axios.delete(`${process.env.NEXT_PUBLIC_API}/role/delete_role/` + id, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => router.reload())

  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };
  // End Create new Modal

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
          </Typography>

          <Button
            href="/admin/create-role"
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
            เพิ่มบทบาท
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
                  บทบาท
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  สิทธิการใช้งาน
                </TableCell>


                <TableCell
                  align="center"
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
                <TableRow key={row.name}>


                  <TableCell
                    align="center"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "13px",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                    }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell
                    align="left"
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "13px",
                      paddingTop: "13px",
                      paddingBottom: "13px",
                    }}
                  >
                    เมนูการซื้อ: {row.menuBuy.view == 1 ? "view" : ""} {row.menuBuy.create == 1 ? "create" : ""} {row.menuBuy.edit == 1 ? "edit" : ""} {row.menuBuy.delete == 1 ? "delete" : ""}<br />
                    เมนูการขาย: {row.menuSell.view == 1 ? "view" : ""} {row.menuSell.create == 1 ? "create" : ""} {row.menuSell.edit == 1 ? "edit" : ""} {row.menuSell.delete == 1 ? "delete" : ""}<br />
                    เมนูจัดการสินค้า: {row.menuProduct.view == 1 ? "view" : ""} {row.menuProduct.create == 1 ? "create" : ""} {row.menuProduct.edit == 1 ? "edit" : ""} {row.menuProduct.delete == 1 ? "delete" : ""}<br />
                    เมนูจัดการคลังสินค้า: {row.menuWarehouse.view == 1 ? "view" : ""} {row.menuWarehouse.create == 1 ? "create" : ""} {row.menuWarehouse.edit == 1 ? "edit" : ""} {row.menuWarehouse.delete == 1 ? "delete" : ""}<br />
                    เมนูลูกค้า: {row.menuCustomer.view == 1 ? "view" : ""} {row.menuCustomer.create == 1 ? "create" : ""} {row.menuCustomer.edit == 1 ? "edit" : ""} {row.menuCustomer.delete == 1 ? "delete" : ""}<br />
                    เมนูเจ้าหนี้: {row.menuCreditor.view == 1 ? "view" : ""} {row.menuCreditor.create == 1 ? "create" : ""} {row.menuCreditor.edit == 1 ? "edit" : ""} {row.menuCreditor.delete == 1 ? "delete" : ""}<br />
                    เมนูการเงิน: {row.menuFinance.view == 1 ? "view" : ""} {row.menuFinance.create == 1 ? "create" : ""} {row.menuFinance.edit == 1 ? "edit" : ""} {row.menuFinance.delete == 1 ? "delete" : ""}<br />
                    เมนูธุรการ: {row.menuEmployee.view == 1 ? "view" : ""} {row.menuEmployee.create == 1 ? "create" : ""} {row.menuEmployee.edit == 1 ? "edit" : ""} {row.menuEmployee.delete == 1 ? "delete" : ""}<br />
                    เมนูจัดการระบบ: {row.menuSystem.view == 1 ? "view" : ""} {row.menuSystem.create == 1 ? "create" : ""} {row.menuSystem.edit == 1 ? "edit" : ""} {row.menuSystem.delete == 1 ? "delete" : ""}<br />

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
                          href={"/admin/edit-role/" + row.id}
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
                  ActionsComponent={RolesList}
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
              ต้องการลบบทบาทนี้?
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
