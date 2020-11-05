import { Button, Card, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { AccountCircle, Grade } from "@material-ui/icons";
import Link from "next/link";
import React from "react";

export default function TopCompany() {
    const classes = useStyles();

    return (
        <Link href="/reviews/">
            <Button className={classes.buttonReview}>
                <Grid container direction='row' justify='space-between' alignItems='center' wrap="nowrap">

                    <Grid item className={classes.accountIconItem}>
                        <AccountCircle className={classes.accountIcon} />
                    </Grid>

                    <Grid item className={classes.companyNameItem}>
                        <Button disabled className={classes.buttonReview}>
                            <Card variant='outlined' className={classes.companyName}>
                                <Typography className={classes.companyText}>Sample Company</Typography>
                            </Card>
                        </Button>
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
            </Button>
        </Link>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        buttonReview: {
            width: '100%' 
        },
        accountIcon: {
            fontSize: 50
        },
        accountIconItem: {
            height: '100%',
            paddingLeft: theme.spacing(1),
        },
        companyNameItem: {
            width: '100%',
        },
        companyName: {
            width: '90%',
            backgroundColor: theme.palette.info.main,
            height: '100%',
            // height: 50,
        },
        companyText: {
            fontSize: 30,
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
    