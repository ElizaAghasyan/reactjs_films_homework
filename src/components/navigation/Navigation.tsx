import DashboardIcon from "@mui/icons-material/Dashboard";
import React, {MouseEventHandler} from "react";

const styles = require("./Navigation.module.scss");

const navigation = [
    {
        display: 'Popular',
        path: '/popular'
    },
    {
        display: 'Trending',
        path: '/trending'
    },
    {
        display: 'Top Rated',
        path: '/top_rated'
    },
    {
        display: 'Coming Soon',
        path: '/coming_soon'
    },
]

interface KeyboardEvent  {
    click: MouseEventHandler
}

const Navigation = (props: KeyboardEvent) => {
    return (
      <section className={styles.content}>
          <div className={styles.button_content}>
              <ul>
                  {
                      navigation.map((heading) => (
                          <li onClick={props.click} value={heading.display} key={heading.display} className={styles.buttons}>
                              {heading.display}
                          </li>
                      ))
                  }
              </ul>
              <div className={styles.icons}>
                  <DashboardIcon style={{color: '#d6d7d7', fontSize: '2.8em', margin: '-1px 5px'}}/>
                  <DashboardIcon style={{color: '#3bb3df', fontSize: '2.5em'}}/>
              </div>
          </div>
      </section>
  );
}

export default Navigation;
