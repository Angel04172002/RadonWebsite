import Link from 'next/link';
import './Header.css';

export default function Header() {
    return (
        
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container-fluid d-flex justify-content-start">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">




                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navcontainer">

                            <li className="nav-item" style={{ marginRight: '4em' }}>
                                <Link className="nav-link navbtn" href="/">
                                    Начало
                                </Link>
                            </li>

                            <li className="nav-item" style={{ marginRight: '4em' }}>
                                <Link className="nav-link navbtn" href="/products">
                                    Продукти
                                </Link>
                            </li>
                            <li className="nav-item" style={{ marginRight: '4em' }}>
                                <Link className="nav-link navbtn" href="/resources">
                                    Ресурси
                                </Link>
                            </li>

                            <li className="nav-item" style={{ marginRight: '4em' }}>
                                <Link className="nav-link navbtn" href="/contacts">
                                    Контакти
                                </Link>
                            </li>


                        </ul>

                        <form className="d-flex">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Търси
                            </button>
                        </form>




                    </div>

                </div>
            </nav>
        </div>
    )
}