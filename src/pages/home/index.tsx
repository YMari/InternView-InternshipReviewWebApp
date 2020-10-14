import { Box, Card, createStyles, fade, Grid, makeStyles, Theme, Typography } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

export default function Home() {
    const classes = useStyles();
    return(
        <>
        <Box width="100%" maxHeight="500" >
            <img src="/backgroundImage.png" style={{width:"100%",maxHeight:700, opacity:'0.5', objectFit:'cover'}}/>
        </Box>
        {/* <Grid
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
                        <Link as="/reviews" href="/reviews/">
                            <a>Navigate to Reviews</a>
                        </Link>
                    </Card>
                </Grid>
                <Grid item className={classes.gridItem}>
                    <Card className={classes.cardContainer}>
                        <Link as="/companies" href="/companies/">
                            <a>Navigate to Companies</a>
                        </Link>
                    </Card>
                </Grid>
            </Grid>
        </Grid> */}
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        gridFull: {
            marginTop: -610,
        },
        gridContent: {
            paddingTop: theme.spacing(8)
        },
        gridItem: {
            minWidth: '42%',
        },
        cardContainer: {
            backgroundColor: fade(theme.palette.primary.main, 1),
            minHeight: 600,
        },
        title: {
            color: theme.palette.primary.contrastText,

        },
        subtitle: {
            color: theme.palette.primary.contrastText,
        }
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