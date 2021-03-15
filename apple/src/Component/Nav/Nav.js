import React from 'react';
import smpng from '../../images/icons/logo-sm.png';
import search from '../../images/icons/search-icon-sm.png';
import cart from '../../images/icons/cart-sm.png';
import Pp from "./Pp"

function Nav() {
    return (
        <div className="nav-wrapper fixed-top">
		<div className="container">
			<nav className="navbar navbar-toggleable-sm navbar-expand-md">
			    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target=".navbar-collapse">
			        ☰
			    </button>
			    <a className="navbar-brand apple mx-auto" href="#"><img src={smpng} /></a>

			    <div className="navbar-collapse collapse">
			        <ul className="navbar-nav nav-justified w-100 nav-fill">
						<Pp name="Mac" lk="./mac" />
						<Pp name="iphone" lk="./iphone" />
						<Pp name="ipod" lk="./ipod" />
						<Pp name="Watch" lk="./watch" />
						<Pp name="Tv" lk="./tv" />
						<Pp name="Music" lk="./music" />
						<Pp name="Support" lk="./support" />
						<Pp acart={search} lk="./search" />
						<Pp acart={cart} lk="./cart" />
			        </ul>
			    </div>
			</nav>
		</div>
	</div>
    )
}

export default Nav
