import { Box } from '@material-ui/core'
import Link from 'next/link'
import React from 'react'

export default function Home() {
    return(
        <>
            <Box>
                <Link as="/companies" href="/companies/">
                    <a>Navigate to Companies</a>
                </Link>
            </Box>
            <Box>
                <Link as="/universities" href="/universities/">
                    <a>Navigate to Universities</a>
                </Link>
            </Box>
            <Box>
                <Link as="/reviews" href="/reviews/">
                    <a>Navigate to Reviews</a>
                </Link>
            </Box>
            <Box>
                <Link href="/login">
                    <a>Login Page</a>
                </Link>
            </Box>
            <Box>
                <Link href="/register">
                    <a>Register Page</a>
                </Link>
            </Box>
        </>
    )
}