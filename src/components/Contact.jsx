export default function Contact() {
  return (
    <div className="bg-primary-200 w-full py-20 text-gray-200">
      <h1 className="text-center mx-auto text-5xl">Have an Idea</h1>
      <h1 className="text-center mx-auto text-5xl">
        Let's work together to realize
      </h1>
      <div className="flex mx-12 my-10 text-xl gap-4">
        <div className="border-b border-gray-200 w-full py-1">Name</div>
        <div className="border-b border-gray-200 w-full py-1">Subject</div>
      </div>
      <div className="flex mx-12 my-10 text-xl gap-4">
        <div className="border-b border-gray-200 w-full py-1">Email</div>
        <div className="border-b border-gray-200 w-full py-1">Message</div>
      </div>
      <div className="w-fit mx-auto bg-gray-100 text-gray-800 px-10 py-5 rounded-full text-xl my-20">Send Message</div>
    </div>
  );
}
