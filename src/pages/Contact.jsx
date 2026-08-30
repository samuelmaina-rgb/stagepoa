import { Mail, MessageCircle, MapPin } from "lucide-react";

function Contact() {
  return (
    <main className="min-h-screen bg-[#D9D9D9] px-4 md:px-6 py-10">

      <div className="max-w-6xl mx-auto">

        
        <section className="mb-10">

          <p className="text-[#10B981] font-extrabold uppercase tracking-wide">
            Contact StagePoa
          </p>

          <h1 className="mt-2 text-4xl md:text-6xl font-extrabold text-black">
            We'd love to hear from you.
          </h1>

          <p className="mt-4 max-w-2xl text-gray-600 text-lg font-medium">
            Have a question, suggestion or found information that
            needs correcting? Get in touch with the StagePoa team.
          </p>

        </section>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">


         
          <section className="bg-[#676E7E]/35 border-2 border-black border-r-4 border-b-4 rounded-2xl p-8">

            <h2 className="text-3xl font-extrabold text-black">
              Get in touch
            </h2>

            <p className="mt-3 text-gray-700 leading-relaxed">
              We're always looking for ways to improve StagePoa.
              Your feedback helps us make the platform better.
            </p>


            
            <div className="flex items-start gap-4 mt-8">

              <div className="w-12 h-12 shrink-0 bg-black text-[#10B981] rounded-xl flex items-center justify-center">
                <Mail size={22} />
              </div>

              <div>
                <h3 className="font-extrabold text-black">
                  Email
                </h3>

                <p className="text-gray-600 mt-1">
                  hello@stagepoa.com
                </p>
              </div>

            </div>


            <div className="flex items-start gap-4 mt-6">

              <div className="w-12 h-12 shrink-0 bg-black text-[#10B981] rounded-xl flex items-center justify-center">
                <MapPin size={22} />
              </div>

              <div>
                <h3 className="font-extrabold text-black">
                  Location
                </h3>

                <p className="text-gray-600 mt-1">
                  Nairobi, Kenya
                </p>
              </div>

            </div>


            <div className="flex items-start gap-4 mt-6">

              <div className="w-12 h-12 shrink-0 bg-black text-[#10B981] rounded-xl flex items-center justify-center">
                <MessageCircle size={22} />
              </div>

              <div>
                <h3 className="font-extrabold text-black">
                  Feedback
                </h3>

                <p className="text-gray-600 mt-1">
                  Tell us how we can improve StagePoa.
                </p>
              </div>

            </div>

          </section>


          <section className="bg-white border-2 border-black border-r-4 border-b-4 rounded-2xl p-8">

            <h2 className="text-3xl font-extrabold text-black">
              Send us a message
            </h2>

            <form className="mt-6 space-y-5">

              
              <div>

                <label className="block text-sm font-extrabold mb-2">
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-[#D9D9D9] border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981]"
                />

              </div>


              
              <div>

                <label className="block text-sm font-extrabold mb-2">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full bg-[#D9D9D9] border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981]"
                />

              </div>


             
              <div>

                <label className="block text-sm font-extrabold mb-2">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="How can we help?"
                  className="w-full bg-[#D9D9D9] border-2 border-black rounded-xl px-4 py-3 outline-none focus:border-[#10B981] resize-none"
                />

              </div>


              
              <button
                type="submit"
                className="w-full bg-[#10B981] text-white px-5 py-3 rounded-xl font-extrabold border-2 border-black border-r-4 border-b-4 hover:translate-y-[1px] transition"
              >
                Send Message
              </button>

            </form>

          </section>

        </div>

      </div>

    </main>
  );
}

export default Contact;