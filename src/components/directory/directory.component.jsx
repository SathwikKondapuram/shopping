import './directory.style.scss'
import MenuItem from '../menu-item/menu-item.components'
import { Component } from 'react';
class Directory extends Component{
    constructor(){
        super();
        this.state = {

            sections: [{
                title: 'HATS',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1
            },
            {
                title: 'JACKETS',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2
            },
            {
                title: 'SNEAKERS',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3
            },
            {
                title: 'WOMEN',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4
            },
            {
                title: 'MEN',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5
            }]

        }
    }
    render(){
        return(
            <div className =  'directory-menu'>
                {this.state.sections.map(({title, imageUrl, id, size}) => (
                    <MenuItem key = {id} title = {title} imageUrl = {imageUrl} size = {size}/>
                ))}
                
            </div>
        )
    }  
}
export default Directory;