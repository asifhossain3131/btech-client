import {
  Divider,
  Button,
  TextField,
  Select,
  MenuItem,
  Checkbox,
  Breadcrumbs,
  Chip,
} from "@mui/material";
import { emphasize, styled } from "@mui/material/styles";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";

const LoginNavbar = () => {
  const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === "light"
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      "&:hover, &:focus": {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      "&:active": {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
  return (
    <div className="w-9/12 mx-auto">
      <Breadcrumbs aria-label="breadcrumb" className="my-2">
        <Link to={"/"}>
          <StyledBreadcrumb label="Home" icon={<HomeIcon fontSize="small" />} />
        </Link>
        <Link to={"/dashboard"}>
          <StyledBreadcrumb label="Dashboard" />
        </Link>
      </Breadcrumbs>
      <img
        src="https://cdn-icons-png.flaticon.com/128/5638/5638593.png"
        alt=""
        className="w-[40px] mt-3 mb-5"
      />
      <h2 className="font-bold text-2xl">Get Started Now</h2>
      <p className="text-gray-500 text-sm font-semibold mb-6">
        Enter Your Credentials To Access Your Account
      </p>
      <div className="flex items-center gap-4">
        <Button
          size="small"
          variant="outlined"
          className="outline-black flex items-center gap-x-3 border-gray-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
            className="w-[18px]"
            alt=""
          />
          <span className="text-black font-semibold">Login With Google</span>
        </Button>
        <Button
          size="small"
          variant="outlined"
          className="outline-black flex items-center gap-x-3 border-gray-300"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
            className="w-[18px]"
            alt=""
          />
          <span className="text-black font-semibold">Login With Facebook</span>
        </Button>
      </div>
      <Divider className="my-2 text-gray-500">or</Divider>
      <form className="space-y-1">
        <div className="space-y-2">
          <label htmlFor="" className="font-semibold">
            Name
          </label>
          <TextField
            size="small"
            id="outlined-basic"
            label="Your Name"
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="" className="font-semibold">
            Email
          </label>
          <TextField
            size="small"
            id="outlined-basic"
            label="Your Email"
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="" className="font-semibold">
            Category
          </label>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            label="Age"
            className="w-full"
            size="small"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem>Normal</MenuItem>
            <MenuItem>Intermediate</MenuItem>
            <MenuItem>Premium</MenuItem>
          </Select>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="" className="font-semibold">
              Password
            </label>
            <label htmlFor="" className="text-teal-500">
              Forgot password?
            </label>
          </div>
          <TextField
            size="small"
            id="outlined-basic"
            variant="outlined"
            className="w-full"
          />
        </div>
        <div className="flex items-center">
          <Checkbox />
          <p className="font-semibold">
            I agree to the{" "}
            <span className="text-teal-700">Terms and privacy</span>
          </p>
        </div>
        <Button variant="contained" className="w-full bg-teal-500 my-3">
          Register
        </Button>
      </form>
      <div>
        <p className="font-semibold mt-3">
          Already have an account?<span className="text-teal-700">SignIn</span>
        </p>
      </div>
    </div>
  );
};

export default LoginNavbar;
