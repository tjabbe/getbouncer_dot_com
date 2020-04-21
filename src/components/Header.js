import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Header.module.css';

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.fontSizes = {
      's': 16,
      'm': 24,
      'l': 36
    }
  }

  render() {
    return (
      <h1 className={styles.header}
        style={{
          textAlign: this.props.textAlign,
          fontSize: this.fontSizes[this.props.size.toLowerCase()]
        }}>
        <b>
          {this.props.children}
        </b>
      </h1>
    );
  }
}

Header.propTypes = {
  textAlign: PropTypes.string,
  size: PropTypes.string
};

Header.defaultProps = {
  textAlign: "center",
  size: "l"
};

export default Header;