import * as React from "react";
import { Box, Collapse } from "@mui/material";
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
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import dynamic from 'next/dynamic'
import SearchForm from "@/components/_App/TopNavbar/SearchForm";
import ProductDetailsContent from "@/components/eCommerce/ProductDetails/ProductDetailsContent";
const RichTextEditor = dynamic(() => import('@mantine/rte'), {
  ssr: false,
})

// Create Product Modal Style
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

function Row(props) {
  const { row } = props;
  // console.log(row.productName)
  const [open2, setOpen2] = React.useState(false);
  return (
    <>
      <TableRow key={row.id} className={styles.Product}>
        <TableCell width={"50px"} sx={{
          borderBottom: "1px solid #F7FAFF",
          padding: "8px 10px",
        }}>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen2(!open2)}
          >
            {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell
          sx={{
            borderBottom: "1px solid #F7FAFF",
            padding: "8px 10px",
            fontSize: "13px",
          }}
        >
          {row.id}
        </TableCell>
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
        </TableCell>

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
            {/* <Tooltip title="View" placement="top">
          <IconButton
            href="/products/product-details"
            aria-label="view"
            size="small"
            color="info"
            className="info"
          >
            <VisibilityIcon fontSize="inherit" />
          </IconButton>
        </Tooltip> */}

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



            <Tooltip title="Remove" placement="top">
              <IconButton
                // onClick={handleOpen}
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
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6} sx={{
          borderBottom: "1px solid #F7FAFF",
          padding: "8px 10px",
        }}>
          <Collapse in={open2} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                ข้อมูลสินค้า
              </Typography>

              {/* {rows.map((data) => (
                <Typography key={row.id} variant="h6" gutterBottom component="div" >
                  {row.productName}
                </Typography>
              ))} */}
              <ProductDetailsContent />

            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

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
  buyPrice,
  sellPrice,
) {
  return {
    id,
    // productImg,
    shortName,
    numFactory,
    productName,
    carBrand,
    brand,
    buyPrice,
    sellPrice,
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
    "625.00",
    "980.00",
  ),
  createData(
    "2",
    "ลกทว",
    "4.50099",
    "ลูกกระทุ้งวาล์ว",
    "B422",
    "DT",
    "128.00",
    "200.00",
  ),
  createData(
    "3",
    "กส",
    "4.61904",
    "ก้านสูบ",
    "Benz IBC",
    "DT",
    "2685.00",
    "",
  ),
  createData(
    "4",
    "สวปฟน",
    "4.61992",
    "สวิตซ์เปิดไฟหน้า",
    "Benz IBC",
    "DT",
    "625.00",
    "980.00",
  ),
  createData(
    "5",
    "ลกทว",
    "4.50099",
    "ลูกกระทุ้งวาล์ว",
    "B422",
    "DT",
    "128.00",
    "200.00",
  ),
  createData(
    "6",
    "กส",
    "4.61904",
    "ก้านสูบ",
    "Benz IBC",
    "DT",
    "2685.00",
    "",
  ),
  createData(
    "7",
    "สวปฟน",
    "4.61992",
    "สวิตซ์เปิดไฟหน้า",
    "Benz IBC",
    "DT",
    "625.00",
    "980.00",
  ),
  createData(
    "8",
    "ลกทว",
    "4.50099",
    "ลูกกระทุ้งวาล์ว",
    "B422",
    "DT",
    "128.00",
    "200.00",
  ),
  createData(
    "9",
    "กส",
    "4.61904",
    "ก้านสูบ",
    "Benz IBC",
    "DT",
    "2685.00",
    "",
  ),

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
  const [open2, setOpen2] = React.useState(false);
  return (
    <>
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>สินค้า</h1>
        <ul>
          <li>
            <Link href="/">หน้าหลัก</Link>
          </li>
          <li>สินค้า</li>
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

          <Button
            // onClick={handleOpen}
            // href="/ecommerce/create-product"
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
          </Button>

          <SearchForm />

          <Button
            // onClick={handleOpen}
            href="/products/create-product"
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
          </Button>
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

                </TableCell>
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
                <Row key={row.id} row={row} />
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

      {/* Create Product Modal */}
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="bg-black">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#EDEFF5",
                borderRadius: "8px",
                padding: "20px 20px",
              }}
              className="bg-black"
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                ลบสินค้า
              </Typography>

              <IconButton
                aria-label="remove"
                size="small"
                onClick={handleClose}
              >
                <ClearIcon />
              </IconButton>
            </Box>

            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  background: "#fff",
                  padding: "30px 20px",
                  borderRadius: "8px",
                }}
                className="dark-BG-101010"
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      ลบสินค้ารหัส : 123
                    </Typography>

                  </Grid>




                  <Grid item xs={12} textAlign="end">
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
                      className='mr-15px'
                    >
                      <ClearIcon
                        sx={{
                          position: "relative",
                          top: "-1px",
                        }}
                        className='mr-5px'
                      />{" "}
                      Cancel
                    </Button>

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
                    >

                      ลบสินค้า
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
      {/* <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="bg-black">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#EDEFF5",
                borderRadius: "8px",
                padding: "20px 20px",
              }}
              className="bg-black"
            >
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: "500",
                  fontSize: "17px",
                }}
              >
                Create Product
              </Typography>

              <IconButton
                aria-label="remove"
                size="small"
                onClick={handleClose}
              >
                <ClearIcon />
              </IconButton>
            </Box>

            <Box component="form" noValidate onSubmit={handleSubmit}>
              <Box
                sx={{
                  background: "#fff",
                  padding: "30px 20px",
                  borderRadius: "8px",
                }}
                className="dark-BG-101010"
              >
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Product Name
                    </Typography>
                    <TextField
                      autoComplete="product-name"
                      name="productName"
                      required
                      fullWidth
                      id="productName"
                      label="Product Name"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Short Description
                    </Typography>
                    <TextField
                      autoComplete="short-description"
                      name="Short Description"
                      required
                      fullWidth
                      id="Short Description"
                      label="Short Description"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Category
                    </Typography>

                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">Select</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categorySelect}
                        label="Category"
                        onChange={handleChange}
                      >
                        <MenuItem value={10}>Laptop</MenuItem>
                        <MenuItem value={20}>Camera</MenuItem>
                        <MenuItem value={30}>Smart Watch</MenuItem>
                        <MenuItem value={30}>iPhone</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Price
                    </Typography>

                    <TextField
                      autoComplete="price"
                      name="price"
                      required
                      fullWidth
                      id="price"
                      label="$0"
                      type="number"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={6}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Discount Price
                    </Typography>

                    <TextField
                      autoComplete="discount-price"
                      name="DiscountPrice"
                      required
                      fullWidth
                      id="DiscountPrice"
                      label="$0"
                      type="number"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Stock
                    </Typography>

                    <TextField
                      autoComplete="stock"
                      name="stock"
                      required
                      fullWidth
                      id="stock"
                      label="5"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Product Description
                    </Typography>

                    <RichTextEditor
                      id="rte"
                      controls={[
                        ['bold', 'italic', 'underline', 'link', 'image'],
                        ['unorderedList', 'h1', 'h2', 'h3'],
                        ['sup', 'sub'],
                        ['alignLeft', 'alignCenter', 'alignRight'],
                      ]}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Typography
                      as="h5"
                      sx={{
                        fontWeight: "500",
                        fontSize: "14px",
                        mb: "12px",
                      }}
                    >
                      Product Image
                    </Typography>

                    <TextField
                      autoComplete="product-image"
                      name="productImage"
                      required
                      fullWidth
                      id="productImage"
                      type="file"
                      autoFocus
                      InputProps={{
                        style: { borderRadius: 8 },
                      }}
                    />

                    <Box
                      sx={{
                        mt: '15px'
                      }}
                    >
                      <img
                        src="/images/product1.png"
                        alt="product"
                        wisth="55px"
                        className='mr-10px'
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} textAlign="end">
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
                      className='mr-15px'
                    >
                      <ClearIcon
                        sx={{
                          position: "relative",
                          top: "-1px",
                        }}
                        className='mr-5px'
                      />{" "}
                      Cancel
                    </Button>

                    <Button
                      type="submit"
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
                        sx={{
                          position: "relative",
                          top: "-1px",
                        }}
                        className='mr-5px'
                      />{" "}
                      Create Product
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal> */}
    </>
  );
}
