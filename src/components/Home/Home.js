import React, {useState} from 'react';

import classes from './Home.module.scss';

import CardSvg from '../../assets/images/card.svg'
import UserSvg from '../../assets/images/user-square.svg'
import BoxSvg from '../../assets/images/box.svg'
import CardInfo from "./CardInfo";

const navLinks = [
    {
        id: 1,
        link: 'ჩემი კაბინეტი',
        img: CardSvg
    },
    {
        id: 2,
        link: 'ბარათის მონაცემები',
        img: UserSvg
    },
    {
        id: 3,
        link: 'ჩემი შესყიდვები',
        img: BoxSvg
    }
]
const cardInfoData = [
    {
        id: 1,
        name: 'აქტიური ქულა',
        value: "135.00",
        color: '#3FDE81'
    },
    {
        id: 2,
        name: 'დასარიცხი ქულა',
        value: "55.00",
        color: '#FA9F65'
    },
    {
        id: 3,
        name: 'ფასდაკლება',
        value: "10%",
        color: '#1877BB'
    },
    {
        id: 4,
        name: 'საფეხური',
        value: "2",
        color: '#1877BB'
    },
    {
        id: 5,
        name: 'ტრანზაქციები',
        value: "7",
        color: '#34404E'
    },
    {
        id: 6,
        name: 'ჯამური შესყიდვები',
        value: '2,500 ლარი',
        color: '#34404E'
    },
]

const Home = () => {

    const [activeId, setActiveId] = useState(1);

  return (
      <section className={classes.home}>
          <div className={classes.homeNavigation}>
              <p className={classes.title}>
                  ჩემი კაბინეტი
              </p>
              {
                  navLinks.map(e => {
                      return (
                          <div key={e.id} className={`${classes.navigationCard} ${activeId === e.id? classes.active : ''}`}
                               onClick={() => setActiveId(e.id)}>
                              <img src={e.img} alt='card' />
                              <p>{e.link}</p>
                          </div>
                      )
                  })
              }
          </div>
          {
              activeId === 1 && <CardInfo cardInfo={cardInfoData} />
          }
      </section>

  );
};

export default Home;
