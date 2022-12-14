import React, {useState} from "react";
import classes from "../Home.module.scss";

const SubscriptionCheckbox = ({subscription,subscriptionClickHandler}) => {
    const [checked,setChecked] = useState(subscription.checked)

    const  onCklickHandler = (event) => {
        setChecked(!checked)
        subscriptionClickHandler(event)
    }

    return (
        <label className={classes.checkBoxWrapper}>
            <input id={subscription.id} checked={checked} onChange={onCklickHandler} type="checkbox" />
            <p>{subscription.title}</p>
            <span className={classes.checkmark}></span>
        </label>
    )
}

export default SubscriptionCheckbox;
