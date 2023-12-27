import { Link } from "react-router-dom"
export default function SellorRentProperty() {
    return (
        <section className="bg-white dark:bg-gray-900 py-24 px-12 mt-12">
            <div className=" md:max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-4">
                    <div className="grid gap-4">
                        <Link to={""} className="block mt-1 text-2xl leading-tight font-medium  text-indigo-500 hover:underline">Sell or Rent your property with Khushiya.in</Link>
                        <p className="mt-2 text-slate-500">Become Link part of the growing {"Khushiya"} family. As Link promise to our real-estate agent community, Now you can grow your business happily. Further more, over a million buyers visit us every month, giving you the audience that you need. Visit our Website to avail all these benefits & conveniently follow up with your clients.</p>
                    </div>
                    <div className=" grid place-content-center overflow-hidden">
                        <img className="scale-100  h-48 w-full object-cover " src="https://khushiya.in/img/properties.gif" alt="Modern building architecture"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
