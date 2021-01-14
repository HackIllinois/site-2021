import React from 'react';

// import styles from './styles.module.scss';

type PropTypes = {
  isSubmit: boolean,
  setFormIndex: any,
};

const NextButton = ({ isSubmit, setFormIndex }: PropTypes): JSX.Element => (
  <>
    {isSubmit ? (
      <button type="submit" key="submit">
        Submit
      </button>
    ) : (
      <button type="button" onClick={() => setFormIndex((current: number) => current + 1)} key="next">
        Next
        <i className="material-icons">keyboard_arrow_right</i>
      </button>
    )}
  </>
);

export default NextButton;
