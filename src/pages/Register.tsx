import { Box, Button, Card, CardHeader, createStyles, FormControl, Grid, IconButton, 
    InputAdornment, InputLabel, makeStyles, OutlinedInput, TextField, Theme, Typography } from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import React from "react";

interface State {
    password: string;
    showPassword: boolean;
}

export default function RegisterPage() {
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
        
        <Grid
        container
        direction="column"
        alignItems="center"
        wrap='wrap'
        align-items-xs-center
        justify-xs-space-between
        spacing-xs-10
        >
            <Card>
                <CardHeader title="Create Account"/>
                <Grid item>
                    <Box id="name-box">
                        <FormControl className={(classes.margin)} variant="outlined">
                            <InputLabel htmlFor="outlined-email">Name</InputLabel>
                            <OutlinedInput id="name-input" label="Name"  />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item>
                    <Box id="email-box">
                        <FormControl className={(classes.margin)} variant="outlined">
                            <InputLabel htmlFor="outlined-email">Email</InputLabel>
                            <OutlinedInput id="email-input" label="Email"  />
                        </FormControl>
                    </Box>
                </Grid>
                <Grid item>
                    <Box id="password-box">
                        <FormControl className={(classes.margin)} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
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
                    </Box>
                </Grid>
                <Grid item>
                    <Box id="study-program-box">
                        <TextField
                            className={(classes.margin)} 
                            variant="outlined"
                            id="study-program-input"
                            select
                            label="Study Program"
                            // value={currency}
                            // onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your Study Program"
                            >
                            {/* {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))} */}
                        </TextField>     
                    </Box>
                </Grid>
                <Grid item>
                    <Box id="university-box">
                        <TextField
                            className={(classes.margin)} 
                            variant="outlined"
                            id="university-input"
                            select
                            label="University"
                            // value={currency}
                            // onChange={handleChange}
                            SelectProps={{
                                native: true,
                            }}
                            helperText="Please select your University"
                            >
                            {/* {currencies.map((option) => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))} */}
                        </TextField> 
                    </Box>
                </Grid>
                <Grid item>
                    <Box id="new-account-box">
                        <Button variant="contained" color="primary">
                            Register
                        </Button>
                    </Box>
                </Grid>
            </Card>
        </Grid>     
    )
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);