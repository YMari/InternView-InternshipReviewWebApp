import { AppBar, Box, Button, ButtonGroup, createStyles, fade, Grid, InputBase, makeStyles, Theme, Typography} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import Link from "next/link";
import React from "react";
import {useUser} from '../hooks/useUser'

export default function NavBar() {
    const classes = useStyles();
    const user = useUser();

    return(
        <AppBar position='relative' style={{ zIndex:10, background: 'transparent', boxShadow: 'none', color:'transparent', padding:5, paddingTop:10}}>
            <Grid 
            container
            direction='row'
            justify="space-between"
            wrap="nowrap"
            >
                <Grid item className={classes.iconContainer}>
                    <Link href="/">
                        <Button>
                            <PanoramaFishEyeIcon fontSize="large"/>
                        </Button>
                    </Link>
                </Grid>
                <Grid item className={classes.search}>
                    <Box className={classes.searchIcon}>
                        <SearchIcon color='primary'/>
                    </Box>
                    <InputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    />
                </Grid>
                <Grid item >
                {!user?
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
                :   <ButtonGroup variant="text">
                        <Button className={classes.buttons}>
                            <Typography variant="h6" noWrap>
                                {user?.email}
                            </Typography>
                        </Button>
                        <Button className={classes.buttons}>  
                            <Typography variant="h6" noWrap>
                                Log Out
                            </Typography>
                        </Button>
                    </ButtonGroup>}
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
            // marginRight: theme.spacing(2),
            // margin:'auto',
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: 120,
                width: 450,
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: theme.palette.secondary.contrastText,
        },
        inputInput: {
            padding: theme.spacing(2, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        buttons: {
            color: theme.palette.primary.contrastText,
            wrap: 'noWrap'
        }
    }),
);