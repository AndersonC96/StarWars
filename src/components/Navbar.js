import React from 'react';
import {Menu, Container} from 'semantic-ui-react';
export default function Navbar(){
    return(
        <Menu inverted>
            <Container>
                <Menu.Item name="Star Wars API"/>
                <Menu.Item name="People"/>
                <Menu.Item name="Planets"/>
                <Menu.Item name="Films"/>
                <Menu.Item name="Species"/>
                <Menu.Item name="Starships"/>
                <Menu.Item name="Vehicles"/>
                <Menu.Item name="Disney Plus"/>
            </Container>
        </Menu>
    )
}
