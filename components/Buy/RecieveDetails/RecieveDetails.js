import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";

import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styles from "@/components/eCommerce/ProductDetails/ProductDetailsContent.module.css";
import { Box, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import Paper from '@mui/material/Paper';

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


const RecieveDetails = (props) => {

    const { datas } = props
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

console.log(datas)
    return (
        <>
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
                                    รหัสสินค้า
                                </TableCell>
                                <TableCell
                                    sx={{
                                        borderBottom: "1px solid #F7FAFF",
                                        fontSize: "13.5px",
                                    }}
                                >
                                    ชื่อสินค้า
                                </TableCell>

                                {/* <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "13.5px",
                  }}
                >
                 จำนวน
                </TableCell> */}
                                <TableCell
                                    sx={{
                                        borderBottom: "1px solid #F7FAFF",
                                        fontSize: "13.5px",
                                    }}
                                >
                                    จำนวน
                                </TableCell>
                                <TableCell
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
                                ? datas?.slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                : datas
                            ).map((row) => (
                                <TableRow key={row.productId} className={styles.Product} >
                                    <TableCell
                                        align="center"
                                        sx={{
                                            width: 100,
                                            borderBottom: "1px solid #F7FAFF",
                                            padding: "8px 10px",
                                            fontSize: "13px",
                                        }}
                                    >
                                        {row.productId}
                                    </TableCell>
                                    <TableCell
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
                                            {/* <img
                        src={row.productImg}
                        alt="Product Img"
                        width={50}
                        className="borderRadius10"
                      /> */}
                                            <Typography
                                                as="h4"
                                                sx={{
                                                    fontWeight: "500",
                                                    fontSize: "13px",
                                                }}
                                                className='ml-10px'
                                            >
                                                {row.product.name}
                                            </Typography>
                                        </Box>
                                    </TableCell>

                                    {/* <TableCell
                    sx={{
                      borderBottom: "1px solid #F7FAFF",
                      padding: "8px 10px",
                      fontSize: "13px",
                    }}
                  >
                    {row.quantity}
                  </TableCell> */}
                                    <TableCell

                                        sx={{
                                            borderBottom: "1px solid #F7FAFF",
                                            padding: "8px 10px",
                                            fontSize: "13px",
                                        }}
                                    >
                                        {row.quantity}
                                    </TableCell>

                                    {/* <TableCell

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
                                            {/* <Tooltip title="View" placement="top">
                        <IconButton
                          href="/sell/order-sell-details"
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
                                                    href="/sell/send-status"
                                                    aria-label="edit"
                                                    size="small"
                                                    color="primary"
                                                    className="primary"
                                                >
                                                    <DriveFileRenameOutlineIcon fontSize="inherit" />
                                                </IconButton>
                                            </Tooltip>



                                            {/* <Tooltip title="Remove" placement="top">
                        <IconButton
                          onClick={handleOpen}
                          aria-label="remove"
                          size="small"
                          color="danger"
                          className="danger"
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip> */}
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
                                    ActionsComponent={Product}
                                    style={{ borderBottom: "none" }}
                                />
                            </TableRow>
                        </TableFooter>
                    </Table>
                </TableContainer>
            </Card>
        </>
    )
}

export default RecieveDetails;
