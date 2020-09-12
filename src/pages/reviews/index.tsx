import Link from 'next/link';

const reviewList = [
    {name: 'Review 1'},
    {name: 'Review 2'},
    {name: 'Review 3'}
]

export default function Reviews() {
    return <div>
        {reviewList.map(e => (
            <div>
                <Link href="">
                    <a>{e.name}</a>
                </Link>
            </div>
        ))}
    </div>
}