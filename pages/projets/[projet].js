import fetch from 'isomorphic-unfetch';
import Link from 'next/link'
import Layout from '../../components/layout'

import {getAllProjectsLinks} from '../../lib/getAllProjectsLinks'

export default function Projet({titre, description,images, videos, liens }){
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
                                            <a href="data">{label}</a>
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

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/projets')
    const projets = await res.json()
    const paths = getAllProjectsLinks(projets)
    return{
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const res = await fetch('http://localhost:3000/api/projets')
    const projets = await res.json()
    const findProjet = projets.filter((projets) => projets.link === params.projet)
    return {
        props: findProjet[0]
    }
}