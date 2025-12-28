import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Navbhar() {

  let [q, setQ] = useState("")
  let [Language, setLanguage] = useState("")
  let [searchParams] = useSearchParams()


  let [search, setSearch] = useState("")
  let navigate = useNavigate()


  function postEvent(e) {
    e.preventDefault();
    navigate(`/?q=${search}&language=${Language}`);
    setSearch("");
  }



  useEffect(() => {

    setQ(searchParams.get("q") ?? "All")
    setLanguage(searchParams.get("Language") ?? "en")

  }, [searchParams])


  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3 fs-5" style={{backgroundColor:"antiquewhite"}}>
        <div className="container-fluid">
          <Link className="navbar-brand fs-4" to={`/?q=All&language${Language}`}>
            Online News
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">


                <Link className={`nav-link  ${q === 'All' ? 'active' : ""}`} aria-current="page" to={`/?q=All&language=${Language}`}> Home</Link>

              </li>


              <li className="nav-item">
                <Link className={`nav-link  ${q === 'Crime' ? 'active' : ""}`} aria-current="page" to={`/?q=Crime&language=${Language}`}>
                  Crime
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link  ${q === ' Cricket' ? 'active' : ""}`} aria-current="page" to={`/?q=Cricket&language=${Language}`}>
                  Cricket
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link  ${q === '  Sports' ? 'active' : ""}`} aria-current="page" to={`/?q=Sports&Language=${Language}`}>
                  Sports
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link  ${q === 'Scince' ? 'active' : ""}`} aria-current="page" to={`/?q=Science&language=${Language}`}>
                  Science
                </Link>

              </li>

              <li className="nav-item">
                <Link className={`nav-link  ${q === '   Eductation' ? 'active' : ""}`} aria-current="page" to={`/?q=Education&language=${Language}`}>
                  Education
                </Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link  ${q === ' echnolohy' ? 'active' : ""}`} aria-current="page" to={`/?q=Technology&language=${Language}`}>
                  Technology
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Language
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/?q=${q}&Language=hi`}>
                      Hindi
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=${q}&Language=en`}>
                      English
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Other
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to={`/?q=Economic&language=${Language}`}>
                      Economic
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/?q=World&language=${Language}`}>
                      World
                    </Link>
                    <Link className="dropdown-item" to={`/?q=India&language=${Language}`}>
                      India
                    </Link>
                    <Link className="dropdown-item" to={`/?q=Pakistan&language=${Language}`}>
                      Pakistan
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
            <form className="d-flex" onSubmit={postEvent} role="search">
              <input
                className="form-control me-2"
                type="search" value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
