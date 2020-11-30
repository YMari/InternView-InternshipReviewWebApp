import { Backdrop, Box, Button, Card, createStyles, Fade, fade, Grid, InputBase, makeStyles, Modal, Theme, Typography} from "@material-ui/core";
import { ArrowDownward, ArrowUpward, AccountCircle, AddCircle, ClearRounded } from '@material-ui/icons';
import React from "react";
import ReviewMake from "../../lib/ui/components/reviewMake";
import ReviewSummary from "../../lib/ui/components/reviewSummary";
import useSWR from 'swr'
import { useRouter } from 'next/router'
import axios from 'axios'
import { ReviewViewModel } from "../../lib/ui/viewModels/reviewViewModels";
import RatingDisplay from "../../lib/ui/components/ratingDisplay";

export default function Company() {
    const classes = useStyles();
    const router = useRouter()

    const { data } = useSWR(`/api/company?search=${router.query.name}`, async (url:string) => {

        const result = await axios.get(url)
        console.log(result.data)
        if (result.data?.data?.length > 0) {
            return result.data.data[0]
        } 
        router.push("/")

    })

    const { data: reviewData } = useSWR(`/api/company/${router.query.name}/reviews`, async (url)=>{
        const res = await axios.get(url)
       
        if (res.data) {
            console.log(res.data.data)
            return res.data.data as ReviewViewModel[]
        }else{
            alert("Error ocurred loading")
            router.push('/')
        }
    })
    

    const [open, setOpen] = React.useState(false);
    
    const handleOpenModal = () => {
        setOpen(true);
    };

    const handleCloseModal = () => {
        setOpen(false);
    };

    const average = (reviewData: ReviewViewModel[]) => {
        let addition = 0
        reviewData.forEach((val)=>{addition+=val.salary})
        return (addition/reviewData.length).toFixed(2)
    }

    return(
        <Box className={classes.main}>
            <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap" className={classes.mainGrid}>

                <Grid container direction='column' alignItems="center" wrap="nowrap" justify='center' >

                    <Grid item>
                        {!data?<AccountCircle className={classes.accIcon}/>:<img className={classes.accImage} src={data.imageUrl} />}
                    </Grid>

                    <Grid item style={{textAlign:"center"}}>
                        <Typography className={classes.accName}>{!data?<>Loading ...</>:<>{data.name}</>}</Typography>
                    </Grid>

                    <Grid item className={classes.accRatingContainer}>
                        <Grid container direction='row' alignItems="center" wrap="nowrap" justify='space-between' className={classes.accRatingPts}>

                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <ArrowUpward fontSize="small" className={classes.accUpvotes}/>
                                    <Typography className={classes.accUpvotes}># upvotes</Typography>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap" justify='center' className={classes.accRatingPts}>
                                    <RatingDisplay rating={5} size="large" color="secondary"/>
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <ArrowDownward fontSize="small" className={classes.accDownvotes}/>
                                    <Typography className={classes.accDownvotes}># downvotes</Typography>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid container direction='row' alignItems="center" wrap="nowrap" justify='center' className={classes.accAvgSalaryContainer}>
                            <Typography className={classes.avgSalaryText}>Avg. Salary: {reviewData?"$"+average(reviewData):'No Data'}</Typography>
                        </Grid>

                    </Grid>

                    <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.spacer}>
                        <Typography className={classes.textWhite}>Reviews: {reviewData?reviewData.length:0}</Typography>
                    </Grid>
                    
                    <Card className={classes.cardMain}>
                        <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.cardGrid}>
                            <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.searchRow}>
                                <Grid item className={classes.search} justify="center">
                                    <InputBase
                                    placeholder="Search Review..."
                                    inputProps={{ 'aria-label': 'search' }}
                                    fullWidth={true}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    />
                                </Grid>
                                <Grid item justify='flex-end'>
                                    <Grid container direction='row' alignItems="center" wrap="nowrap">
                                        <Button>
                                            <Typography className={classes.addReview} onClick={handleOpenModal}>Add Review</Typography>
                                            <AddCircle fontSize="large" className={classes.addReviewIcon}/>
                                        </Button>

                                        <Modal
                                        open={open}
                                        onClose={handleCloseModal}
                                        closeAfterTransition
                                        BackdropComponent={Backdrop}
                                        BackdropProps={{
                                            timeout: 500,
                                        }}
                                        className={classes.modal}
                                        >
                                            <Fade in={open}>
                                                <Grid container direction='column' alignItems="center" justify='center' wrap="nowrap">
                                                    <Grid container direction='row' justify='flex-end' className={classes.closeModalBox}>
                                                        <Button onClick={handleCloseModal} size="small" className={classes.closeModalButton}>
                                                            <ClearRounded fontSize='large' className={classes.closeModalIcon}/>
                                                        </Button>
                                                    </Grid>
                                                    {
                                                        data?<ReviewMake 
                                                        close={handleCloseModal} company={data}/>:<>Loading ,,,</>
                                                    }
                                                </Grid>
                                            </Fade>
                                        </Modal>

                                    </Grid>
                                </Grid>
                            </Grid>


                            {
                                reviewData?reviewData.map((val, index) => (
                                    <Grid key={index} item className={classes.cardItem}> 
                                        <ReviewSummary review={val} />
                                    </Grid>
                                )):<>Loading</>
                            }
                            
                        </Grid>
                    </Card>

                </Grid>

            </Grid>
        </Box>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            marginTop: 10,
            padding: theme.spacing(1),
            display: 'flex',
            justifyContent: 'center',
        },
        mainGrid: {
            width: '90%'
        },
        accIcon: {
            fontSize: 150,
            color: theme.palette.primary.contrastText,
        },
        accName: {
            fontSize: 50,
            color: theme.palette.primary.contrastText,
            textAlign: "center"
        },
        accRatingContainer: {
            minWidth: '32%',
        },
        accRatingPts: {
            width: '100%',
        },
        accImage : {
            maxWidth: 100,
            maxHeight:100
        },
        ratingIcon: {
            color: theme.palette.secondary.main,
        },
        accUpvotes: {
            color: theme.palette.secondary.main,
        },
        accDownvotes: {
            color: theme.palette.info.main,
        },
        accAvgSalaryContainer: {
            paddingBottom: theme.spacing(2),
        },
        avgSalaryText: {
            fontSize: 30,
            color: theme.palette.primary.contrastText,
        },
        spacer: {
            paddingBottom: theme.spacing(1)
        },
        cardMain: {
            minWidth: '100%',
            minHeight: 300,
        },
        cardGrid: {
            padding: theme.spacing(1),
        },
        cardItem: {
            minWidth: '97%',
            paddingBottom: theme.spacing(2),
        },
        searchRow: {
            paddingTop: theme.spacing(0.2),
            paddingBottom: theme.spacing(2),
            width: '97%'
        },
        search: {
            marginLeft: '37%',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.info.main, 1),
            '&:hover': {
                backgroundColor: fade(theme.palette.info.main, 0.60),
            },
            margin:'auto',
            width: '25%',
        },
        inputRoot: {
            color: theme.palette.secondary.contrastText,
        },
        inputInput: {
            padding: theme.spacing(1.5),
            paddingLeft: '33%',
            transition: theme.transitions.create('width'),
            width: '100%',
        },
        addReview: {
            color: theme.palette.primary.main,
            paddingRight: theme.spacing(0.5),
        },
        addReviewIcon: {
            color: theme.palette.primary.main,
        },
        textWhite: {
            color: theme.palette.primary.contrastText,
        },

        modal:{
            overflow:'scroll',
            width: '100%',
            height: '100%'
        },
        closeModalBox: {
            paddingTop: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        closeModalButton: {
            backgroundColor: theme.palette.secondary.main,
        },
        closeModalIcon: {
            color: theme.palette.primary.contrastText,
        },
    }))
    