import React, { FC, ReactNode, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

interface SlideFromRightLayoutProps {
  children: ReactNode;
  isOpen: boolean;
  wrapperId?: string;
}

const SlideFromRightLayout: FC<SlideFromRightLayoutProps> = ({
  children,
  isOpen,
  wrapperId = "modal-wrapper",
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );
  const nodeRef = useRef(null);

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      const wrapperElement = document.createElement("div");
      wrapperElement.setAttribute("id", wrapperId);
      document.body.appendChild(wrapperElement);
      element = wrapperElement;
    }
    setWrapperElement(element);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(
    <CSSTransition
      in={isOpen}
      timeout={{ enter: 0, exit: 300 }}
      unmountOnExit
      classNames="modal"
      nodeRef={nodeRef}
    >
      <div className="slide-from-left-modal content">
        <div className="modal" ref={nodeRef}>
          {children}
        </div>
      </div>
    </CSSTransition>,
    wrapperElement
  );
};

export default SlideFromRightLayout;
