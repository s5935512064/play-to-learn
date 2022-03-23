import { useRouter } from 'next/router'
import Link from 'next/link'
import en from '../../../locales/en'
import th from '../../../locales/th'


const New = () => {
    const router = useRouter()
    const { id } = router.query

    const { locale } = router;
    const t = locale === 'en' ? en : th;

    return (
        <>

            <div className='mx-4 bg-red-600 p-5'>
                <h1>Post: {id}</h1>

                {t.newsupdate
                    .filter(p => p.id == id)
                    .map((item) => (
                        <div key={item.id}>
                            <p>
                                {item.topic}
                            </p>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    ))

                }

            </div>
        </>
    )
}

export default New
