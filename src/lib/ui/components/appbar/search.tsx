import React, { useState, useEffect } from 'react';
import { Box,  createStyles,  fade,  InputBase, makeStyles, Theme, TextField, CircularProgress } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import SearchIcon from '@material-ui/icons/Search';

export default function Search() {

    const classes = useStyles();
    const [search, setSearch] = useState<string>("")
    const [open, setOpen] = React.useState(false);
    const [companyList, setCompanyList] = useState<any[]>([])

    const loading = open && companyList.length === 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        console.log(companyList)
        const CancelToken = axios.CancelToken;
        const call1 = CancelToken.source()

        const searchNow = async () => {
        
            await axios.get(
                "/api/company?search="+search,
                {
                    cancelToken:call1.token
                }
            ).then(res => {
                if(res.status === 200) { 
                    console.log(res.data)
                    if (res.data) {
                        setCompanyList(res.data.map((com)=>com.name));
                    }
                    else {
                        setCompanyList([])
                    }
                }
            }).catch( thrown => {
                if(axios.isCancel(thrown)) { console.log("Request Cancelled") }
                else{setCompanyList([])}
            })

        }

        searchNow()

        return () => {
            call1.cancel()
        }
    }, [search])

    useEffect(() => {
        if (!open) {
          setCompanyList([]);
        }
    }, [open]);

    return (
        <>
            <Box className={classes.searchIcon}>
                <SearchIcon color='primary'/>
            </Box>
            
            <Autocomplete 
                // open={open}
                // onOpen={() => {
                //     setOpen(true);
                // }}
                // onClose={() => {
                //     setOpen(false);
                // }}
                getOptionSelected={(option, value) => option === value}
                options={companyList}
                loading={loading}
                disableClearable
                
                getOptionLabel={(option) => option}
                value={search}
                inputValue={search}
                onInputChange={handleChange}
                onChange={handleChange}
                renderInput={(params) => 
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        endAdornment={
                            <>
                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                            </>
                        }
                        {...params}
                    />
                }
            />
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        iconContainer: {
            alignItems: 'left',
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: theme.palette.secondary.contrastText,
        },
        inputInput: {
            padding: theme.spacing(2, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        }
        
    }),
);