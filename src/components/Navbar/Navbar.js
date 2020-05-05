// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Link } from 'react-router-dom';
// import BottomNavigation from '@material-ui/core/BottomNavigation';
// import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
// import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
// import ErrorIcon from '@material-ui/icons/Error';
// import SettingsIcon from '@material-ui/icons/Settings';

// const useStyles = makeStyles({
//     root: {
//         backgroundColor: "blue",
//         width: "100%"
//     },
//     icon: { 
//         color: "white",
//         fontSize: 30
//     }
// });

// export default function SimpleBottomNavigation() {
//   const classes = useStyles();
//   const [value, setValue] = React.useState(0);

//   return (
//     <BottomNavigation
//       value={value}
//       onChange={(event, newValue) => {
//         setValue(newValue);
//       }}
//       showLabels
//       className={classes.root}
//     >
//         <Link to="/">
//             <BottomNavigationAction label="Devices" value="recents" icon={<DynamicFeedIcon className={classes.icon} />}/>
//         </Link>
//         <Link to="/alerts">
//             <BottomNavigationAction label="Alerts" value="favorites" icon={<ErrorIcon className={classes.icon} />} />
//         </Link>
//         <Link to="/settings">
//             <BottomNavigationAction label="Settigs" value="nearby" icon={<SettingsIcon className={classes.icon} />} />
//         </Link>
//     </BottomNavigation>
//     );
// }

import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const navbar = props => (
    <nav className="navbar">
        <h3>DIC</h3>
        <ul className="nav-links">
            <Link className="white" to="/">
                <li>Devices</li>
            </Link>
            <Link className="white" to="/alerts">
                <li>Alerts ({props.alerts})</li>
            </Link>
            <Link className="white" to="/settings">
                <li>Settigs</li>
            </Link>
        </ul>
    </nav>
);

export default navbar;