import React, { Component } from 'react'

export class Pp extends Component {
    render() {
        return (
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="/mac">{this.props.name}<img src={this.props.acart} /></a></li>

        )
    }
}

export default Pp
