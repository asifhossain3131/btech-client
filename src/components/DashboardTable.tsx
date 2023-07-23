import { InputBase, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
  
  const rows = [
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "date": "23-07-2023",
      "view": "500k",
      "status": "active",
      "cost": "$50"
    },
    {
      "name": "Jane Smith",
      "email": "jane.smith@example.com",
      "date": "15-06-2023",
      "view": "500k",
      "status": "active",
      "cost": "$45"
    },
    {
      "name": "Michael Johnson",
      "email": "michael.johnson@example.com",
      "date": "08-09-2023",
      "view": "500k",
      "status": "active",
      "cost": "$55"
    },
    {
      "name": "Emily Brown",
      "email": "emily.brown@example.com",
      "date": "02-04-2023",
      "view": "500k",
      "status": "active",
      "cost": "$60"
    },
    {
      "name": "William Lee",
      "email": "william.lee@example.com",
      "date": "19-11-2023",
      "view": "500k",
      "status": "active",
      "cost": "$70"
    },
    {
      "name": "Olivia Clark",
      "email": "olivia.clark@example.com",
      "date": "30-03-2023",
      "view": "500k",
      "status": "active",
      "cost": "$65"
    },
    {
      "name": "James Anderson",
      "email": "james.anderson@example.com",
      "date": "12-10-2023",
      "view": "500k",
      "status": "active",
      "cost": "$75"
    },
    {
      "name": "Sophia Taylor",
      "email": "sophia.taylor@example.com",
      "date": "25-01-2023",
      "view": "500k",
      "status": "active",
      "cost": "$55"
    },
    {
      "name": "Benjamin Martinez",
      "email": "benjamin.martinez@example.com",
      "date": "05-12-2023",
      "view": "500k",
      "status": "active",
      "cost": "$80"
    },
    {
      "name": "Ava Hernandez",
      "email": "ava.hernandez@example.com",
      "date": "17-08-2023",
      "view": "500k",
      "status": "active",
      "cost": "$70"
    }
  ]
  
  
const DashboardTable = () => {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
      
      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
    return (
        <div className="w-11/12 bg-white mx-auto mt-3 p-3 rounded">
          <div className="flex items-center justify-between">
          <Search className="border border-gray-300 w-72 rounded-2xl flex items-center justify-between my-3">
          <div>
          <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
            <FilterListIcon className="mr-3"></FilterListIcon>
          </Search>
          <p className="text-gray-400 text-sm">Showing 2-10 of 100 result</p>
          </div>
          <div>
            {/* table starts here */}
            <TableContainer className="p-2">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className="bg-sky-100">
          <TableRow>
            <TableCell>
            <span>Creators</span>
                <ArrowDropDownIcon></ArrowDropDownIcon>
            </TableCell>
            <TableCell align="right">
            <span>Address</span>
                <ArrowDropDownIcon></ArrowDropDownIcon>
            </TableCell>
            <TableCell align="right">
            <span>Date</span>
                <ArrowDropDownIcon></ArrowDropDownIcon>
            </TableCell>
            <TableCell align="right">
            <span>Cost</span>
                <ArrowDropDownIcon></ArrowDropDownIcon>
            </TableCell>
            <TableCell align="right">
            <span>View</span>
                <ArrowDropDownIcon></ArrowDropDownIcon>
            </TableCell>
            <TableCell align="right">
  Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
              <TableCell align="right">{row.view}</TableCell>
              <TableCell align="right" className="flex items-center gap-x-3">
              <DeleteIcon></DeleteIcon>
                <div>
                    <CheckCircleIcon className="text-green-400"></CheckCircleIcon>
                    <span>{row.status}</span>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          </div>
        </div>
    );
};

export default DashboardTable;