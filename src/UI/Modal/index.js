import React, { useEffect, useCallback } from 'react'
import { IoClose } from 'react-icons/io5'
import { useHistory } from 'react-router-dom'
import { Button } from '../../UI'
import { useExternalFocus } from '../../hooks'
import Container from './styles'

const Modal = ({
  showModal,
  onClose,
  showCloseBtn = true,
  modalTitle,
  backdropHide = true,
  escapeOnClose = true,
  className,
  children,
  modalFooter,
}) => {
  const history = useHistory()
  const { containerRef } = useExternalFocus({
    onClose,
    showModal,
    escapeOnClose,
  })

  useEffect(() => {
    const body = document.body
    if (showModal && !body.classList.contains('disable--scroll')) {
      body.classList.add('disable--scroll')
    } else if (!showModal && body.classList.contains('disable--scroll')) {
      body.classList.remove('disable--scroll')
    }
  }, [showModal])

  useEffect(() => {
    const body = document.body
    return () => {
      body.classList.remove('disable--scroll')
    }
  }, [])

  const handleClose = useCallback(
    (e) => {
      e.stopPropagation()
      if (typeof onClose === 'function') {
        onClose()
      } else {
        history.goBack()
      }
    },
    [onClose, history],
  )

  return showModal ? (
    <Container
      ref={containerRef}
      onClick={handleClose}
      className="modal--backDrop"
    >
      <div
        className={`modal--container ${className ? className : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {modalTitle && (
          <header className="modal--header">
            <h2 className="modal--title u--typo__title">{modalTitle}</h2>
            {showCloseBtn && (
              <Button
                arial-label="close modal"
                icon
                className="close-btn"
                onClick={handleClose}
              >
                <IoClose />
              </Button>
            )}
          </header>
        )}
        {!modalTitle && showCloseBtn && (
          <Button
            arial-label="close modal"
            icon
            className="close-btn"
            onClick={handleClose}
          >
            <IoClose />
          </Button>
        )}

        {children}
        {modalFooter && (
          <footer className="modal--footer">{modalFooter}</footer>
        )}
      </div>
    </Container>
  ) : null
}

export default Modal
