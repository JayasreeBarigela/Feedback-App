const Emoji = props => {
  const {emoji, greet} = props
  const {imageUrl, name} = emoji
  return (
    <li className="">
      <button className="" onClick={greet} type="button">
        <img src={imageUrl} alt={name} className="" />
      </button>
      <p>{name}</p>
    </li>
  )
}
export default Emoji
