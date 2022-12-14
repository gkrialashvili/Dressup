import React, {useEffect, useState} from "react";
import classes from "../Home.module.scss";
import Card from "../../UI/Card/Card";
import EditSvg from '../../../assets/images/edit.svg'
import PersonalInfoTable from "./PersonalInfoTable";
import SubscriptionCheckbox from "./SubscriptionCheckbox";
import EditInfo from "./EditInfo";
import Button from "../../UI/Button/Button";

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
    const [personalInfo, setpersonalInfo] = useState(personalInfoData)

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

    const changeInfoHandler = (e) => {
        e.preventDefault()
        setpersonalInfo(personalInfo.map(obj => {
            console.log(obj)
        }))
        setIsEdit()
    }

    return(
        <Card className={classes.homeCard}>
            <div className={classes.cardPersonalInfo}>
               <div className={classes.titleWrappers}>
                   <h3>პირადი ინფორმაცია</h3>
                   {
                       !isEdit &&
                       <div onClick={switchToEditHandler}>
                           <span>რედაქტირება</span>
                           <img src={EditSvg} alt='' />
                       </div>
                   }

               </div>
                <div className={classes.personalInfoWrapper}>
                    <table>
                        <tbody>
                        {
                            !isEdit ?
                            personalInfo.map(e => <PersonalInfoTable key={e.id} personalInfo={e} />) :
                                personalInfo.map(e => <EditInfo key={e.id} personalInfo={e} />)
                        }
                        </tbody>
                    </table>
                    {
                        subscription.map((e,i) =>
                            <SubscriptionCheckbox key={i} subscriptionClickHandler={checkboxChangeHandler}  subscription={e} />)
                    }
                    {
                        isEdit &&
                        <div className={classes.footer}>
                            <Button onClick={() => setIsEdit(false)}>გაუქმება</Button>
                            <Button onClick={changeInfoHandler} type="submit" >შენახვა</Button>
                        </div>
                    }

                </div>
            </div>
        </Card>
    )
};

export default PersonalInfo;