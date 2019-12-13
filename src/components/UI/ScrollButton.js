import React from "react";
import arrow from '../../images/caretDropDownUp.svg'

class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      showTopArrow: false,
      intervalId: 0
    };
  }

  componentDidMount() {
    if (typeof window !== 'undefined' && window) {
      window.addEventListener('scroll', this.showHideScrollComponent)
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.showHideScrollComponent)
  }

  showHideScrollComponent = () => {
    if ((window.pageYOffset > 0 || document.documentElement.scrollTop > 0) && !this.state.showTopArrow) {
      this.setState({ showTopArrow: true })
    } else if ((window.pageYOffset <= 0 || document.documentElement.scrollTop <= 0) && this.state.showTopArrow) {
      this.setState({ showTopArrow: false })
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 'top', behavior: 'smooth' });
    this.state.showTopArrow && this.setState({ showTopArrow: false })
  }

  render() {
    return (
      <div>
        {this.state.showTopArrow && <img src={arrow} onClick={() => { this.scrollToTop(); }} className="arrow" />}

      </div>
    )
  }
}

class ScrollApp extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <div className="long">
      <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
    </div>
  }
}
/*
 * Render the ScrollApp component into the div with the id 'app'
 */
export default ScrollApp;