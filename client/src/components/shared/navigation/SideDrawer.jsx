import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import './css/SideDrawer.css';

const SideDrawer = (props) => {
  const nodeRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleClick = (event) => {
    // Ignore clicks on the dropdown menu or its children
    if (dropdownRef.current && dropdownRef.current.contains(event.target)) {
      return;
    }
    // Otherwise, close the side drawer
    props.onClick();
  };

  const content = (
    <CSSTransition
      nodeRef={nodeRef}
      in={props.show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer' onClick={handleClick} ref={nodeRef}>
        <div ref={dropdownRef}>
          {props.children}
        </div>
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook'));
};

export default SideDrawer;