import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.scss';

const Home = () => {
  return (
      <section className={classes.home}>
          <div className={classes.homeNavigation}>
              <p className={classes.title}>
                  ჩემი კაბინეტი
              </p>
              <div className={classes.navigationCard}>

              </div>
          </div>
          <Card className={classes.home}>
              <h1>Welcome back!</h1>
          </Card>
      </section>

  );
};

export default Home;
