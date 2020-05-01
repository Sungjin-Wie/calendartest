import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    margin: 20,
    float: 'left',
    fontSize: 30,
  },
});

const HeaderButton = ({ href, css, value }) => {
  return (
    <div className={css.header}>
      <Button href={href} variant='contained' color='primary'>
        {value}
      </Button>
    </div>
  );
};

const Header = () => {
  const css = useStyles();
  return (
    <div>
      <HeaderButton href='#/' css={css} value='Home' />
      <HeaderButton href='#/react-calendar' css={css} value='React-Calendar' />
      <HeaderButton
        href='#/simple-react-calendar'
        css={css}
        value='Simple React-Calendar'
      />
      <HeaderButton href='#/datepicker' css={css} value='Date Picker' />
      <div style={{ clear: 'both' }}></div>
    </div>
  );
};

export default Header;
