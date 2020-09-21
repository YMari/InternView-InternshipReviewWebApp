import { Container } from '@material-ui/core';
import Link from 'next/link';
import React from 'react';
import MainAppbar from '../components/appbar';

const reviewList = [
    {name: 'Review 1'},
    {name: 'Review 2'},
    {name: 'Review 3'}
]

export default function Reviews() {
    return (
        <Container maxWidth={false}>
            <MainAppbar/>
            {reviewList.map(e => (
                <div>
                    <Link href="">
                        <a>{e.name}</a>
                    </Link>
                </div>
            ))}
        </Container>
    )  
}