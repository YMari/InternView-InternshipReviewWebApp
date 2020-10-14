import { Box, Card, createStyles, fade, Grid, makeStyles, Theme, Typography, Button, CardContent, ButtonGroup, Divider } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'
import theme from '../../lib/ui/theme';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GradeIcon from '@material-ui/icons/Grade';

export default function Home() {
    const classes = useStyles();
    return(
        <>
        <Box className={classes.main}>
        {/* <Box width="100%" maxHeight="500">
            <img src="/backgroundImage.png" style={{width:"100%",maxHeight:700, opacity:'0.5', objectFit:'cover', position:"relative"}}/>
        </Box> */}
        <Grid
        container
        direction='column'
        alignItems="center"
        wrap="nowrap"
        className={classes.gridFull}
        >
            <Grid item className={classes.title}>
                <Typography variant="h2">
                    InternView
                </Typography>
            </Grid>
            <Grid item className={classes.subtitle}>
                <Typography variant="h5">
                    something something darkness
                </Typography>
            </Grid>
            <Grid
            container
            direction='row'
            justify="space-around"
            alignItems="center"
            wrap="nowrap"
            className={classes.gridContent}
            >
                <Grid item className={classes.gridItem}>
                    <Card className={classes.cardContainer}>
                        <Grid
                        container
                        direction='column'
                        alignItems="center"
                        wrap="nowrap"
                        className={classes.cardContent}
                        >
                            <Grid item>
                                <Typography variant='h4'>
                                    Most Helpful Reviews
                                </Typography>
                            </Grid>
                            <Grid item className={classes.cardItem}>
                                <ButtonGroup variant="text">
                                    <Button>
                                        <AccountCircleIcon fontSize="large"/>
                                    </Button>
                                    <Button>
                                        <Link href="/">
                                            <Typography>Review Summary</Typography>
                                        </Link>
                                    </Button>
                                    <Box>
                                        <Grid
                                        container
                                        direction='row'
                                        alignItems="center"
                                        wrap="nowrap"
                                        className={classes.rating}
                                        >
                                            <Grid item>
                                                <GradeIcon fontSize="large"/>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.ratingText}>5/5</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Card className={classes.cardContainer}>
                        <Grid
                        container
                        direction='column'
                        alignItems="center"
                        wrap="nowrap"
                        className={classes.cardContent}
                        >
                            <Grid item>
                                <Typography variant='h4'>
                                    Top Rated Companies
                                </Typography>
                            </Grid>
                            <Grid item className={classes.cardItem}>
                                <ButtonGroup variant="text">
                                    <Button>
                                        <AccountCircleIcon fontSize="large"/>
                                    </Button>
                                    <Button>
                                        <Link href="/">
                                            <Typography>Company X</Typography>
                                        </Link>
                                    </Button>
                                    <Box>
                                        <Grid
                                        container
                                        direction='row'
                                        alignItems="center"
                                        wrap="nowrap"
                                        className={classes.rating}
                                        >
                                            <Grid item>
                                                <GradeIcon fontSize="large"/>
                                            </Grid>
                                            <Grid item>
                                                <Typography className={classes.ratingText}>5/5</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
        </Box>
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {

        },
        gridFull: {
            // marginTop: -610,
            marginTop: 100
        },
        gridContent: {
            paddingTop: theme.spacing(8)
        },
        gridItem: {
            minWidth: '42%',
            alignItems: "center"
        },
        cardContainer: {
            // backgroundColor: fade(theme.palette.primary.main, 1),
            minHeight: 600,
        },
        cardContent: {
            padding: theme.spacing(4)
        },
        cardItem: {
            marginTop: 20
        },
        title: {
            color: theme.palette.primary.contrastText,

        },
        subtitle: {
            color: theme.palette.primary.contrastText,
        },
        rating: {
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
        },
        ratingText: {
            fontSize: 20,
        },
    }))

                    {/* <Box>
                    <Link as="/companies" href="/companies/">
                        <a>Navigate to Companies</a>
                    </Link>
                </Box>
                <Box>
                    <Link as="/universities" href="/universities/">
                        <a>Navigate to Universities</a>
                    </Link>
                </Box>
                <Box>
                    <Link as="/reviews" href="/reviews/">
                        <a>Navigate to Reviews</a>
                    </Link>
                </Box>
                <Box>
                    <Link href="/login">
                        <a>Login Page</a>
                    </Link>
                </Box>
                <Box>
                    <Link href="/register">
                        <a>Register Page</a>
                    </Link>
                </Box> */}