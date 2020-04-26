import fetch from 'isomorphic-fetch';
import Link from 'next/link'
import Layout from '../../components/layout'
import useSWR from 'swr'
import { useRouter } from 'next/router'

const fetcher = async url => {
    const res = await fetch(url)
    const data = await res.json()

    if (res.status !== 200) {
        throw new Error(data.message)
    }
    return data
}

export default function Projet() {

    const { query } = useRouter()
    const { data, error } = useSWR(
        () => query.projet && `/api/${query.projet}`,
        fetcher
    )

    if (error) return <div>{error.message}</div>
    if (!data) return <div>Loading...</div>
    
    const {titre, images, videos, description, liens} = data;

    return(
        <Layout>
            <main className="projet">
                <nav>
                    <h1>
                        {titre}
                    </h1>
                    <Link href="/projets">
                        <a>
                            Retour aux projets
                        </a>
                    </Link>
                </nav>
                <div>
                    {
                        images.map((image) => {
                            return <img src={image}/>
                        })
                    }
                    {
                        videos.map((video) => {
                            return <iframe src={video}/>
                        })
                    }
                    <h3>Description</h3> 
                    <p>{description}</p>

                    {
                        liens.length > 0 ? (
                            <>
                                {
                                    liens.map(({label, data}) => {
                                        return (
                                            <a href={data} target="_blank">{label}</a>
                                        )   
                                    })
                                }
                            </>
                        ):(
                            ""
                        )
                    }
                </div>
                
            </main>
        </Layout>
    ) 
}