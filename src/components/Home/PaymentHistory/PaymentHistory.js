import React from "react";
import classes from './PaymentHistory.module.scss'
import {Accordion, AccordionDetails, AccordionSummary} from "@mui/material";
import CardInfo from "../CardInfo";

const paymentHistoryData =
    [
        {
            product: [
                {
                    title: "კატეგორია",
                    value: 'შარვალი'
                },
                {
                    title: "ბრენდი",
                    value: 'Levis'
                },
                {
                    title: "პროდუქციის კოდი",
                    value: '09652 30 00'
                },
            ],
            date: '07/04/2022',
            size: '33-36',
            price: '280 ლარი',
            points: 33,
            amount: 1
        },
        {
            product: [
                {
                    title: "კატეგორია",
                    value: 'შარვალი'
                },
                {
                    title: "ბრენდი",
                    value: 'Levis'
                },
                {
                    title: "პროდუქციის კოდი",
                    value: '09652 30 00'
                },
            ],
            date: '07/04/2022',
            size: '33-36',
            price: '280 ლარი',
            points: 33,
            amount: 1
        },
        {
            product: [
                {
                    title: "კატეგორია",
                    value: 'შარვალი'
                },
                {
                    title: "ბრენდი",
                    value: 'Levis'
                },
                {
                    title: "პროდუქციის კოდი",
                    value: '09652 30 00'
                },
            ],
            date: '07/04/2022',
            size: '33-36',
            price: '280 ლარი',
            points: 33,
            amount: 1
        },
        {
            product: [
                {
                    title: "კატეგორია",
                    value: 'შარვალი'
                },
                {
                    title: "ბრენდი",
                    value: 'Levis'
                },
                {
                    title: "პროდუქციის კოდი",
                    value: '09652 30 00'
                },
            ],
            date: '07/04/2022',
            size: '33-36',
            price: '280 ლარი',
            points: 33,
            amount: 1
        },
        {
            product: [
                {
                    title: "კატეგორია",
                    value: 'შარვალი'
                },
                {
                    title: "ბრენდი",
                    value: 'Levis'
                },
                {
                    title: "პროდუქციის კოდი",
                    value: '09652 30 00'
                },
            ],
            date: '07/04/2022',
            size: '33-36',
            price: '280 ლარი',
            points: 33,
            amount: 1
        },
        {
            product: [
                {
                    title: "კატეგორია",
                    value: 'შარვალი'
                },
                {
                    title: "ბრენდი",
                    value: 'Levis'
                },
                {
                    title: "პროდუქციის კოდი",
                    value: '09652 30 00'
                },
            ],
            date: '07/04/2022',
            size: '33-36',
            price: '280 ლარი',
            points: 33,
            amount: 1
        },

    ]

const PaymentHistory = ({isMobile}) => {
    function ExpandMoreIcon() {
        return null;
    }
    if (!isMobile) {
        return(
            <table className={classes.mainTable}>
                <thead>
                <tr>
                    <th>ინფორმაცია პროდუქტის შესახებ</th>
                    <th>თარიღი</th>
                    <th>ზომა</th>
                    <th>თანხა</th>
                    <th>ქულა</th>
                    <th>რაოდენობა</th>
                </tr>
                </thead>
                <tbody>
                {
                    paymentHistoryData.map((e,i) => <tr key={i}>
                        <td>
                            {
                                e.product.map((p,index) =>  <p key={index}>{p.title} {p.value}</p>)
                            }
                        </td>
                        <td>
                            {e.date}
                        </td>
                        <td>
                            {e.size}
                        </td>
                        <td>
                            {e.price}
                        </td>
                        <td>
                            {e.points}
                        </td>
                        <td>
                            {e.amount}
                        </td>
                    </tr>)
                }
                </tbody>
            </table>
        )
    }
    else {
        return (
            <>
                {
                    paymentHistoryData.map((e,i) =>  <Accordion key={i} defaultExpanded={true}>
                        <AccordionSummary  expandIcon={<ExpandMoreIcon />}>
                            <div className={`${classes.navigationCard}`}>
                                {
                                    e.product.map((p,index) =>  <p key={index}>{p.title} {p.value}</p>)
                                }
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <table className={classes.mobTable}>
                                <tbody>
                                 <tr>
                                     <td>
                                         თარიღი
                                     </td>
                                        <td>
                                            {e.date}
                                        </td>
                                 </tr>
                                <tr>
                                    <td>
                                        ზომა
                                    </td>
                                    <td>
                                        {e.size}
                                    </td>
                                </tr>
                                 <tr>
                                     <td>
                                         თანხა
                                     </td>
                                     <td>
                                         {e.price}
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>
                                         ქულა
                                     </td>
                                     <td>
                                         {e.points}
                                     </td>
                                 </tr>
                                 <tr>
                                     <td>
                                         რაოდენობა
                                     </td>
                                     <td>
                                         {e.amount}
                                     </td>
                                 </tr>
                                </tbody>
                            </table>
                        </AccordionDetails>
                    </Accordion>
                    )
                }

            </>
        )
    }
}

export default PaymentHistory;