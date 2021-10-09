import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    marginBottom: '40px',
    width: '40vw'
  }
});


const Searchbar = ({ searchArticles }) => {
  const classes = useStyles();
  const [text, setText] = useState('');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchArticles(text);
  };

  return (
    <div className={classes.container}>
      <form onSubmit={handleSubmit}>
        <TextField
          id="outline-basic"
          variant="outlined"
          label="Search articles"
          type="text"
          name="text"
          fullWidth
          value={text}
          onChange={handleChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="start">
                <IconButton onClick={handleSubmit}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
