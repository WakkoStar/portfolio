import Link from 'next/link'
import Layout from '../components/layout'

    export default function Home() {
    return (
        <Layout>
            <main className="home">
                <div>
                    <div>    
                        <h3>A propos</h3>
                        <p><a href="https://www.linkedin.com/in/hugo-del-pia/" target='_blank'>Linkedin</a></p>
                        <p><a href="https://soundcloud.com/hugo-del-pia/tracks" target='_blank'>Soundcloud</a></p>
                        <p><a href="../files/DELPIA-CV.pdf" target='_blank'>Cirruculum vitae</a></p>
                        <p><a href="mailto:delpiahugo@gmail.com" target='_blank'>Contacter par mail</a></p>
                    </div>
                    <div>
                        <h1>HUGO DEL PIA</h1>
                    </div>
                    <div>
                        <Link href="/projets">
                            <a>
                                Voir projets
                            </a>
                        </Link>
                    </div>
                </div>    
            </main>
        </Layout>
    )
    }
