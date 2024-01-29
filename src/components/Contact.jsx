export default function Contact() {
  return (
    <div className="bg-primary-200 w-full py-20 text-secondary-100">
      <h1 className="text-center mx-4 md:mx-12 text-4xl md:text-5xl">Have an Idea</h1>
      <h1 className="text-center mx-4 md:mx-auto text-4xl md:text-5xl">
        Let's work together to realize
      </h1>
      <div className="flex mx-12 my-10 text-xl gap-4 text-secondary-300">
        <div className="border-b border-secondary-300 w-full py-1">Name</div>
        <div className="border-b border-secondary-300 w-full py-1">Subject</div>
      </div>
      <div className="flex mx-12 my-10 text-xl gap-4 text-secondary-300">
        <div className="border-b border-secondary-300 w-full py-1">Email</div>
        <div className="border-b border-secondary-300 w-full py-1">Message</div>
      </div>
      <div className="w-fit mx-auto bg-secondary-100 text-secondary-800 px-5 py-2.5 rounded-full text-lg md:text-xl my-20 md:px-10 md:py-5">Send Message</div>
    </div>
  );
}
