const Panel = ({ children }) => {
  return (
    <div className="absolute w-full h-full top-0 left-0">
      <div className="bg-gray-200 m-4 md:relative top-1/6 left-0 right-0 md:m-auto md:p-4 py-4 px-2 md:w-1/2 rounded-xl shadow-xl flex">
        {children}

      </div>
    </div>
  )
}

export default Panel
