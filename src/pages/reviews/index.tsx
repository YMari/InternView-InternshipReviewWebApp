import { Box } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';

const reviewList = [
    {name: 'Review 1'},
    {name: 'Review 2'},
    {name: 'Review 3'}
]

export default function Reviews() {
    return (
        <>
            {reviewList.map(e => (
                <Box>
                    <Link href="">
                        <a>{e.name}</a>
                    </Link>
                </Box>
            ))}
        </>
    )  
}