import React from "react";
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import CardInfo from "./Home/CardInfo";
import PersonalInfo from "./Home/personal-info/PersonalInfo";
import PaymentHistory from "./Home/PaymentHistory/PaymentHistory";
import classes from "./Home/Home.module.scss";

const HomeMobile = ({cardInfoData, isMobile}) => {
    function ExpandMoreIcon() {
        return null;
    }
    return(
        <section className={classes.home}>
            <div className={classes.homeNavigation}>
            <Accordion defaultExpanded={true}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <div className={`${classes.navigationCard}`}>
                        <p>ბარათის მონაცემები</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <CardInfo cardInfo={cardInfoData} />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <div className={`${classes.navigationCard}`}>
                        <p>ჩემი კაბინეტი</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <PersonalInfo />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <div className={`${classes.navigationCard}`}>
                        <p>ჩემი შესყიდვები</p>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <PaymentHistory isMobile={isMobile} />
                </AccordionDetails>
            </Accordion>
        </div>
        </section>
    )
}

export default HomeMobile;