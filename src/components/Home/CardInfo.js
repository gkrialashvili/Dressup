import React from "react";
import classes from "./Home.module.scss";
import BigCard from "../../assets/images/Frame.png";
import Card from "../UI/Card/Card";

const CardInfo = ({cardInfo}) => {
    return (
        <Card className={classes.homeCard}>
            <img src={BigCard} alt='' />
            <div className={classes.cardInfoWrapper}>
                {
                    cardInfo.map(e => {
                        return (
                            <div key={e.id} className={classes.cardContent}>
                                <h5>{e.name}</h5>
                                <p style={{color: e.color}}>{e.value}</p>
                            </div>
                        )
                    })
                }

            </div>
        </Card>
    )
}

export default CardInfo;