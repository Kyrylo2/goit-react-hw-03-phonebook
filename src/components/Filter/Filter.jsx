import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

const FormStyle = styled.form`
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
`;

class Filter extends React.Component {
  setFilterData = e => {
    let value = e.currentTarget.value.toLowerCase();
    this.props.filterDataToState(value);
  };

  render() {
    return (
      <FormStyle>
        <label>
          <TextField
            size="small"
            id="outlined-basic"
            label="Filter"
            variant="outlined"
            type="text"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={this.setFilterData}
          />
        </label>
      </FormStyle>
    );
  }
}

Filter.propTypes = {
  filterDataToState: PropTypes.func.isRequired,
};

export default Filter;
