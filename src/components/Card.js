import PropTypes from "prop-types"
import moment from 'moment';
const Card = ({title, body, date, views, order,onClick, children}) => {
    return(
        <div className="card" onClick={onClick}>
            <div className="d-flex justify-content-between">
                <p className="card-title">{order}.  {title}</p>
                <p className="card-text">{body}</p>
                <div className="d-flex justify-content-between">
                    <span>{moment(date).format('LL')}</span>
                    <span>{views}</span>
                </div>
                {children}
            </div>
        </div>
    );
};
Card.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string,
    date: PropTypes.string,
    views: PropTypes.number,
    order: PropTypes.number,
    onClick: PropTypes.func,
    children: PropTypes.element,
};

Card.defaultProps = {
    body: '',
    date: '',
    views: 0,
    order: 0,
    onClick: () => {},
    children: null,
};


export default Card;