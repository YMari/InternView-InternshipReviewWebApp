import { Box, Button, Card, CardHeader, createStyles, FormControl, Grid, IconButton, 
    InputAdornment, InputLabel, makeStyles, NativeSelect, OutlinedInput, Select, TextField, Theme, Typography, Divider, MenuItem } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { NextPageContext } from "next";
import Link from "next/link";
import React, {useEffect} from "react";
import container from "../lib/container";
import { IStudyProgram, IStudyProgramRepository, IUniversity, IUniversityRepository, S_TYPES } from "../lib/domain/student";

interface State {
    password: string;
    showPassword: boolean;
}

interface RegisterProps {
    universityList: IUniversity[],
    studyProgramList: IStudyProgram[]
}

export default function RegisterPage(props:RegisterProps) {
    const classes = useStyles();

    const [values, setValues] = React.useState<State>({
      password: '',
      showPassword: false,
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

    return(
        <Box className={(classes.margin)}>
            <Typography className={(classes.titlePage)}>InternView</Typography>
            <Grid
            container
            direction="column"
            alignContent="center"
            justify="center"
            wrap='wrap'
            style={{ minHeight: '50vh' }}
            spacing={4}
            >
                <Card className={classes.card}>
                    <CardHeader className={(classes.titleCard)} title="Create Account"/>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
                            <InputLabel htmlFor="outlined-email">Name</InputLabel>
                            <OutlinedInput id="name-input" label="Name"  />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
                            <InputLabel htmlFor="outlined-email">Email</InputLabel>
                            <OutlinedInput id="email-input" label="Email"  />
                        </FormControl>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
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
                        <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
                            <InputLabel htmlFor="outlined-study-program">Study Program</InputLabel>
                            <Select defaultValue={props.studyProgramList[0].id} label="Study Program">
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
                        <FormControl className={(classes.margin)} variant="outlined" fullWidth={true}>
                            <InputLabel htmlFor="outlined-university">University</InputLabel>
                            <Select
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
                            <Button variant="contained" color="secondary">
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
                </Card>
            </Grid>
        </Box>         
    )
}


interface IServerSideProps {
    props: RegisterProps
} 

export async function getServerSideProps(ctx:NextPageContext): Promise<IServerSideProps> {
    
    const uniRepo = container.get<IUniversityRepository>(S_TYPES.IUniversityRepository) 
    const spRepo = container.get<IStudyProgramRepository>(S_TYPES.IStudyProgramRepository)

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
        // width: '30vw',
        // height: '32vw'
    },
    container: {
        gridGap: theme.spacing(3),
    },
    titlePage: {
        textAlign: "center",
        padding: theme.spacing(1),
        color: theme.palette.text.hint,
        fontSize: 40,
        fontWeight: 500,
    },
    titleCard: {
        color: theme.palette.text.hint,
    },
    gridItem: {
        paddingBottom: theme.spacing(1)
    },
  }),
);
