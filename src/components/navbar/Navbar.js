import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './styles/navbar.module.css'
import LogOut from '../log-out/LogOut'
import { Link, NavLink } from 'react-router-dom';
import FacilityOverview from '../facility-overview/FacilityOverview';

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const [isFacilityClicked, setIsFacilityClicked] = useState(false)
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={`${styles['overflow-container']} ${classes.root}`}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, open && classes.hide)}
          id={styles['toggle-icons']}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <Link onClick={() => setIsFacilityClicked(false)} to='/'><h1>CULTFIT</h1></Link>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <div className={styles['flex-container']}>
          <div>
            <h3 className={styles['nav-items']}>
              <NavLink onClick={() => setIsFacilityClicked(false)} to='/' exact activeStyle={{ backgroundColor: '#97bf0f', color: 'white', padding: '10px 100% 10px 10px', marginLeft: '-10px' }} >
                FACILITIES
            </NavLink>
            </h3>
            <h3 className={styles['nav-items']}>
              {/* <NavLink> */}
              APPOINTMENTS
            {/* </NavLink> */}
            </h3>
            <div className={styles['nav-items']}>
              <LogOut setIsFacilityClicked={setIsFacilityClicked} />
            </div>
          </div>
          <div className={`${styles['nav-items']} ${styles['icons-container']}`}>
            <TwitterIcon />
            <FacebookIcon />
            <EmailIcon />
            <InstagramIcon />
          </div>
        </div>
      </Drawer>
      <main
        className={`${clsx(classes.content, {
          [classes.contentShift]: open,
        })} ${styles['Facility-Overview-container']}`}
      >
        {!isFacilityClicked ? 
        <div className={styles['Facility-Overview-container']}>
          <FacilityOverview setIsFacilityClicked={setIsFacilityClicked} />
        </div> : null}
      </main>
    </div>
  );
}
