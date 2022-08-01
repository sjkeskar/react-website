import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-white footer">
            <div className="container pt-4">
                <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.facebook.com/react/"
                        role="button"
                        data-mdb-ripple-color="dark"
                        target={'_blank'}
                        rel="noopener noreferrer"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://twitter.com/reactjs"
                        role="button"
                        data-mdb-ripple-color="dark"
                        target={'_blank'}
                        rel="noopener noreferrer"
                    ><i className="fab fa-twitter"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.google.com/search?q=react"
                        role="button"
                        data-mdb-ripple-color="dark"
                        target={'_blank'}
                        rel="noopener noreferrer"
                    ><i className="fab fa-google"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://www.instagram.com/reactjsofficial"
                        role="button"
                        data-mdb-ripple-color="dark"
                        target={'_blank'}
                        rel="noopener noreferrer"
                    ><i className="fab fa-instagram"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="https://github.dev/sjkeskar/react-website"
                        role="button"
                        data-mdb-ripple-color="dark"
                        target={'_blank'}
                        rel="noopener noreferrer"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
                <p className="text-center text-dark py-2">Created By Siddhant Keskar</p>
            </div>
        </footer>
    )
}

export default Footer