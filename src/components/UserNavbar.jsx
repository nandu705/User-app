import React from 'react'
import { Link } from 'react-router-dom'

const UserNavbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Navbar</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <Link class="nav-link active" aria-current="page" to="/">ADD-user</Link>
                            <Link class="nav-link" to="/search">SEARCH-user</Link>
                            <Link class="nav-link" to="/delete">DELETE-user</Link>
                            <Link class="nav-link" to="/view">VIEW-user</Link>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default UserNavbar