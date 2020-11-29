import { Button, Card, createStyles, Grid, makeStyles, Theme, Typography } from "@material-ui/core";
import { AccountCircle, Grade } from "@material-ui/icons";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import useSWR from "swr";
import axios from 'axios'
import { CompanyViewModel } from "../viewModels/companyViewModels";
import { ReviewViewModel } from "../viewModels/reviewViewModels";

interface TopCompanyProps {
    company: CompanyViewModel
}

export default function TopCompany(props: TopCompanyProps) {
    const classes = useStyles();

    const { data } = useSWR(`/api/company/${props.company.name}/reviews`, async (url)=>{
        const res = await axios.get(url)
       
        if (res.data) {
            console.log(res.data.data)
            return res.data.data as ReviewViewModel[]
        }else{
            alert("Error ocurred loading")
        }
    })

    return (
        <Grid container direction='row' justify='space-between' alignItems='center' wrap="nowrap">

            <Grid item className={classes.accountIconItem}>
                <AccountCircle className={classes.accountIcon}/>
            </Grid>

            <Grid item className={classes.companyNameItem}>
                <Link href={`/company/${props.company.name}`}>
                    <Button className={classes.buttonCompany}>
                        <Card variant='outlined' className={classes.companyName}>
                            <Typography className={classes.companyText}>{props.company.name}</Typography>
                        </Card>
                    </Button>
                </Link>
            </Grid>

            <Grid item className={classes.ratingItem}>
                <Grid container direction='column' alignItems="center" wrap="nowrap">
                    <Grid item>
                        <Typography className={classes.ratingText}>Reviews: </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.ratingText}>{data?data.length:"Loading..."}</Typography>
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
        companyNameItem: {
            width: '100%',
        },
        buttonCompany: {
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
    