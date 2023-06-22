import * as React from "react";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
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
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import VisibilityIcon from '@mui/icons-material/Visibility';
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css'
import PrintIcon from '@mui/icons-material/Print';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import dynamic from 'next/dynamic'
import SearchForm from "@/components/_App/TopNavbar/SearchForm";
import axios from "axios";
import { useRouter } from "next/router";

const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

// Create Warehouse Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "30%",
  maxWidth: '400px',
  width: '100%',
  overflow: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};
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

function Warehouse(props) {
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

Warehouse.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  id,
  date,
  name,
  idprod,
  nameprod,
  qty,
  emp,
  note
) {
  return {
    id,
    date,
    name,
    idprod,
    nameprod,
    qty,
    emp,
    note

  };
}

const rows = [
  createData(
    "1",
    "22/6/2566",
    "คลัง1",
    "ไฟหน้า ",
    "100",
    "หนักงาน1",
    "",
  ),

]
// .sort((a, b) => (a.category < b.category ? -1 : 1));

export default function Warehouses() {
  // Table
  const router = useRouter();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [datas, setDatas] = React.useState([]);
  const [result, setResult] = React.useState([]);
  const [id, setId] = React.useState('');
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

  // Create Warehouse Modal & Form
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  // Select dropdown
  const [categorySelect, setCategorySelect] = React.useState('');
  const handleChange = (event) => {
    setCategorySelect(event.target.value);
  };

  React.useEffect(() => {

    axios.get(`${process.env.NEXT_PUBLIC_API}/warehouse/get_allwarehouse`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(result => { setDatas(result.data), setResult(result.data) })

  }, [])
  const handleDelete = (e) => {
    console.log(token)
    axios.put(`${process.env.NEXT_PUBLIC_API}/warehouse/delete_warehouse?id=` + id, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(() => router.reload())
  }
  // console.log(datas);
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รายการใบเบิกของ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รายการใบเบิกของ</li>
        </ul>
      </div>

      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 10px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: "10px",
          }}
        >
          {/* <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            สินค้า
          </Typography> */}

          {/* <Button
            onClick={handleOpen}
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
          >
            <PrintIcon
              sx={{ position: "relative", top: "-1px" }}
              className='mr-5px'
            />{" "}
            พิมพ์แฟ้มสินค้า
          </Button> */}

          <SearchForm rows={datas} setResult={setResult} />

          {/* <Button
            // onClick={handleOpen}
            href="/warehouse/warehouse-create/"
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
            เพิ่มคลังสินค้า
          </Button> */}
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table
            sx={{ minWidth: 850 }}
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  รหัสใบเบิกสินค้า
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  วันที่เบิกสินค้า
                </TableCell>


                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",

                  }}
                >
                  ชื่อคลัง
                </TableCell>

                {/* <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  รหัสสินค้า
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  ชื่อสินค้า
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  จำนวน
                </TableCell> */}
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  ชื่อผู้เบิก
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  หมายเหตุ
                </TableCell>


                <TableCell
                  align="right"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                : rows
              ).map((row) => (
                <TableRow key={row.id} className={styles.Warehouse} >
                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.id}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.date}
                  </TableCell>



                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.name}
                  </TableCell>

                  <TableCell
                    align="center"

                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",

                    }}
                  >
                    {row.qty}
                  </TableCell>
                  <TableCell
                    align="center"

                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",

                    }}
                  >
                    {row.note}
                  </TableCell>
                  {/* <TableCell
                    align="center"

                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",

                    }}
                  >
                    {row.emp}
                  </TableCell>
                  <TableCell
                    align="center"

                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",

                    }}
                  >
                    {row.note}
                  </TableCell> */}



                  <TableCell
                    align="right"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                      }}
                    >
                    

                      <Tooltip title="View" placement="top">
                        <IconButton
                          href="/warehouse/requisition-detail"
                          aria-label="view"
                          size="small"
                          color="info"
                          className="info"
                        >
                          <VisibilityIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit" placement="top">
                        <IconButton
                          href={"/warehouse/edit-warehouse/" + row.id}
                          aria-label="edit"
                          size="small"
                          color="primary"
                          className="primary"
                        >
                          <DriveFileRenameOutlineIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>



                      <Tooltip title="Remove" placement="top">
                        <IconButton
                          onClick={(e) => { setOpen(true), setId(row.id) }}
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
                    colSpan={8}
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
                  ActionsComponent={Warehouse}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

      {/* Create Warehouse Modal */}
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
