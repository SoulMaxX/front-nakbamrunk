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

import dynamic from 'next/dynamic'
import SearchForm from "@/components/_App/TopNavbar/SearchForm";
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

// Create Product Modal Style
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  height: "100%",
  maxWidth: '700px',
  width: '100%',
  overflow: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: "8px",
};

function Product(props) {
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

Product.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  id,
  // productImg,
  shortName,
  numFactory,
  productName,
  carBrand,
  brand,
  amount
  // buyPrice,
  // sellPrice,
) {
  return {
    id,
    // productImg,
    shortName,
    numFactory,
    productName,
    carBrand,
    brand,
    amount
    // buyPrice,
    // sellPrice,
  };
}

const rows = [
  createData(
    "1",
    "สวปฟน",
    "4.61992",
    "สวิตซ์เปิดไฟหน้า",
    "Benz IBC",
    "DT",
    "1,000 ชิ้น",
    // "625.00",
    // "980.00",
  ),
  createData(
    "2",
    "ลกทว",
    "4.50099",
    "ลูกกระทุ้งวาล์ว",
    "B422",
    "DT",
    "500 ชิ้น",
    // "128.00",
    // "200.00",
  ),
  createData(
    "3",
    "กส",
    "4.61904",
    "ก้านสูบ",
    "Benz IBC",
    "DT",
    "100 ชิ้น",
    // "2685.00",
    // "",
  ),
  createData(
    "4",
    "สวปฟน",
    "4.61992",
    "สวิตซ์เปิดไฟหน้า",
    "Benz IBC",
    "DT",
    "1,000 ชิ้น",
    // "625.00",
    // "980.00",
  ),
  createData(
    "5",
    "ลกทว",
    "4.50099",
    "ลูกกระทุ้งวาล์ว",
    "B422",
    "DT",
    "500 ชิ้น",
    // "128.00",
    // "200.00",
  ),
  createData(
    "6",
    "กส",
    "4.61904",
    "ก้านสูบ",
    "Benz IBC",
    "DT",
    "100 ชิ้น",
    // "2685.00",
    // "",
  ),
  createData(
    "7",
    "สวปฟน",
    "4.61992",
    "สวิตซ์เปิดไฟหน้า",
    "Benz IBC",
    "DT",
    "1,000 ชิ้น",
    // "625.00",
    // "980.00",
  ),
  createData(
    "8",
    "ลกทว",
    "4.50099",
    "ลูกกระทุ้งวาล์ว",
    "B422",
    "DT",
    "500 ชิ้น",
    // "128.00",
    // "200.00",
  ),
  createData(
    "9",
    "กส",
    "4.61904",
    "ก้านสูบ",
    "Benz IBC",
    "DT",
    "100 ชิ้น",
    // "2685.00",
    // "",
  ),
  // createData(
  //   "2",
  //   // "/images/product2.png",
  //   "Smart Camera XD6",
  //   "Camera",
  //   "$189.50",
  //   "50",
  //   "Out of Stock",
  //   "5.0 (40 votes)"
  // ),
  // createData(
  //   "3",
  //   "/images/product3.png",
  //   // "Pixi 8 Wireless Airphone",
  //   "Phone",
  //   "$250.50",
  //   "45",
  //   "400",
  //   "5.0 (15 votes)"
  // ),
  // createData(
  //   "/images/product4.png",
  //   "Jebble Smart Watch",
  //   "Watch",
  //   "$289.50",
  //   "100",
  //   "200",
  //   "5.0 (99 votes)"
  // ),
  // createData(
  //   "/images/product5.png",
  //   "Admas Airpod x-Zon",
  //   "Airpod",
  //   "$289.50",
  //   "120",
  //   "Out of Stock",
  //   "5.0 (150 votes)"
  // ),
  // createData(
  //   "/images/product6.png",
  //   "Smart Watch F8 Pro",
  //   "Watch",
  //   "$289.50",
  //   "20",
  //   "100",
  //   "5.0 (5 votes)"
  // ),
  // createData(
  //   "/images/product7.png",
  //   "Nord Fold ZL",
  //   "Pone",
  //   "$289.50",
  //   "55",
  //   "108",
  //   "5.0 (11 votes)"
  // ),
  // createData(
  //   "/images/product8.png",
  //   "Wall Clock Cimbina",
  //   "Clock",
  //   "$289.50",
  //   "40",
  //   "100",
  //   "5.0 (4 votes)"
  // ),
  // createData(
  //   "/images/product9.png",
  //   "Galaxo T6 Munsun",
  //   "Smart Phone",
  //   "$289.50",
  //   "50",
  //   "130",
  //   "5.0 (55 votes)"
  // ),
  // createData(
  //   "/images/product1.png",
  //   "Macbook Pro",
  //   "Laptop",
  //   "$1,299.00",
  //   "120",
  //   "1500",
  //   "5.0 (150 votes)"
  // ),
  // createData(
  //   "/images/product2.png",
  //   "iphone 14 pro max",
  //   "Phone",
  //   "$1029",
  //   "200",
  //   "599",
  //   "5.0 (200 votes)"
  // ),
  // createData(
  //   "/images/product3.png",
  //   "HeadPhone",
  //   "HeadPhone",
  //   "$100.50",
  //   "25",
  //   "50",
  //   "5.0 (61 votes)"
  // ),
  // createData(
  //   "/images/product4.png",
  //   "Superstar shoes",
  //   "shoes",
  //   "$59.50",
  //   "45",
  //   "50",
  //   "5.0 (45 votes)"
  // ),
  // createData(
  //   "/images/product5.png",
  //   "Nike shirts",
  //   "Shirts",
  //   "$30.50",
  //   "32",
  //   "40",
  //   "5.0 (22 votes)"
  // ),
  // createData(
  //   "/images/product6.png",
  //   "Nike caps",
  //   "Caps",
  //   "$15.50",
  //   "33",
  //   "50",
  //   "5.0 (3 votes)"
  // ),
  // createData(
  //   "/images/product7.png",
  //   "Hoodie (Blue)",
  //   "Hoodie",
  //   "$59.50",
  //   "30",
  //   "55",
  //   "5.0 (44 votes)"
  // ),
  // createData(
  //   "/images/product8.png",
  //   "Wall Clock China",
  //   "Clock",
  //   "$100.50",
  //   "30",
  //   "230",
  //   "5.0 (45 votes)"
  // ),
  // createData(
  //   "/images/product9.png",
  //   "Galaxo T6 Munsun 2",
  //   "Phone",
  //   "$220.50",
  //   "22",
  //   "50",
  //   "5.0 (24 votes)"
  // ),
]
// .sort((a, b) => (a.category < b.category ? -1 : 1));

export default function Products() {
  // Table
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Create Product Modal & Form
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

  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>รายงานสินค้าคงเหลือ</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>รายงานสินค้าคงเหลือ</li>
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
            paddingLeft: "510px",
            paddingBottom: "10px",
          }}
        >
          <SearchForm />
          {/* <Button
            // onClick={handleOpen}
            href="/ecommerce/create-product"
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
            เพิ่มสินค้า
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
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  เบอร์แท้
                </TableCell>
                

                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  เบอร์โรงงาน
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
                  รุ่น
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  ยี่ห้อ
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  จำนวนสินค้าคงเหลือ
                </TableCell>

                {/* <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  ทุนสุทธิ
                </TableCell>
                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                  ราคาขาย
                </TableCell> */}

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
                <TableRow key={row.productTitle} className={styles.Product} >
                  <TableCell
                    // align="center"
                    sx={{
                      width: 100,
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.id}
                  </TableCell>
                  {/* <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                     
                      <Typography
                        as="h4"
                        sx={{
                          fontWeight: "500",
                          fontSize: "13px",
                        }}
                        className='ml-10px'
                      >
                        {row.shortName}
                      </Typography>
                    </Box>
                  </TableCell> */}

                  <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.numFactory}
                  </TableCell>

                  <TableCell
                    // align="center"

                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                      width: 150,

                    }}
                  >
                    {row.productName}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",

                    }}
                  >
                    {row.carBrand}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.brand}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.amount}
                  </TableCell>

                  {/* <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.buyPrice}
                  </TableCell>
                  <TableCell
                    align="center"
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.sellPrice}
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
                          href="/ecommerce/product-details"
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
                          aria-label="edit"
                          size="small"
                          color="primary"
                          className="primary"
                        >
                          <DriveFileRenameOutlineIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      {/* <Tooltip title="Add To Cart" placement="top">
                        <IconButton
                          aria-label="Add To Cart"
                          size="small"
                          color="success"
                          className="success"
                        >
                          <ShoppingCartIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip> */}

                      <Tooltip title="Remove" placement="top">
                        <IconButton
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
                  count={rows.length}
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
                  ActionsComponent={Product}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>

      
    </>
  );
}
