import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-white footer">
            <div className="container pt-4">
                <section className="mb-4">
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-twitter"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-google"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-instagram"></i
                    ></a>
                    <a
                        className="btn btn-link btn-floating btn-lg text-dark m-1"
                        href="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    ><i className="fab fa-github"></i
                    ></a>
                </section>
            </div>
            <div className="text-center text-dark p-3">
                Created By Siddhant Keskar
            </div>
        </footer>
    )
}

export default Footer