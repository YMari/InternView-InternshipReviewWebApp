import { Box } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const universityList = [
    {name: 'University 1'},
    {name: 'University 2'},
    {name: 'University 3'}
]

Universities.withoutAppBar = true

export default function Universities() {
    return (
        <>
            {universityList.map(e => (
                <Box>
                    <Link href="">
                        <a>{e.name}</a>
                    </Link>
                </Box>
            ))}
        </>
    )   
}