import "./Navbar.css";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import { styled, alpha } from "@mui/material/styles";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "0px",
    marginTop: theme.spacing(0),
    minWidth: 180,
    color: theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      border: "1px transparent",
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
      "&:hover": {
        borderTop: "1px solid white",
        borderBottom: "1px solid white",
      },
    },
  },
}));

function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  var projectStyle;

  if (!props.isProjectPage) {
    projectStyle = {
      pr: 0,
      mr: 1,
      textDecoration: open ? "underline #6B0AC9" : "none",
      textDecorationThickness: "2px",
      textUnderlineOffset: "4px",
      "&:hover": {
        textDecoration: "underline #6B0AC9",
        textDecorationThickness: "2px",
        textUnderlineOffset: "4px",
      },
    };
  } else {
    projectStyle = {
      pr: 0,
      mr: 1,
      textDecoration: "underline #6B0AC9",
      textDecorationThickness: "2px",
      textUnderlineOffset: "4px",
      "&:hover": {
        textDecoration: "underline #6B0AC9",
        textDecorationThickness: "2px",
        textUnderlineOffset: "4px",
      },
    };
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="popover">
      <Button
        id="projects-menu-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        color="inherit"
        sx={projectStyle}
      >
        Projects
        <ArrowDropDownIcon />
      </Button>
      <StyledMenu
        id="basic-menu"
        disableScrollLock={true}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ borderRadius: "0px", color: "black" }}
      >
        <MenuItem onClick={handleClose}>
          <Link to={`/project1`}>Personas and Storyboarding</Link>
        </MenuItem>

        <Link to={`/project2`}>
          <MenuItem onClick={handleClose}>Responsive Redesign</MenuItem>
        </Link>
        <Link to={`/project3`}>
          <MenuItem onClick={handleClose}>Iterative Design</MenuItem>
        </Link>
        <Link to={`/project4`}>
          <MenuItem onClick={handleClose}>Development</MenuItem>{" "}
        </Link>
      </StyledMenu>
    </div>
  );
}

export default function Navbar(props) {
  var homeStyle;
  if (!props.isHomePage) {
    homeStyle = {
      mr: 1,
      "&:hover": {
        textDecoration: "underline #36EAEF",
        textDecorationThickness: "2px",
        textUnderlineOffset: "4px",
      },
    };
  } else {
    homeStyle = {
      mr: 1,
      textDecoration: "underline #36EAEF",
      textDecorationThickness: "2px",
      textUnderlineOffset: "4px",
      "&:hover": {
        textDecoration: "underline #36EAEF",
        textDecorationThickness: "2px",
        textUnderlineOffset: "4px",
      },
    };
  }

  return (
    <nav className="navbar">
      <Box sx={{ flexGrow: 1 }}>
        <div style={{ position: "fixed", width: "100%", top: "0", zIndex: "1" }}>
          <div
            style={{
              background: "linear-gradient(to right, #36EAEF, #6B0AC9)",
              paddingBottom: "2px",
              boxShadow: "box-shadow: 0 4px 2px -2px gray;",
            }}
          >
            <AppBar
              className="appbar"
              position="static"
              color="primary"
              sx={{
                background: "#000000",
              }}
            >
              <Toolbar>
                <Link to={`/`}>
                  <Button color="inherit" sx={{ mr: 2 }}>
                    <img
                      className="logo"
                      height="56px"
                      width="56px"
                      src={process.env.PUBLIC_URL + "/images/JL.jpg"}
                    />
                  </Button>
                </Link>
                <Typography
                  variant="h4"
                  fontSize="2rem"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  {props.title}
                </Typography>

                <Link to={`/`}>
                  <Button color="inherit" sx={homeStyle}>
                    Home
                  </Button>
                </Link>
                <BasicMenu isProjectPage={props.isProjectPage} />
              </Toolbar>
            </AppBar>
          </div>
        </div>
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </nav>
  );
}

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={useScrollTrigger()}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}
