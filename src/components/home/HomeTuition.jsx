import { Link } from "react-router-dom"
export default function HomeTuition() {
    return (
        <section className="bg-white dark:bg-gray-900 py-24 px-12 mt-12">
            <div className=" md:max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
                <Link to={""} className="block mt-1 text-2xl leading-tight font-medium  text-indigo-500 hover:underline my-4">Home Tuition is the #1 secret of ACADEMIC EXCELLENCE</Link>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 p-4">
                    <div className="grid place-content-center overflow-hidden">
                        <img className=" h-52 scale-125 w-full object-cover" src="https://khushiya.in/img/bht_banner.png" alt="Modern building architecture"/>
                    </div>
                    <div className="grid gap-4">
                        <p className="text-slate-500">View the profiles freely and connect with your fantastic teacher according to your criteria (prices, diploma, reviews, classes at home or online)</p>
                        <p className="text-slate-500">Teachers will get back to you within hours! And if you {"can't"} find the perfect teacher, our team is here to help.</p>
                        <p className="text-slate-500">Freely schedule your classes with your teacher from the messaging platform.</p>
                        <p className="text-slate-500">Student and teacher working in harmony</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
