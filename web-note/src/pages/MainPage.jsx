import React from 'react'

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Album from './Album';

var page = {
    home:1,
    login:2,
    sighUp:3
}
export default class MainPage extends React.Component {
    constructor(p) {
        super(p)
        this.state = {
            pageName:page.home
        }
    }
    render() {
        var pageName = this.state.pageName;
        if(pageName == page.home){
            return <HomePage></HomePage>
        }
    }
}

class HomePage extends React.Component{
    constructor(p){
        super(p)
    }
    render(){
        return <Album></Album>
    }
}

