import { Button, Card, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { AccountCircle, Grade } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

export default function TopReview() {
    const classes = useStyles();

    return (
        <Grid container direction='row' justify='space-between' alignItems='center' wrap="nowrap">

            <Grid item className={classes.accountIconItem}>
                <Link href="/profile/">
                    <Button className={classes.buttonAccount}>
                        <AccountCircle className={classes.accountIcon}/>
                    </Button>
                </Link>
            </Grid>

            <Grid item className={classes.reviewSummaryItem}>
                <Link href="/reviews/">
                    <Button className={classes.buttonReview}>
                        <Card variant='outlined' className={classes.reviewSummary}>
                            <Typography className={classes.reviewText}>Sample Text</Typography>
                        </Card>
                    </Button>
                </Link>
            </Grid>

            <Grid item className={classes.ratingItem}>
                <Grid container direction='row' alignItems="center" wrap="nowrap">
                    <Grid item>
                        <Grade fontSize="large"/>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.ratingText}>5/5</Typography>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonAccount: {
            height: '100%',
            width: '100%' 
        },
        accountIcon: {
            fontSize: 50
        },
        accountIconItem: {
            height: '100%',
            paddingLeft: theme.spacing(1),
        },
        buttonReview: {
            width: '100%' 
        },
        reviewSummaryItem: {
            width: '100%',
        },
        reviewSummary: {
            width: '90%',
            backgroundColor: theme.palette.info.main,
            height: 75,
        },
        reviewText: {
            color: theme.palette.secondary.contrastText,
        },
        ratingItem: {
            height: '100%',
            paddingRight: theme.spacing(1),
        },
        ratingText: {
            fontSize: 20,
            paddingLeft: theme.spacing(1)
        },
    }))
    