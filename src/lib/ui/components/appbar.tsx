import { AppBar, Box, Button, ButtonGroup, createStyles, fade, Grid, InputBase, makeStyles, Menu, MenuItem, Theme, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import Link from "next/link";
import React from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useUser, useRequestService} from '../hooks'
import {mutate} from 'swr'
import  Search from './appbar/search'

export default function NavBar() {
    
    // Hooks
    const classes = useStyles();
    const user = useUser();
    const request_service = useRequestService();

    // States
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl);

    // Functions
    const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleUserMenuClose = () => {
        setAnchorEl(null);
    };

    const logout = async () => {
        await request_service.logout()
        mutate('/api/account/user', null)
    }

    return(
        <AppBar position='relative' style={{ zIndex:10, background: 'transparent', boxShadow: 'none', color:'transparent', padding:5, paddingTop:10}}>
            <Grid container direction='row' wrap="nowrap" justify="space-between">

                <Grid item className={classes.iconContainer}>
                    <Link href="/">
                        <Button>
                            <PanoramaFishEyeIcon fontSize="large"/>
                        </Button>
                    </Link>
                </Grid>

                <Grid item className={classes.search}>
                    <Search />
                </Grid>

                <Grid item >
                    <Grid container>
                    {!user?
                        <Grid item>
                            <ButtonGroup variant="text">
                                <Button className={classes.buttons}>
                                    <Link href="/login">        
                                        <Typography variant="h6" noWrap>
                                            Log in
                                        </Typography>
                                    </Link>
                                </Button>
                                <Button className={classes.buttons}>
                                    <Link href="/register">            
                                        <Typography variant="h6" noWrap>
                                            Register
                                        </Typography>
                                    </Link> 
                                </Button>
                            </ButtonGroup>
                        </Grid>   
                    :   
                        <Grid item>
                            <Button className={classes.buttons} onClick={handleUserMenu}>
                                <Typography variant="h6" noWrap>
                                    {user?.email}
                                </Typography>
                            </Button>
                        </Grid>
                        }
                        <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleUserMenuClose}
                        >
                            <Link href="/profile/">
                                <MenuItem onClick={handleUserMenuClose}>Profile</MenuItem>
                            </Link>
                            <MenuItem onClick={() => {handleUserMenuClose();logout()}}>Log Out</MenuItem>
                            </Menu>
                        
                    </Grid>
                </Grid>

            </Grid>
        </AppBar>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconContainer: {
            alignItems: 'left',
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.65),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.40),
            },
            width: '100%',
            marginLeft: '6.5%',
            [theme.breakpoints.up('sm')]: {
                width: 450,
            },
        },
        buttons: {
            color: theme.palette.primary.contrastText,
            wrap: 'noWrap'
        },
        accountContainer: {
            width: 190,
        },
        accountEmail: {
            width: 185,
            paddingRight: theme.spacing(1),
        },
    }),
);