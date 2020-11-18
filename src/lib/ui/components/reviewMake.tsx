import { Backdrop, Box, Button, Card, CardHeader, Checkbox, Chip, createStyles, Fade, FormControl, Grid, InputAdornment, InputLabel, makeStyles, Menu, MenuItem, Modal, OutlinedInput, Select, TextField, Theme, Typography } from '@material-ui/core';
import Link from 'next/link';
import React, { constructor, useEffect, useState } from 'react';
import { ArrowDownward, ArrowUpward, AccountCircle, Grade, ArrowDropDown } from '@material-ui/icons';
import theme from '../theme';
import ChipInput from 'material-ui-chip-input';
import {useUser} from '../hooks'
import { useRouter } from 'next/router';

interface State {
    title: string;
    company: string;
    offer: string;
    location: string;
    duration: number;
    salary: number;
    degree: string;
    work: string;
    tips: string;
}

interface ChipData {
    key: number;
    label: string;
}

export default function ReviewMake() {

    const classes = useStyles();
    const user = useUser();
    const router = useRouter();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
    };

    const [values, setValues] = React.useState<State>({
        title: '',
        company: '',
        offer: 'No Offer',
        location: '',
        duration: null,
        salary: null,
        degree: '',
        work: '',
        tips: '',
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });  
    };

    const [chipData, setChipData] = useState<string[]>([])

    const handleAddChip = (chip: string) => {
        console.log(chip)
        setChipData([...chipData, chip])
    };

    const handleDeleteChip = (chipToDelete: string) => {
        setChipData(chipData.filter((c: string) => c !== chipToDelete))
    };

    const [anonCheck, setAnonCheck] = React.useState(true);

    const handleAnonCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnonCheck(event.target.checked);
    };

    useEffect(()=>{
        if (!user) {
            router.push('/login')
        }
    }, [user])

    return (
        <>
        <Box className={classes.main}>
            <Card className={classes.cardMain}>
        
                
                <Grid container direction='column' alignItems="center">
                    <Typography className={classes.cardTitle}>Review Creator</Typography>
                </Grid>

                <Grid container direction='column' wrap="nowrap" className={classes.gridMain}>
                        
                    <Grid container direction='column' wrap="nowrap">

                        <Grid item>
                            <FormControl variant="outlined" required className={classes.textField1}>
                                <InputLabel>Title</InputLabel>
                                <OutlinedInput
                                    label="Title"
                                    value={values.title}
                                    onChange={handleChange('title')}
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
                            <FormControl variant="outlined" required className={classes.textField1}>
                                <InputLabel>Company</InputLabel>
                                <OutlinedInput
                                    label="Company"
                                    value={values.company}
                                    onChange={handleChange('company')}
                                />
                            </FormControl>
                        </Grid>    

                        <Grid item>
                            <FormControl className={classes.textField1}>
                                <TextField
                                    disabled
                                    label="Date"
                                    value={'Date'}
                                    variant="outlined"
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
                                value={values.offer}
                                onChange={handleChange('offer')}
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
                                            <TextField variant="outlined" label="Location" required className={classes.textFieldInner}/>
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
                                                endAdornment: <InputAdornment position="end">Months</InputAdornment>
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
                                            // {...values.salary === null?
                                            //     InputProps={{
                                            //         endAdornment: <InputAdornment position="end">USD</InputAdornment>,
                                            //     }}
                                            // :
                                            //     InputProps={{
                                            //         startAdornment: <InputAdornment position="start">$</InputAdornment>,
                                            //         endAdornment: <InputAdornment position="end">USD</InputAdornment>,
                                            //     }}
                                            // }
                                            className={classes.textFieldInner}
                                            />
                                        </FormControl>
                                    </Grid>

                                </Grid>

                                <Grid container direction='column' wrap="nowrap" className={classes.inner1InfoCol2}>

                                    <Grid item>
                                        <FormControl required className={classes.textField2}>
                                            <TextField
                                                variant="outlined"
                                                label="Degree"
                                                required
                                                value={values.degree}
                                                onChange={handleChange('degree')}
                                                className={classes.textFieldInner}
                                            />
                                        </FormControl>
                                    </Grid>

                                    <Grid item>
                                        <FormControl required className={classes.textField2}>
                                            <TextField
                                                variant="outlined"
                                                label="Work Type"
                                                required
                                                value={values.work}
                                                onChange={handleChange('work')}
                                                className={classes.textFieldInner}
                                            />
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
                                                placeholder="Add Interview Questions... (WIP)"
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
                                                value={values.tips}
                                                onChange={handleChange('tips')}
                                                multiline
                                                rows={10}
                                            />
                                        </FormControl>
                                    </Grid>

                                </Card>
                            </Grid>
                            <Grid container direction='row' alignItems="center" wrap="nowrap" justify='flex-end' className={classes.ratingRow}>
                                <Grid item className={classes.anonGrid}>
                                    <Grid container direction='row' alignItems="center" wrap="nowrap" justify='center'>
                                        <Grid item>
                                            <Checkbox
                                                checked={anonCheck}
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
                                    <Button className={classes.buttonSubmit}>
                                        <Typography>Submit</Typography>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>

                </Grid>
            
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
    }))