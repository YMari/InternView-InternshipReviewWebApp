import Link from 'next/link';

export default function Entities() {
    return <div>
        <div>
            <Link href="/[entities]/[companyList]">
                <a>Navigate to Companies</a>
            </Link>
        </div>
    </div>
} 