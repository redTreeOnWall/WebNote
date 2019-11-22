import React from 'react'

import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';

export default class MainPage extends React.Component {
    constructor(p) {
        super(p)
    }
    render() {

        return <DrawerTest></DrawerTest>

    }
}

class DrawerTest extends React.Component {
    constructor(p) {
        super(p)
        this.state = {
            left:false,
            right:false,
            top:false,
            bottom:false
        }
    }
    toggleDrawer(pos, isOpen){
        console.log("pos:")
    }
    render() {
        return (<div>
            <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>
            <Button onClick={this.toggleDrawer('right', true)}>Open Right</Button>
            <Button onClick={this.toggleDrawer('top', true)}>Open Top</Button>
            <Button onClick={this.toggleDrawer('bottom', true)}>Open Bottom</Button>
            {/* <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
                {sideList('left')}
            </Drawer>
            <Drawer anchor="top" open={state.top} onClose={toggleDrawer('top', false)}>
                {fullList('top')}
            </Drawer>
            <Drawer anchor="bottom" open={state.bottom} onClose={toggleDrawer('bottom', false)}>
                {fullList('bottom')}
            </Drawer>
            <Drawer anchor="right" open={state.right} onClose={toggleDrawer('right', false)}>
                {sideList('right')}
            </Drawer> */}
        </div>)
    }
}