
export default function BookAppointment() {
    return (
        <div className="grid gap-4 place-items-center mt-12 p-14">
            <div className="uppercase tracking-wide text-xl text-center text-indigo-500 font-semibold">
                {`"Don't Wait, Find the perfect teacher for your Beloved Son/Daughter"`}
            </div>
            <div>
                <button type="button" className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                Book Appointment
                </button>
            </div>
        </div>
    )
}
