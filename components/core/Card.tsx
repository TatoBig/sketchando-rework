const Card = ({ text = 'red' }) => {
  return (
    <div className="bg-gray-500 w-full md:h-96 h-48 rounded">
      {text}
    </div>
  )
}

export default Card
