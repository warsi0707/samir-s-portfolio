import { memo } from "react"

function TechCard({ icon, label}){
    return (
        <div className='flex flex-col items-center'>
            <p className={'text-6xl text-yellow-400 cursor-pointer transition-all duration-300 hover:-translate-y-5'}>{icon}</p>
            <p>{label}</p>
        </div>
    )
}
export default  memo(TechCard)