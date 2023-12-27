import { Link } from "react-router-dom";

export default function OurTopConcern() {
	const TopConcern = [
		{
            url:"https://khushiya.in/uploaded-files/profile/images/1.jpg",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/pharmacy.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/legal1.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/uploaded-files/profile/images/1.jpg",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/pharmacy.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/legal1.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/uploaded-files/profile/images/1.jpg",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/pharmacy.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/legal1.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/uploaded-files/profile/images/1.jpg",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/pharmacy.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/legal1.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/uploaded-files/profile/images/1.jpg",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/pharmacy.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/legal1.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/uploaded-files/profile/images/1.jpg",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/pharmacy.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
		{
            url:"https://khushiya.in/img/legal1.png",
            name:"name",
            title:"engineer",
            linkTo:"",
        },
	];
	return (
        <div className="bg-white dark:bg-gray-900 pt-12 mt-12">
            <h1 className="mt-12 mx-auto container 2xl:max-w-7xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Other Service    
            </h1>
            <section className=" py-24 px-12">
                <ul className="container py-12 grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] mx-auto rounded-xl shadow-md ">
                    {TopConcern.map((concern,i) => (
                        <li key={i} className=" capitalize text-center grid place-content-center row-span-[1fr_auto]">
                            <div className=" w-24 h-24 grid place-content-center rounded-full overflow-hidden">
                                <img className=" scale-150 " src={concern.url} alt="" />
                            </div>
                            <Link className=" uppercase font-medium text-gray-800 hover:text-blue-600" to={concern.linkTo}>{concern.name}</Link>
                            <span className="text-gray-500 text-sm">{concern.title}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
	);
}
