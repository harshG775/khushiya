export default function OurOtherService() {
	const imgUrl = [
		"https://khushiya.in/img/beauty.png",
		"https://khushiya.in/img/pharmacy.png",
		"https://khushiya.in/img/legal1.png",
		"https://khushiya.in/img/real.png",
	];
	return (
        <div className="bg-white dark:bg-gray-900 pt-12 mt-12">
            <h1 className="mt-12 mx-auto container 2xl:max-w-7xl text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Our Other Service    
            </h1>
            <section className=" py-24 px-12">
                <ul className="container grid gap-4 grid-cols-1 md:grid-cols-2 mx-auto rounded-xl shadow-md ">
                    {imgUrl.map((url,i) => (
                        <li key={i} className="grid place-content-center">
                            <img className=" w-full object-cover  max-w-lg rounded-lg" src={url} alt="" />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
	);
}
