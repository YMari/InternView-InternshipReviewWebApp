import Link from 'next/link';

export default function Index() {
    return <div>
        <h1>Welcome to InternView!</h1>
        <div>
            <Link as="/companies" href="/entity/companies">
                <a>Navigate to Companies</a>
            </Link>
        </div>
        <div>
            <Link as="/universities" href="/entity/universities">
                <a>Navigate to Universities</a>
            </Link>
        </div>
        <div>
            <Link as="/reviews" href="/entity/reviews">
                <a>Navigate to Reviews</a>
            </Link>
        </div>
</div>
}