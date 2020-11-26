import { Backdrop, Box, Button, Card, Checkbox, CircularProgress, createStyles, Fade, FormControl, Grid, makeStyles, Menu, MenuItem, Modal, TextField, Theme, Typography } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import theme from '../../lib/ui/theme';
import { ReviewViewModel } from '../../lib/ui/viewModels/reviewViewModels';
import { ArrowDownward, ArrowUpward, AccountCircle, ArrowDropDown, ClearRounded } from '@material-ui/icons';
import ReviewMake from '../../lib/ui/components/reviewMake';
import axios from 'axios'
import {mutate} from 'swr'

interface Props {
    review: ReviewViewModel,
    forUpdate?: boolean
}

export default function Review(props: Props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {setAnchorEl(event.currentTarget)}
    const handleCloseMenu = () => {setAnchorEl(null)}
    
    const [loading, setLoading] = React.useState(false)

    const [open, setOpen] = React.useState(false)
    const handleOpenModal = () => {setOpen(true)}
    const handleCloseModal = () => {setOpen(false)}

    const [openMaker, setOpenMaker] = React.useState(false)
    const handleOpenMaker = () => {setOpenMaker(true)}
    const handleCloseMaker = () => {setOpenMaker(false)}
    
    const deleteReq = () => {
        const confirmation = confirm("Are you sure you want to delete?")
        if (confirmation && props.forUpdate) {
            setLoading(true)
            axios.delete(`/api/review/${props.review?.id}`)
            .then((res) => res.data)
            .then(async ()=>{
                await mutate(`/api/review`)
                handleCloseModal()
            })
            .then(()=>setLoading(false))
            .catch(err => {
                if (err.response) {
                    // client received an error response (5xx, 4xx)
                    alert(err.response.data.message)
                    close()
                } else if (err.request) {
                    // client never received a response, or request never left
                    console.log(err.request)
                } else {
                    // anything else
                    console.log(err)
                }
                
            })
        }
    }

    return (
        <Box className={classes.main}>
            <Card className={classes.cardMain}>
                {!loading?
                    <>
                        <Grid container direction='column' alignItems="center">
                    <Typography className={classes.cardTitle}>{props.review.reviewTitle}</Typography>
                </Grid>

                <Grid container direction='column' wrap="nowrap" className={classes.gridMain}>

                    <Grid container direction='column' wrap="nowrap">
                        
                        <Grid item>
                            <Link href="">
                                <Button>   
                                    <Typography>Company: {props.review.company.name}</Typography>   
                                </Button>
                            </Link>
                        </Grid>

                        <Grid container direction='row' alignItems="center" wrap="nowrap" justify='space-between' className={classes.checklist}>
                            <Grid item>
                                <Typography>Date Posted: {props.review.dateCreated}</Typography>
                            </Grid>
                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <Checkbox disabled checked={props.review.acceptedStatus === 'No Offer'}/>
                                    <Typography>No offer</Typography>  
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <Checkbox disabled checked={props.review.acceptedStatus === 'Declined Offer'}/>
                                    <Typography>Accepted but declined</Typography>
                                </Grid>
                            </Grid>
                            <Grid item> 
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                    <Checkbox disabled checked={props.review.acceptedStatus === 'Worked'}/>
                                    <Typography>Worked</Typography> 
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Card className={classes.cardInner1}>
                            
                            <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.inner1Info}>
                                <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.inner1InfoCol1}>
                                    <Grid item>
                                        <Typography>Location: {props.review.location}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Duration: {props.review.duration} in weeks</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Salary: {props.review.salary}</Typography>
                                    </Grid>
                                </Grid>
                                <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.inner1InfoCol2}>
                                    <Grid item>
                                        <Typography>Degree: {props.review.seekingDegree}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Work Type: {props.review.experienceType}</Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography>Experience Rating: {props.review.experienceRating}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.gridItem}>
                                <Card className={classes.cardInner2}>

                                    <Grid item className={classes.inner2Item}>
                                        <Typography>Interview</Typography>
                                    </Grid>
                                    
                                    <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap">

                                        <Button
                                        variant="contained"
                                        color="primary"
                                        endIcon={<ArrowDropDown/>}
                                        onClick={handleClick}
                                        className={classes.buttonQuestions}
                                        >
                                        Interview Questions
                                        </Button>

                                        <Menu
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleCloseMenu}
                                        className={classes.menuList}
                                        PaperProps={{
                                            style: {
                                              maxHeight: 300,
                                              maxWidth: '90%',
                                            },
                                        }}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                        >       
                                            {
                                                props.review.interviewQuestions.map((val, index) => (
                                                    <MenuItem key={index} onClick={handleCloseMenu}>{val}</MenuItem>
                                                ))
                                            }
                                        </Menu>
                                        
                                    </Grid>
                                    
                                    <Grid item className={classes.inner2Item}>
                                        <Typography>Recommendations</Typography>
                                    </Grid>

                                    <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap">
                                        <FormControl className={classes.textBox}>
                                            <TextField
                                                disabled
                                                defaultValue={props.review.recommendation}
                                                variant="outlined"
                                                multiline={true}
                                                rows={10}
                                                InputProps={{
                                                    classes: {
                                                        root: classes.inputRoot,
                                                        disabled: classes.disabled
                                                    }   
                                                }}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.inner2Item}>
                                            <Typography>Interview Difficulty: {props.review.interviewDifficultyRating}</Typography>
                                    </Grid>

                                </Card>
                            </Grid>
                            <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.ratingRow}>
                                <Grid container direction='row' alignItems="center">
                                    <Grid item>
                                        <Grid container direction='row' alignItems="center">
                                            <Button>
                                                <ArrowDownward fontSize="large"/>
                                            </Button>
                                            <Typography className={classes.ratingNum}># Downvotes</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container direction='row' alignItems="center">
                                            <Button>
                                                <ArrowUpward fontSize="large"/>
                                            </Button>
                                            <Typography className={classes.ratingNum}># Upvotes</Typography>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item >
                                <Grid container direction='row' alignItems="center" wrap="nowrap">
                                        {
                                            props.forUpdate?
                                            <>
                                                <Grid item className={classes.buttonUpdateGrid}>
                                                    <Button onClick={deleteReq}className={classes.buttonReport}>
                                                        <Typography>Delete</Typography>
                                                    </Button>
                                                </Grid>
                                                <Grid item className={classes.buttonUpdateGrid}>
                                                    <Button onClick={handleOpenMaker} className={classes.buttonReport}>
                                                        <Typography>Update</Typography>
                                                    </Button>
                                                </Grid>
                                                <Modal
                                                    open={openMaker}
                                                    onClose={handleCloseMaker}
                                                    closeAfterTransition
                                                    BackdropComponent={Backdrop}
                                                    BackdropProps={{
                                                        timeout: 500,
                                                    }}
                                                    className={classes.modal}
                                                    >
                                                        
                                                            <Grid container direction='column' alignItems="center" justify='center' >
                                                                <Grid container direction='row' justify='flex-end' className={classes.closeModalBox}>
                                                                    <Button onClick={handleCloseMaker} size="small" className={classes.closeModalButton}>
                                                                        <ClearRounded fontSize='large' className={classes.closeModalIcon}/>
                                                                    </Button>
                                                                </Grid>
                                                                
                                                                <ReviewMake close={handleCloseMaker} 
                                                                    default={props.review}
                                                                    forUpdate
                                                                    company={props.review.company}
                                                                />
                                                            </Grid>
                                                        
                                                </Modal>
                                            </>
                                            :
                                            <></>
                                        }
                                        <Grid item>
                                            <Button  className={classes.buttonReport} onClick={handleOpenModal}>
                                                <Typography>Report</Typography>
                                            </Button>
                                        </Grid>
                                    </Grid>
                                    <Modal
                                    open={open}
                                    onClose={handleCloseModal}
                                    closeAfterTransition
                                    BackdropComponent={Backdrop}
                                    BackdropProps={{
                                        timeout: 500,
                                    }}
                                    className={classes.reportModal}
                                    >
                                        <Fade in={open}>
                                            <Card className={classes.modalCard}>

                                                        <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.modalGrid}>
                                                            <Grid item className={classes.gridItem}>
                                                                <Typography className={classes.modalTitle}>Why would you like to report this review?</Typography>
                                                            </Grid>
                                                            <Grid container direction='row' alignItems="center" justify='center' className={classes.gridItem}>
                                                                <FormControl className={classes.textBox}>
                                                                    <TextField
                                                                        variant="outlined"
                                                                        multiline={true}
                                                                        rows={10}
                                                                    />
                                                                </FormControl>
                                                            </Grid>
                                                            <Grid container direction='row' alignItems="center" wrap="nowrap" justify='flex-end'>
                                                                <Grid item className={classes.modalButtonPos}>
                                                                    <Button className={classes.modalButton1}>
                                                                        <Typography>Report</Typography>
                                                                    </Button>
                                                                </Grid>
                                                                <Grid item className={classes.modalButtonPos}>
                                                                    <Button className={classes.modalButton2} onClick={handleCloseModal}>
                                                                        <Typography>Cancel</Typography>
                                                                    </Button>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        
                                                    </Card>
                                                </Fade>

                                            </Modal>
                                        </Grid>
                                    </Grid>
                                
                        </Card>
                    </Grid>

                </Grid>
                    </>: <Grid container justify="center" alignItems="center"><CircularProgress /></Grid>
                }
                
            </Card>
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
        cardMain: {
            padding: theme.spacing(2),
            maxWidth: '90%',
            minWidth: '50%',
        },
        gridMain: {
            
        },
        accountGrid: {
            paddingLeft: theme.spacing(0.7)
        },
        gridTitleItem: {
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center'
        },
        gridItem: {
            paddingBottom: theme.spacing(1)
        },
        cardTitle: {
            fontSize: 30,
        },
        cardInner1: {
            backgroundColor: theme.palette.secondary.main,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
        },
        inner1Info: {
            paddingBottom: theme.spacing(1),
        },
        inner1InfoCol1: {
            
        },
        inner1InfoCol2: {

        },
        cardInner2: {
            width: '97%',
            height: '97%',
        },
        inner2Item: {
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(2),
        },
        cardSubtitle: {

        },
        buttonQuestions: {
            width: '97%',
        },
        textBox: {
            width: '97%',
        },
        ratingRow: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        buttonUpdateGrid: {
            paddingRight: theme.spacing(1)
        },
        buttonUpdate: {
            backgroundColor: theme.palette.background.default,
            color: theme.palette.primary.contrastText,
            padding: theme.spacing(1),
        },
        buttonReport: {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            padding: theme.spacing(1),
        },
        ratingNum: {
            // backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.contrastText,
            padding: theme.spacing(1),
        },
        checklist: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(20),
        },
        name: {
            paddingLeft: theme.spacing(1)
        },
        reportModal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        },
        modal:{
            // display: 'flex',
            // alignItems: 'center',
            // justifyContent: 'center',
            overflow:'scroll',
            width:'100%',
            hieght: '100%'
        },
        modalCard: {
            width: 700,
            height: 330,
            maxWidth: '90%',
            maxHeight: '90%',
        },
        modalGrid: {
            padding: theme.spacing(1),
        },
        modalTitle: {
            fontSize: 20,
        },
        modalInput: {
            
        },
        inputRoot: {
            "&$disabled": {
              color: theme.palette.info.contrastText
            }
        },
        disabled: {},
        
        modalButtonPos: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
        },
        modalButton1: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.secondary.main,
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },

        modalButton2: {
            color: theme.palette.primary.contrastText,
            backgroundColor: theme.palette.primary.main,
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },

        menuList: {
            marginTop: 45,
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