import classNames from 'classnames'
import React, { useState, ReactNode } from 'react'

type TButtonProps = {
  type?: 'primary' | 'danger' | 'light'
  className?: string
  children: ReactNode
  successText?: string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({
  type = 'light',
  successText,
  className,
  children,
  onClick = () => null,
  disabled = false,
}: TButtonProps): JSX.Element => {
  const [btnChildren, setBtnChildren] = useState(children)
  const [loading, setLoading] = useState<boolean>(false)

  if (disabled) {
    return (
      <button
        className={classNames(
          'border-transparent bg-gray-300 text-white w-full sm:w-auto inline-flex justify-center rounded-xl shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:text-sm cursor-not-allowed',
          className
        )}
      >
        {children}
      </button>
    )
  }

  let btnClassName = ''
  switch (type) {
    case 'primary':
      btnClassName =
        'border-transparent bg-blue-500 text-white hover:bg-blue-700'
      break
    case 'danger':
      btnClassName = 'border-transparent bg-red-600 text-white hover:bg-red-700'
      break
    default:
      btnClassName = 'border-gray-300 bg-white text-gray-700 hover:bg-gray-100'
  }

  let loadingClassName = ''
  switch (type) {
    case 'primary':
      loadingClassName = 'border-white border-r-blue-300'
      break
    case 'danger':
      loadingClassName = 'border-white border-r-red-300'
      break
  }

  const clickAction = async () => {
    if (!loading) {
      setLoading(true)
      await onClick()
      if (successText) {
        setBtnChildren(successText)
        setTimeout(() => setBtnChildren(children), 3000)
      }
      setLoading(false)
    }
  }

  return (
    <button
      className={classNames(
        `${btnClassName} w-full my-2 sm:my-0 sm:w-auto inline-flex justify-center items-center border shadow-sm px-4 py-2 text-base font-medium focus:outline-none sm:text-sm`,
        loading ? 'cursor-not-allowed' : '',
        className
      )}
      onClick={clickAction}
    >
      {loading && loadingClassName && (
        <svg
          className={`animate-spin h-4 w-4 mr-2 rounded-full bg-transparent border-2 ${loadingClassName} border-opacity-90`}
          viewBox="0 0 24 24"
        ></svg>
      )}
      {btnChildren}
    </button>
  )
}

export default Button
