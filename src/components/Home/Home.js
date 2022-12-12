import React, {useState} from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.scss';

import CardSvg from '../../assets/images/card.svg'
import UserSvg from '../../assets/images/user-square.svg'
import BoxSvg from '../../assets/images/box.svg'
import BigCard from '../../assets/images/Frame.png'

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
        value: 135.00
    },
    {
        id: 2,
        name: 'დასარიცხი ქულა',
        value: 135.00
    },
    {
        id: 3,
        name: 'ფასდაკლება',
        value: 135.00
    },
    {
        id: 4,
        name: 'საფეხური',
        value: 135.00
    },
    {
        id: 5,
        name: 'ტრანზაქციები',
        value: 135.00
    },
    {
        id: 6,
        name: 'ჯამური შესყიდვები',
        value: 135.00
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
                          <div className={`${classes.navigationCard} ${activeId === e.id? classes.active : ''}`}
                               onClick={() => setActiveId(e.id)}>
                              <img src={e.img} alt='card' />
                              <p>{e.link}</p>
                          </div>
                      )
                  })
              }
          </div>
          <Card className={classes.homeCard}>
              <img src={BigCard} alt='' />
              <div className={classes.cardInfoWrapper}>
                  <div></div>
              </div>
          </Card>
      </section>

  );
};

export default Home;
