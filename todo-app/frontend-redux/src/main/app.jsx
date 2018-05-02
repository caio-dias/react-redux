//dependencias de css, modules = alias da pasta node_modules criado no webpack config
import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'
import Footer from '../footer/footer'

export default props => (
    <div className="container">
        <Menu />
        <Routes />
        <Footer />
    </div>
)