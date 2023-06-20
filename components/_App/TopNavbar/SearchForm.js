import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: 100,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: 0,
  marginLeft: "15px",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  color: "#757FEF",
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  right: "0",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "5",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    backgroundColor: "#F5F7FA",
    borderRadius: "30px",
    padding: theme.spacing(1.4, 0, 1.4, 2),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "260px",
      "&:focus": {
        width: "280px",
      },
    },
  },
}));

export default function SearchForm(props) {
  const { rows ,setResult} = props;

  const [search, setSearch] = React.useState("")
  // const [result, setDatas] = React.useState(rows)
  if(rows){
    
    const fil = rows.filter(val => {
      if (String(val.id).includes(search)|| String(val.brand).includes(search) || String(val.company).includes(search) 
      || String(val.nameprod).includes(search)|| String(val.initialsprod).includes(search) || String(val.realnum).includes(search)|| String(val.facnum).includes(search)) {
        
        const newobj = { id: val.id }
        return newobj;
      }
    })
    
    React.useEffect(()=>{
      
      setResult(fil)
      
    },[search])
    
  }
  return (
    <>
      <Search className="search-form">
        <SearchIconWrapper sx={{ display: { xs: 'none', sm: 'inline-flex' } }}>
          <SearchIcon />
        </SearchIconWrapper>

        <StyledInputBase
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search here.."
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </>
  );
}
