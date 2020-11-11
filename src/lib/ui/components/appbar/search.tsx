import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme, TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios'
import { useRouter } from "next/router";

export default function Search() {

    const classes = useStyles()
    const [search, setSearch] = useState("");;
    const [companyList, setCompanyList] = useState<any[]>([])
    const router = useRouter()

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const changeSearch = (val:string) => {
        setSearch(val)
        if (val) {
            router.push('/companies/'+val)
        }
    }

    useEffect(() => {
        console.log(companyList)
    }, [companyList])

    useEffect(() => {
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
                    if (res.data?.data) {

                        setCompanyList(res.data.data);
                    }
                }
            }).catch( thrown => {
                if(axios.isCancel(thrown)) { console.log("Request Cancelled") }
            })
        }

        searchNow()

        return () => {
            call1.cancel()
        }

    }, [search])


    return (
        <>
            <Autocomplete 
                options={companyList!==null || companyList !== undefined?companyList:[]}
                getOptionLabel={option => {      
                    return option.name
                }}                
                freeSolo
                disableClearable
                onChange={(event, newVal)=>changeSearch(newVal?.name)}
                inputValue={search}
                renderInput={(params) => {
                    return <TextField
                    {...params}
                    label="Search"
                    variant="outlined"
                    fullWidth
                    onChange={handleChange}
                    classes={{
                        root: classes.inputRoot,
                    }}
                    />
                }
                }
            />
        </>
    )
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        
        inputRoot: {
            color: theme.palette.secondary.contrastText
        },
        
        
    }),
);
