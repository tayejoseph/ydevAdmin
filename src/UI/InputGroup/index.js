import React, { useRef, useState } from 'react'
import { v4 as uuid } from 'uuid'
import { message } from 'antd'
import { ImFilePdf } from 'react-icons/im'
import { IoMdCloseCircle } from 'react-icons/io'
import { fileToBase64, checkBase64Type } from '../../helpers'
import Container from './styles'

const InputGroup = ({
  children,
  onChange,
  style,
  className,
  inputClassName = '',
  handleAltPlatform,
  label,
  platform,
  type,
  optionLists,
  componentType,
  helperTxt,
  afterLabel,
  hasDeleteBtn = true,
  errorId,
  startInputLabel,
  includePdf,
  uploadInstruction = '',
  hasErrorMsg = true,
  UploadUI,
  filePreview = [],
  maxFileCount = 1,
  handleAltMedia,
  ...props
}) => {
  const componentId = uuid()
  const errorRef = useRef(null)
  const modifiedFilePreview = Array.isArray(filePreview)
    ? filePreview
    : [filePreview]
  const [{ showPassword }, setDisplay] = useState({
    showPassword: false,
  })

  const deleteUpload = (index) => {
    if (handleAltMedia) {
      handleAltMedia((s) => ({
        ...s,
        [props.name]: Array.isArray(s[props.name])
          ? s[props.name].filter((item, i) => i !== index)
          : '',
      }))
    }
  }

  const inputProps = {
    ...props,
    type: 'file',
    className: inputClassName,
    id: componentId,
    'data-errorid': componentId,
    multiple: maxFileCount > 1 ? true : false,
    accept:
      props.accept || includePdf
        ? 'application/pdf, image/png, image/jpeg'
        : 'image/png, image/jpeg',
    onChange: async ({ target: { files, name } }) => {
      if (files.length > maxFileCount || filePreview.length === maxFileCount) {
        message.warning(`You can only upload ${maxFileCount} file`)
        return
      }
      const base64 = await Promise.all(
        Array.from(files).map(async (file) => {
          if (file.size > 2000000) {
            message.error('Image size is too large')
            return
          } else {
            return await fileToBase64(file)
          }
        }),
      )

      if (typeof onChange === 'function') {
        onChange({
          target: {
            files,
            name,
            base64,
          },
        })
      }
    },
  }

  return (
    <Container className={`input--group ${className}`} style={style}>
      {children ? (
        children
      ) : (
        <>
          {label && <label>{label}</label>}
          {afterLabel && <p className="after--label__txt">{afterLabel}</p>}
          {type === 'select' ? (
            <>
              <select
                {...props}
                type={type ? type : 'text'}
                data-errorid={componentId}
                onChange={(e) => {
                  errorRef.current.innerHTML = ''
                  if (typeof onChange === 'function') onChange(e)
                }}
              >
                {optionLists}
              </select>
            </>
          ) : type === 'password' || componentType === 'password' ? (
            <div className="password--container">
              <input
                {...props}
                className={inputClassName}
                type={showPassword ? 'text' : 'password'}
                data-type="password"
                data-errorid={componentId}
                onChange={(e) => {
                  errorRef.current.innerHTML = ''
                  if (typeof onChange === 'function') onChange(e)
                }}
              />
              <button
                type="button"
                onClick={() =>
                  setDisplay((s) => ({
                    ...s,
                    showPassword: !s.showPassword,
                  }))
                }
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
            </div>
          ) : type === 'textarea' ? (
            <textarea
              {...props}
              type="textarea"
              className={inputClassName}
              data-errorid={componentId}
              onChange={(e) => {
                errorRef.current.innerHTML = ''
                if (typeof onChange === 'function') onChange(e)
              }}
            />
          ) : type === 'file' ? (
            <div className="file--container">
              {startInputLabel && (
                <p className="start--Input__txt">{startInputLabel}</p>
              )}
              {UploadUI ? (
                <>{UploadUI(inputProps)}</>
              ) : (
                <div className="uploader--container">
                  <label htmlFor={componentId} className="upload--instruction">
                    {uploadInstruction ? (
                      uploadInstruction
                    ) : (
                      <span>
                        Drag or{' '}
                        <strong className="u--color__primary">Upload</strong>{' '}
                        images
                        <br /> Images must be under 5 MB and at least 750 x 500
                        px in .jpg, .png, or .gif format
                      </span>
                    )}
                  </label>
                  <input {...inputProps} />
                </div>
              )}

              <div className="imgPreview--container">
                {modifiedFilePreview &&
                  Array.isArray(modifiedFilePreview) &&
                  modifiedFilePreview.length > 0 &&
                  modifiedFilePreview.map((item, index) =>
                    checkBase64Type(item) === 'image' ? (
                      <div
                        key={`img--${index}`}
                        className="img--item"
                        style={{
                          backgroundImage: `url(${item})`,
                        }}
                      >
                        <button
                          className="cancel--btn"
                          type="button"
                          onClick={() => {
                            deleteUpload(index)
                          }}
                        >
                          <IoMdCloseCircle />
                        </button>
                      </div>
                    ) : checkBase64Type(item) === 'pdf' ? (
                      <div
                        className="pdf--container"
                        onClick={() => {
                          window.open('data:application/pdf,' + escape(item))
                        }}
                      >
                        <button
                          className="cancel--btn"
                          type="button"
                          onClick={() => deleteUpload(index)}
                        >
                          <IoMdCloseCircle />
                        </button>
                        <ImFilePdf className="pdf--logo" />
                      </div>
                    ) : null,
                  )}
              </div>
            </div>
          ) : (
            <div
              className={`${
                startInputLabel && 'inputWithStartLabel'
              } input--container`}
            >
              {startInputLabel && (
                <p className="start--Input__txt">{startInputLabel}</p>
              )}
              <input
                {...props}
                className={inputClassName}
                type={type ? type : 'text'}
                data-errorid={componentId}
                onChange={(e) => {
                  errorRef.current.innerHTML = ''
                  if (typeof onChange === 'function') onChange(e)
                }}
              />
            </div>
          )}
        </>
      )}
      {helperTxt && <p className="helper--txt">{helperTxt}</p>}
      {hasErrorMsg && (
        <p className="error-msg" id={errorId || componentId} ref={errorRef} />
      )}
    </Container>
  )
}

export default InputGroup
