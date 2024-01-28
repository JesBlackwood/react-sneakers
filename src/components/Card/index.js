import cardStyles from './Card.module.scss';

function Card(props) {
    const onClickButton = () => {
        alert('Вы добавили товар в корзину');
    };

    return(
        <div className={cardStyles.card}>
            <div className={cardStyles.favorite}>
                <img src="/img/heart-unliked.svg" alt="Unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="Sneakers"/>
            <h5>{props.title}</h5>
            <div className="d-flex justify-between align-center">
                <div className="d-flex flex-column">
                    <span>Цена:</span>
                    <b>{props.price} руб.</b>
                </div>
                <button className={cardStyles.button} onClick={onClickButton}>
                    <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
                </button>
            </div>
        </div>
    );
}

export default Card;