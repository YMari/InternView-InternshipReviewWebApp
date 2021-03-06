import { Box, Button, Card, Checkbox, createStyles, FormControl, Grid, InputAdornment, InputLabel, makeStyles, MenuItem, OutlinedInput, Select, TextField, Theme, Typography, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { AccountCircle } from '@material-ui/icons';
import ChipInput from 'material-ui-chip-input';
import {useUser} from '../hooks'
import { useRouter } from 'next/router';
import {ReviewMakeModel, ReviewViewModel} from '../viewModels/reviewViewModels';
import axios from 'axios';
import { mutate } from 'swr'

interface Props {
    company?: {
        id: number,
        name: string,
        imageUrl: string
    },
    forUpdate?: boolean,
    close: () => any,
    default?: ReviewViewModel,
}

export default function ReviewMake(props:Props) {

    const classes = useStyles();
    const user = useUser();
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false)

    const [values, setValues] = React.useState<ReviewMakeModel>({
        reviewTitle: props.default?props.default.reviewTitle:'',
        acceptedStatus: props.default?props.default.acceptedStatus:'',
        location: props.default?props.default.location:'',
        duration: props.default?props.default.duration:0,
        salary: props.default?props.default.salary:0,
        seekingDegree: props.default?props.default.seekingDegree:'',
        experienceType: props.default?props.default.experienceType:'',
        recommendation: props.default?props.default.recommendation:'',
        experienceRating: props.default?props.default.experienceRating:1,
        interviewDifficultyRating: props.default?props.default.interviewDifficultyRating:1,
        anonymous: props.default?.anonymous?props.default.anonymous:true,
    });

    const handleChange = (prop: keyof ReviewMakeModel) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });  
    };

    const [chipData, setChipData] = useState<String[]>(props.default?props.default.interviewQuestions:[])

    const handleAddChip = (chip: string) => {
        console.log(chip)
        setChipData([...chipData, chip])
    };

    const handleDeleteChip = (chipToDelete: string) => {
        setChipData(chipData.filter((c: string) => c !== chipToDelete))
    };

    const handleAnonCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, anonymous: event.target.checked});
    };

    const makeModel = () => {
        const toCreate: ReviewViewModel = {...values, 
            interviewQuestions:chipData, 
            company: props.company,
        }
        toCreate.salary = Number(values.salary),
        toCreate.duration = Number(values.duration),
        toCreate.anonymous = values.anonymous?true:false
        return toCreate
    }

    const create = async () => {
        
        console.log(props.company)
        const toCreate = makeModel()

        console.log(toCreate)
        setLoading(true)
        axios.post("/api/review", toCreate)
        .then((res) => res.data)
        .then(async ()=>{
            await mutate(`/api/company/${router.query.name}/reviews`)
            close()
        }
        )
        .then(()=>{setLoading(false);alert('Finished creating!');})
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
            setLoading(false)
        })
    }

    const update = async () => {
        const toModify = makeModel()
        setLoading(true)
        
        axios.put(`/api/review/${props.default?.id}`, toModify)
        .then((res) => res.data)
        .then(async ()=>{
            await mutate(`/api/review`)
            close()
        })
        .then(()=>{setLoading(false);alert('Finished Updating!');})
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
            setLoading(false)
        })

    } 

    useEffect(()=>{
        if (!user) {
            router.push('/login')
        }
    }, [user])

    return (
        <>
        <Box className={classes.main}>
            <Card className={classes.cardMain}>
        
                { !loading? <>
                <Grid container direction='column' alignItems="center">
                <Typography className={classes.cardTitle}>{props.forUpdate?'Update':'Review Creator'}</Typography>
                </Grid>

                <Grid container direction='column' wrap="nowrap" className={classes.gridMain}>
                        
                    <Grid container direction='column' wrap="nowrap">

                        <Grid item>
                            <FormControl variant="outlined" required className={classes.textField1}>
                                <InputLabel>Title</InputLabel>
                                <OutlinedInput
                                    label="Title"
                                    value={values.reviewTitle}
                                    onChange={handleChange('reviewTitle')}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl className={classes.textField1}>
                                <TextField
                                    disabled
                                    label="Student Name"
                                    value={user?.email}
                                    variant="outlined"
                                    InputProps={{
                                        classes: {
                                            root: classes.inputRoot,
                                            disabled: classes.disabled
                                        },
                                        startAdornment: <InputAdornment position="start"><AccountCircle fontSize="large"/></InputAdornment>
                                    }}
                                />
                            </FormControl>
                        </Grid>

                        <Grid item>
                            <FormControl required className={classes.textField1}>
                                <TextField
                                    disabled
                                    variant="outlined"
                                    label="Company"
                                    value={props.company.name}
                                    InputProps={{
                                        classes: {
                                            root: classes.inputRoot,
                                            disabled: classes.disabled
                                        },
                                    }}
                                />
                            </FormControl>
                        </Grid>    

                        

                        <Grid item>
                            <FormControl variant="outlined" required className={classes.textField1}>
                                <Select
                                value={values.acceptedStatus}
                                onChange={handleChange('acceptedStatus')}
                                defaultValue={"No Offer"}
                                >
                                    <MenuItem value={"No Offer"}>No Offer</MenuItem>
                                    <MenuItem value={"Declined Offer"}>Declined Offer</MenuItem>
                                    <MenuItem value={"Worked"}>Worked</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                    </Grid>

                    <Grid item>
                        <Card className={classes.cardInner1}>
                            
                            <Grid container direction='row' alignItems="center" wrap="nowrap" className={classes.inner1Info}>
                                <Grid container direction='column' wrap="nowrap" className={classes.inner1InfoCol1}>

                                    <Grid item>
                                        <FormControl required className={classes.textField2}>
                                            <TextField 
                                            variant="outlined" 
                                            label="Location" 
                                            required 
                                            className={classes.textFieldInner}
                                            value={values.location}
                                            onChange={handleChange('location')}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl required className={classes.textField2}>
                                            <TextField
                                            variant="outlined"
                                            label="Duration"
                                            type="number"
                                            required
                                            value={values.duration}
                                            onChange={handleChange('duration')}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">Weeks</InputAdornment>
                                            }}
                                            className={classes.textFieldInner}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl required className={classes.textField2}>
                                            <TextField
                                            variant="outlined"
                                            label="Salary"
                                            type="number"
                                            required
                                            value={values.salary}
                                            onChange={handleChange('salary')}
                                            InputProps={{
                                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                                endAdornment: <InputAdornment position="end">USD</InputAdornment>,
                                            }}
                                            className={classes.textFieldInner}
                                            />
                                        </FormControl>
                                    </Grid>

                                </Grid>

                                <Grid container direction='column' wrap="nowrap" className={classes.inner1InfoCol2}>

                                    <Grid item>
                                        <FormControl required className={classes.textField2}>
                                            <Select
                                                variant="outlined"
                                                required
                                                value={values.seekingDegree}
                                                onChange={handleChange('seekingDegree')}
                                                className={classes.textFieldInner}
                                            >
                                                <MenuItem value={"Bachelors"}> Bachelors </MenuItem>
                                                <MenuItem value={"Masters"}> Masters </MenuItem>
                                                <MenuItem value={"PhD"}> PhD </MenuItem>
                                            </Select>
                                            <InputLabel className={classes.labelPadding1}>Seeking Degree</InputLabel>
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl required className={classes.textField2}>
                                            <Select
                                                variant="outlined"
                                                required
                                                value={values.experienceType}
                                                onChange={handleChange('experienceType')}
                                                className={classes.textFieldInner}
                                            >
                                                <MenuItem value={"Internship"}> Internship </MenuItem>
                                                <MenuItem value={"COOP"}> COOP </MenuItem>
                                            </Select>
                                            <InputLabel className={classes.labelPadding1}>Experience Type</InputLabel>
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl required className={classes.textField2}>
                                            <Select
                                                variant="outlined"
                                                required
                                                value={values.experienceRating}
                                                onChange={handleChange('experienceRating')}
                                                className={classes.textFieldInner}
                                            >
                                                <MenuItem value={1}> 1 </MenuItem>
                                                <MenuItem value={2}> 2 </MenuItem>
                                                <MenuItem value={3}> 3 </MenuItem>
                                                <MenuItem value={4}> 4 </MenuItem>
                                                <MenuItem value={5}> 5 </MenuItem>
                                            </Select>
                                            <InputLabel className={classes.labelPadding1}>Experience Rating</InputLabel>
                                        </FormControl>
                                    </Grid>
                                    
                                </Grid>

                            </Grid>

                            <Grid container direction='column' alignItems="center" wrap="nowrap" className={classes.gridItem}>
                                <Card className={classes.cardInner2}>

                                    <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap" className={classes.cardSubtitle}>
                                        <Typography className={classes.intInfo}>Interview Information</Typography>
                                    </Grid>
                                    
                                    <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap" className={classes.interviewInputs}>
                                        <FormControl fullWidth>
                                            <ChipInput
                                                variant="outlined"
                                                placeholder="Add Interview Questions..."
                                                value={chipData}
                                                onAdd={handleAddChip}
                                                onDelete={(chip, _) => {handleDeleteChip(chip)}}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap" className={classes.interviewInputs}>
                                        <FormControl fullWidth>
                                            <TextField
                                                required
                                                label="Recommendations, Tips, Experience, etc..."
                                                defaultValue={''}
                                                variant="outlined"
                                                value={values.recommendation}
                                                onChange={handleChange('recommendation')}
                                                multiline
                                                rows={10}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid container direction='row' alignItems="center" justify='center' wrap="nowrap" className={classes.interviewInputs}>
                                        <FormControl fullWidth>
                                            <Select
                                                variant="outlined"
                                                label="Interview Difficulty Rating"
                                                required
                                                value={values.interviewDifficultyRating}
                                                onChange={handleChange('interviewDifficultyRating')}
                                                className={classes.textFieldInner}
                                            >
                                                <MenuItem value={1}> 1 </MenuItem>
                                                <MenuItem value={2}> 2 </MenuItem>
                                                <MenuItem value={3}> 3 </MenuItem>
                                                <MenuItem value={4}> 4 </MenuItem>
                                                <MenuItem value={5}> 5 </MenuItem>
                                            </Select>
                                            <InputLabel className={classes.labelPadding2}>Interview Difficulty Rating</InputLabel>
                                        </FormControl>
                                    </Grid>

                                </Card>
                            </Grid>
                            <Grid container direction='row' alignItems="center" wrap="nowrap" justify='flex-end' className={classes.ratingRow}>
                                <Grid item className={classes.anonGrid}>
                                    <Grid container direction='row' alignItems="center" wrap="nowrap" justify='center'>
                                        <Grid item>
                                            <Checkbox
                                                value={values.anonymous}
                                                onChange={handleAnonCheck}
                                                color='default'
                                            />
                                        </Grid>
                                        <Grid item>
                                            <Typography>Post Anonymously</Typography>
                                        </Grid>
                                    </Grid>         
                                </Grid>
                                <Grid item >
                                    <Button onClick={props.forUpdate?update:create} className={classes.buttonSubmit}>
                                        <Typography>Submit</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                </Grid>
                </>
                : <Grid container justify="center" alignItems="center"><CircularProgress /></Grid> }
            </Card>
        </Box>
        </>
    )  
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            minWidth: '60%',
            maxWidth: '90%',
            height: '100%',
            paddingTop: theme.spacing(4),
            paddingBottom: theme.spacing(4),
        },
        cardMain: {
            padding: theme.spacing(2),
        },
        gridMain: {
            
        },
        name: {
            paddingLeft: theme.spacing(1)
        },
        companyName: {

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
            padding: theme.spacing(1),
            paddingTop: theme.spacing(2),
        },
        inner1Info: {
            paddingBottom: theme.spacing(1),
        },
        inner1InfoCol1: {
            
        },
        inner1InfoCol2: {

        },
        cardInner2: {
            padding: theme.spacing(1),
            width: '97%',
            height: '97%',
        },
        inner2Item: {
            padding: theme.spacing(1),
            paddingLeft: theme.spacing(2),
        },

        ratingRow: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
        },
        anonGrid: {
            paddingRight: theme.spacing(5),
        },
        buttonSubmit: {
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


        inputRoot: {
            "&$disabled": {
              color: theme.palette.info.contrastText
            }
        },
        disabled: {},
        
        textField1: {
            paddingBottom: theme.spacing(1.5),
            width: '100%',
        },
        textField2: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingBottom: theme.spacing(1.5),
            width: '100%',
        },
        textFieldInner: {
            backgroundColor: theme.palette.common.white,
        },
        interviewInputs: {
            paddingLeft: theme.spacing(1),
            paddingRight: theme.spacing(1),
            paddingBottom: theme.spacing(1.5),
        },
        intInfo: {
            fontSize: 20
        },
        cardSubtitle: {
            padding: theme.spacing(1)
        },
        labelPadding1: {
            paddingLeft: theme.spacing(3),
        },
        labelPadding2: {
            paddingLeft: theme.spacing(2),
        },
    }))