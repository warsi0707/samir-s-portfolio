import { memo } from "react"

function Skill({skill}) {
  return (
    <h1 className='bg-gray-900 text-white p-1 rounded-md px-2'>{skill}</h1>
  )
}
export default memo(Skill)