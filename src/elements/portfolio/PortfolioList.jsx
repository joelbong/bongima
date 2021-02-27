import React, { Component } from "react";
import {Link} from 'react-router-dom'

const PortfolioListContent = [
    {
        image: 'image-1',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: 'Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: 'Getting tickets to the big show'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <Link to={`/projects/${value.title}`}>
                                <div className="thumbnail-inner">
                                    <div className={`thumbnail ${value.image}`}></div>
                                    <div className={`bg-blr-image ${value.image}`}></div>
                                </div>
                            </Link>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4>{value.title}</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </>
        )
    }
}
export default PortfolioList;
export {PortfolioListContent}