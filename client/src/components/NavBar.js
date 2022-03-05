import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { globalStyle } from '../styles/GlobalStyle';

import { Button } from '@mantine/core';

function NavBar() {
  const { classes, cx } = globalStyle();
  const [active, setActive] = useState(0);
  return (
    <div className={classes.navbar}>
      <Button
        className={cx(classes.button, { [classes.active]: active === 0 })}
        onClick={() => setActive(0)}
        component={Link}
        to="/"
      >
        Home
      </Button>
      <Button
        className={cx(classes.button, { [classes.active]: active === 1 })}
        onClick={() => setActive(1)}
        component={Link}
        to="/login"
        sx={{
          marginLeft: 'auto',
        }}
      >
        Login/Register
      </Button>
    </div>
  )
}

export default NavBar;