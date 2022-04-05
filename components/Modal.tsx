import React, { Fragment, ReactNode } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import Button from '@/components/Button'

type TProps = {
  children: ReactNode
  isOpen: boolean
  hide: () => void
}

const Modal = ({ children, isOpen, hide }: TProps): JSX.Element => {
  const body = React.Children.map(children, (child) =>
    // @ts-ignore
    child.type.displayName === 'Body' ? child : null
  )
  const footer = React.Children.map(children, (child) =>
    // @ts-ignore
    child.type.displayName === 'Footer' ? child : null
  )

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={hide}
        className="fixed z-[1500] inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-xl text-left overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                {body ? body : children}
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse sm:items-center sm:gap-3">
                {footer ? footer : <Button onClick={hide}>Close</Button>}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

// reference: https://dev.to/shayanypn/buckle-with-react-sub-component-10ll
// @ts-ignore
const Body = ({ children }) => children
Body.displayName = 'Body'
Modal.Body = Body

// @ts-ignore
const Footer = ({ children }) => children
Footer.displayName = 'Footer'
Modal.Footer = Footer

export default Modal
