import React from 'react';
// import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// import { ThemeProvider, createTheme } from '@mui/system';

// import Divider from '@mui/material/Divider';
// import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FaceIcon from '@mui/icons-material/Face';
import { green } from '@mui/material/colors';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import ListItemText from '@mui/material/ListItemText';

const style = {
  boxShadow: 1,
  borderRadius: 2,
  border: '1px solid lightgray',
  p: 2,
  minWidth: 350,
  maxWidth: 500,
  alignItems: 'center',
};

const ContactList = ({ contacts, onDelete }) => {
  return (
    <Stack direction="column" justifyContent="flex-start" alignItems="center">
      <List sx={style} aria-label="contacts">
        {contacts.map(({ name, number, id }) => {
          return (
            <ListItem
              key={id}
              divider
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onDelete(id)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemAvatar>
                <Avatar size="small" sx={{ bgcolor: green[500] }}>
                  <FaceIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary={name} secondary={number} />
            </ListItem>
          );
        })}
      </List>
    </Stack>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
