import { AnimatePresence } from 'framer-motion';
import Header from './Header';

const Default = ({ children }) => {
  return (
    <div className="m-2">
      <Header />
      <div className="mt-2 rounded">
        <AnimatePresence
          initial={false}
          exitBeforeEnter
          onExitComplete={() => null}
        >
          {children}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Default
