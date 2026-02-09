export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-10 px-4 pb-24 pt-24">
      <h1 className="text-3xl font-bold text-gray-900">About Us</h1>

      <p className="text-gray-600">
        We are a company dedicated to providing the best solutions for your needs.
        Our team is passionate about creating modern, scalable, and user-friendly applications.
      </p>

      <ul className="list-disc pl-5 text-gray-600 space-y-2">
        <li>Innovative technology</li>
        <li>Professional team</li>
        <li>Customer satisfaction</li>
      </ul>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 rounded-xl border border-gray-200 bg-gray-50 p-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div className="flex-1 rounded-xl border border-gray-200 bg-gray-50 p-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>

      <div className="flex flex-col gap-6">
        <div className="rounded-xl border border-gray-200 bg-white p-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
    </div>
  )
}
