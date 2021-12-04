import Card from '../../ui/Card.js'
import classes from './Meetupitem.module.css';

function Meetupitem(propos) {
    return <li className={classes.item}>
        <Card>
    
        {/* <div className={classes.image}>
            <img src={propos.image} alt={propos.title} />
        </div> */}
        <div className={classes.content}>
            <h3>{propos.title}</h3>
            <address>{propos.address}</address>
            <p>{propos.description}</p>
        </div>
        <div className={classes.actions}>
            <button>
                Add To Favourites
            </button>
        </div> </Card>
    </li>
}

export default Meetupitem;