import { AppBar, Box, Button, createStyles, fade, Grid, InputBase, makeStyles, Theme, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import PanoramaFishEyeIcon from '@material-ui/icons/PanoramaFishEye';
import Link from "next/link";
import React from "react";

export default function NavBar() {
    const classes = useStyles();
    return(
        <AppBar position="static"  style={{  background: 'transparent', boxShadow: 'none', color:'transparent', padding:5, paddingTop:10}}>
            <Grid 
            container
            direction='row'
            justify="space-between"
            alignItems="center"
            >
                <Grid item>
                    <Link href="/">
                        <Button className={classes.label}>
                            <PanoramaFishEyeIcon fontSize="large"/>
                            {/* <Typography variant="h6" noWrap>
                                InternView
                            </Typography> */}
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
                <Grid item>
                    <Link href="/login">
                        <Button>
                            <Typography variant="h6" noWrap>
                                Log in
                            </Typography>
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </AppBar>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        label: {
            textTransform: 'capitalize',
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.65),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.40),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
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
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }),
);