export default function Contact() {
  return (
    <div className="bg-primary-200 w-full py-20 text-secondary-100  self-center text-special">
      <div className="max-w-[1440px] mx-5 lg:mx-auto lg:px-5 ">
        <h1 className="text-center  text-heading-3">
          Have an Idea
        </h1>
        <h1 className="text-center text-heading-3">
          Let's work together to realize
        </h1>
        <div className="flex my-10 gap-4">
          <input className="border-b border-secondary-300 w-full py-1 bg-transparent" placeholder="Name"/><label htmlFor="Name"/> 
          <input className="border-b border-secondary-300 w-full py-1 bg-transparent " placeholder= "Subject" />
        </div>
        <div className="flex  my-10  gap-4 ">
          <input className="border-b border-secondary-300 w-full py-1 bg-transparent" placeholder="Email"/>
          <input className="border-b border-secondary-300 w-full py-1 bg-transparent" placeholder="Message" />
        </div>
        <div className="w-fit mx-auto bg-secondary-100 text-secondary-800 px-5 py-2.5 rounded-full text-lg md:text-xl my-20 md:px-10 md:py-5">
          Send Message
        </div>
      </div>
    </div>
  );
}
