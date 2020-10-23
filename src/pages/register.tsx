import { Box, Button, Card, CardHeader, createStyles, FormControl, Grid, IconButton, 
    InputAdornment, InputLabel, makeStyles,  OutlinedInput, Select, TextField, Theme, Typography, Divider, MenuItem, CircularProgress } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { NextPageContext } from "next";
import Link from "next/link";
import React from "react";
import backend_container from "../lib/container";
import { IStudyProgram, IStudyProgramRepository, IUniversity, IUniversityRepository, S_TYPES } from "../lib/domain/student";
import {container, UI_TYPES} from '../lib/ui/client_container'
import { IRequestService } from "../lib/ui/interfaces";
import { useRouter } from 'next/router'

interface State {
    name: string;
    email: string;
    password: string;
    showPassword: boolean;
    studyProgramId?: number;
    universityId?: number;
}

interface RegisterProps {
    universityList: IUniversity[],
    studyProgramList: IStudyProgram[]
}

export default function RegisterPage(props:RegisterProps) {
    const classes = useStyles();

    const router = useRouter()

    const [loading, setLoading] = React.useState<boolean>(false);

    const [values, setValues] = React.useState<State>({
        name: '',
        email: '',
        password: '',
        showPassword: false,
        studyProgramId: -1,
        universityId: -1,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };
    
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const onSubmit = async () => {
        
        setLoading(true)

        const req = container.get<IRequestService>(UI_TYPES.IRequestService)

        const result = await req.register({
            email:values.email,
            name: values.name,
            password:values.password,
            studyProgramId:values.studyProgramId,
            universityId:values.universityId
        })
        
        alert(result?.message)

        if (result?.status === 'Ok') {
            router.push('/login')
        }else {
            setLoading(false)
        }

    }



    return(
        <Box className={(classes.margin)}>
            <Typography  className={(classes.titlePage)}>InternView</Typography>
            <br />
            <Grid
            container
            direction="column"
            alignContent="center"
            justify="center"
            wrap='wrap'
            style={{ minHeight: '50vh' }}
            spacing={4}
            >
                {!loading?<Card className={classes.card}>
                    <CardHeader className={(classes.titleCard)} title="Create Account"/>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.input)} variant="outlined" fullWidth={true} required={true}>
                            <InputLabel htmlFor="outlined-email">Name</InputLabel>
                            <OutlinedInput
                                id="name-input"
                                label="Name"
                                value={values.name}
                                onChange={handleChange('name')}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.input)} variant="outlined" fullWidth={true} required={true}>
                            <InputLabel htmlFor="outlined-email">Email</InputLabel>
                            <OutlinedInput
                                id="email-input"
                                label="Email"
                                value={values.email}
                                onChange={handleChange('email')}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.input)} variant="outlined" fullWidth={true} required={true}>
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    label="Password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                        >
                                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.input)} variant="outlined" fullWidth={true} required={true}>
                            <InputLabel htmlFor="outlined-study-program">Study Program</InputLabel>
                            <Select 
                                label="Study Program"
                                value={values.studyProgramId}
                                onChange={handleChange('studyProgramId')}
                                defaultValue={props.studyProgramList[0].id}
                            >
                                    {
                                        props.studyProgramList.map((val, index) => (
                                            <MenuItem 
                                                key={index*900}
                                                value={val.id}
                                            >
                                                {val.name}
                                            </MenuItem>
                                        ))
                                    }
                            </Select>
                            
                        </FormControl>     
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.input)} variant="outlined" fullWidth={true} required={true}>
                            <InputLabel htmlFor="outlined-university">University</InputLabel>
                            <Select
                                value={values.universityId}
                                onChange={handleChange('universityId')}
                                defaultValue={props.universityList[0].id}  
                                label="University">
                                    {
                                        props.universityList.map((val, index) => (
                                            <MenuItem
                                                key={index*800}
                                                value={val.id}
                                            >
                                                {val.name}
                                            </MenuItem>
                                        ))
                                    }
                            </Select>
                        </FormControl>   
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Box id="new-account-box">
                            <Button 
                            onClick={onSubmit}
                            variant="contained" color="secondary">
                                <Typography>Register</Typography>
                            </Button>
                        </Box>
                        <br/>
                        <Divider/>
                        <Box id="login-ref-box">
                            <Link  href="/login">
                                <Button color="primary">
                                    <Typography>Already have an account?</Typography>
                                </Button>
                            </Link>
                        </Box>
                    </Grid>
                </Card>: <CircularProgress />}
                
            </Grid>
        </Box>         
    )
}


interface IServerSideProps {
    props: RegisterProps
} 

export async function getServerSideProps(ctx:NextPageContext): Promise<IServerSideProps> {
    
    const uniRepo = backend_container.get<IUniversityRepository>(S_TYPES.IUniversityRepository) 
    const spRepo = backend_container.get<IStudyProgramRepository>(S_TYPES.IStudyProgramRepository)

    return {
        props: {
            universityList: await uniRepo.getAllUniversity(),
            studyProgramList: await spRepo.getAllStudyProgram()
        }
    }

}


const useStyles = makeStyles((theme: Theme) =>    
    createStyles({
    margin: {
        margin: theme.spacing(1),
    },
    card: {
        padding: theme.spacing(4, 12),
        textAlign: "center",
        color: theme.palette.text.primary,
        minWidth: 500,
        minHeight: 500,
        maxHeight: 800,
    },
    container: {
        gridGap: theme.spacing(3),
    },
    titlePage: {
        textAlign: "center",
        padding: theme.spacing(1),
        color: "white",
        fontSize: 40,
        fontWeight: 500,
    },
    titleCard: {
        color: theme.palette.text.hint,
    },
    gridItem: {
        paddingBottom: theme.spacing(1)
    },
    input: {
        backgroundColor: theme.palette.info.main,
        margin: theme.spacing(1)
    },
  }),
);