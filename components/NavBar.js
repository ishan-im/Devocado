import Link from "next/link";
import { userAgent } from "next/server";
import { Fragment } from "react";

import { useContext } from "react";

import { UserContext } from "../lib/context";

import {BsSearch} from 'react-icons/bs'

export default function NavBar() {

const {user,username}= useContext(UserContext)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link href="/">
          <a className="navbar-brand">
            Devocado
          </a>
        </Link>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
            <BsSearch size={'1.3em'}/>
          </ul>


          {/* User is not signed in  */}

          {

            !user && (
                <Fragment>
                     <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link href="/auth">
                  <a type="button" className="btn">
                    Sign In
                  </a>
                </Link>
              </li>
              <li className="nav-item ml-2">
                <Link href="/signup">
                  <a type="button" className="btn btn-outline-primary">
                    Create Account
                  </a>
                </Link>
              </li>
            </ul>
          </div>
                </Fragment>
            )

          }


            {/* User is signed in  */}

            {
                user && (
                    <Fragment>
                         <div className="d-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-3">
                <Link href="/write">
                  <a type="button" className="btn sign">
                    Post Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item ml-2">
                
                 <Link href={`/${username}`}>

                    <img src={user?.photoURL}/>
                 
                 </Link>
                
              </li>
            </ul>
          </div>
                    </Fragment>
                )
            }

         
        </div>
      </div>
    </nav>
  );
}
