import { Fragment } from 'react'
import { AnimatePresence } from 'framer-motion';
import Header from './Header';

const Default = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <div className="mt-2 rounded">
        <AnimatePresence
          initial={false}
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          {children}
        </AnimatePresence>
      </div>
    </Fragment>

  )
}

export default Default
