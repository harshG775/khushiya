import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
export default function KhushiyaPrime() {
    const data =[
        {
            linkTo:"",
            iconName:"healthicons:doctor-male",
            title:"doctor",
        },
        {
            linkTo:"",
            iconName:"mdi:clothes-hanger",
            title:"fashion",
        },

        {
            linkTo:"",
            iconName:"mdi:clothes-hanger",
            title:"fashion",
        },
        {
            linkTo:"",
            iconName:"mdi:clothes-hanger",
            title:"fashion",
        },
        {
            linkTo:"",
            iconName:"mdi:clothes-hanger",
            title:"fashion",
        },
        {
            linkTo:"",
            iconName:"mdi:clothes-hanger",
            title:"fashion",
        },
        {
            linkTo:"",
            iconName:"mdi:clothes-hanger",
            title:"fashion",
        },
        {
            linkTo:"",
            iconName:"mdi:clothes-hanger",
            title:"fashion",
        },
        {
            linkTo:"",
            iconName:"mdi:clothes-hanger",
            title:"fashion",
        },
    ]
    return (
        <>
            <h1 className="mt-24 mx-auto container 2xl:max-w-7xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Khushiya Prime</h1>
            <section className="p-4">
                <ul className="mx-auto max-w-7xl grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))]">
                    {data.map((item,i)=>(
                        <li key={i}>
                            <Link to={item.linkTo} className="flex flex-col items-center max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <Icon className="mb-2 text-7xl font-bold text-gray-900 dark:text-white" icon={item.iconName}/>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h2>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        
        </>
    )
}