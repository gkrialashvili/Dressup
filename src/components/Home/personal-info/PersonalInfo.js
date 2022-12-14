import React, {useEffect, useState} from "react";
import classes from "../Home.module.scss";
import Card from "../../UI/Card/Card";
import EditSvg from '../../../assets/images/edit.svg'
import PersonalInfoTable from "./PersonalInfoTable";
import SubscriptionCheckbox from "./SubscriptionCheckbox";
import EditInfo from "./EditInfo";

const personalInfoData = [
    {
        id: 1,
        title: 'სახელი და გვარი',
        value: 'სოფო კანთელაშვილი'
    },
    {
        id: 2,
        title: 'პირადი ნომერი',
        value: '01010150681'
    },
    {
        id: 3,
        title: 'ტელეფონი',
        value: '599 01 45 84'
    },
    {
        id: 4,
        title: 'ელ-ფოსტა',
        value: 'sopo.kant@gmail.com'
    },
    {
        id: 5,
        title: 'ქალაქი',
        value: 'თბილისი'
    },
    {
        id: 6,
        title: 'მისამართი',
        value: 'პეტრე ქავთარაძის 23, ბინა 12'
    },
]

const subscription = [
    {
        title: 'მსურს მივიღო სიახლეები  SMS შეტყობინებების სახით',
        checked: true
    },
    {
        title: 'მსურს მივიღო სიახლეები  E-mail შეტყობინებების სახით',
        checked: false
    }
]

const PersonalInfo = () => {
    const [isEdit, setIsEdit] = useState(false)

    useEffect(() => {
        setIsEdit(JSON.parse(localStorage.getItem('isEdit')))
    },[])

    useEffect(() => {
        localStorage.setItem('isEdit', JSON.stringify(isEdit))
    },[isEdit])

    const switchToEditHandler = () => {
        setIsEdit(true)
    }

    const checkboxChangeHandler = (e) => {
        console.log(e.target.checked)
    }

    return(
        <Card className={classes.homeCard}>
            <div className={classes.cardPersonalInfo}>
               <div className={classes.titleWrappers}>
                   <h3>პირადი ინფორმაცია</h3>
                   <div onClick={switchToEditHandler}>
                       <span>რედაქტირება</span>
                       <img src={EditSvg} alt='' />
                   </div>
               </div>
                <div className={classes.personalInfoWrapper}>
                    <table>
                        <tbody>
                        {
                            !isEdit ?
                            personalInfoData.map(e => <PersonalInfoTable key={e.id} personalInfo={e} />) :
                                personalInfoData.map(e => <EditInfo key={e.id} personalInfo={e} />)
                        }
                        </tbody>
                    </table>
                    {
                        subscription.map((e,i) =>
                            <SubscriptionCheckbox key={i} subscriptionClickHandler={checkboxChangeHandler}  subscription={e} />)
                    }
                </div>
            </div>
        </Card>
    )
};

export default PersonalInfo;