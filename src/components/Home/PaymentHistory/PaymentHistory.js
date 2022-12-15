import React from "react";
import classes from './PaymentHistory.module.scss'

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



const PaymentHistory = () => {
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

export default PaymentHistory;