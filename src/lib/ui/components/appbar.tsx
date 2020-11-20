import { AppBar, Badge, Box, Button, ButtonGroup, createStyles, fade, Grid, IconButton, InputBase, makeStyles, Menu, MenuItem, Theme, Typography, Icon} from "@material-ui/core";
import Link from "next/link";
import React, { useEffect } from "react";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {useUser, useRequestService} from '../hooks'
import {mutate} from 'swr'
import  Search from './appbar/search'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { PanoramaFishEye } from "@material-ui/icons";
// import {ReactComponent as Logo} from "../../../../logoIcon.svg"

export default function NavBar() {
    
    // Hooks
    const classes = useStyles();
    const user = useUser();
    const request_service = useRequestService();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'))

    // States
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    useEffect(()=>{
        handleUserMenuClose()
    }, [matches])

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

    const renderAccountSection = () => {
        if (matches) {
            return <Grid container justify="flex-end">
                {!user?
                    <>
                    <IconButton onClick={handleUserMenu} className={(classes.buttons, classes.accountCircle)}>
                        <MoreVertIcon />
                    </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleUserMenuClose}
                        >
                            <Link href="/login">
                                <MenuItem onClick={handleUserMenuClose}>
                                    Login
                                </MenuItem>
                            </Link>
                            <Link href="/register">
                                <MenuItem onClick={handleUserMenuClose}>
                                    Register
                                </MenuItem>
                            </Link>
                        </Menu>
                    </>
                    :
                    <>
                        <IconButton onClick={handleUserMenu} className={(classes.buttons, classes.accountCircle)}>
                            <AccountCircleIcon />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleUserMenuClose}
                        >
                            <Link href="/profile">
                                <MenuItem onClick={handleUserMenuClose}>
                                    {user.email}
                                </MenuItem>
                            </Link>
                            
                            <MenuItem onClick={()=>{handleUserMenuClose();logout();}}>
                                Log out
                            </MenuItem>
                            
                        </Menu>
                    </>
                }
            </Grid>
        }else{
            return <Grid container justify="flex-end">
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
            }
            </Grid>
        }
    }

    return(
        <AppBar position='relative' style={{ zIndex:10, background: 'transparent', boxShadow: 'none', color:'transparent', padding:5, paddingTop:10}}>
            <Grid container direction='row' wrap="nowrap">
                <Grid item md={4} sm={3} xs={3} className={classes.iconContainer}>
                    <Link href="/">
                        <Button className={classes.iconButton}>
                            <img className={classes.icon} src="/logoIcon.png"/>
                        </Button>
                    </Link>
                </Grid>

                <Grid item md={4} sm={6} xs={6}>
                    <Grid  container justify="center" >
                        <Box className={classes.search}>
                            <Search />
                        </Box>
                    </Grid>      
                </Grid>

                <Grid item md={4} sm={3} xs={3}>
                    {renderAccountSection()}
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
        iconButton: {
            width: 100,
            height: 50,
        },
        icon: {
            width: '100%',
            height: '100%',
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.65),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.40),
            },
            width: '100%',
            // marginLeft: '6.5%',
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
        accountCircle: {
            marginTop:theme.spacing(0.5),
        }
    }),
);