import { FiCheck } from 'react-icons/fi'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      company: "Success Network India",
      messages: [
        { sender: "Rajesh", text: "Hi, I'm interested in your MLM software", time: "10:30 AM" },
        { sender: "Volochain", text: "Hello! Thank you for reaching out. How can we help you today?", time: "10:35 AM" },
        { sender: "Rajesh", text: "Can you tell me about your compensation plans?", time: "10:40 AM" },
        { sender: "Volochain", text: "Sure! We offer multiple plans. Let me send you details 📄", time: "10:42 AM" },
        { sender: "Rajesh", text: "Great! This looks perfect for our business. Let's proceed 👍", time: "10:50 AM" }
      ]
    },
    {
      id: 2,
      name: "Priya Singh",
      company: "Growth Solutions Ltd",
      messages: [
        { sender: "Priya", text: "We need a mobile app for our MLM", time: "2:15 PM" },
        { sender: "Volochain", text: "Perfect! We have excellent mobile solutions. Let me show you a demo", time: "2:20 PM" },
        { sender: "Priya", text: "The interface looks really intuitive! 😊", time: "2:30 PM" },
        { sender: "Volochain", text: "Thank you! We focus on user experience. Shall we discuss pricing?", time: "2:35 PM" },
        { sender: "Priya", text: "Yes, let's do it! Very impressed with your service 🙌", time: "2:45 PM" }
      ]
    },
    {
      id: 3,
      name: "Amit Patel",
      company: "Digital Commerce Hub",
      messages: [
        { sender: "Amit", text: "Do you support cryptocurrency?", time: "9:00 AM" },
        { sender: "Volochain", text: "Yes! We have full crypto integration with blockchain tech", time: "9:05 AM" },
        { sender: "Amit", text: "Amazing! That's exactly what we need", time: "9:10 AM" },
        { sender: "Volochain", text: "Great! We can customize the solution for your needs 🚀", time: "9:15 AM" },
        { sender: "Amit", text: "Let's make this happen. Best decision ever! ✨", time: "9:20 AM" }
      ]
    },
    {
      id: 4,
      name: "Neha Sharma",
      company: "Elite Network Systems",
      messages: [
        { sender: "Neha", text: "How long is your implementation process?", time: "3:30 PM" },
        { sender: "Volochain", text: "Usually 2-4 weeks depending on complexity. Very quick! ⚡", time: "3:35 PM" },
        { sender: "Neha", text: "That's impressive! What about support?", time: "3:40 PM" },
        { sender: "Volochain", text: "24/7 support with dedicated account manager 💼", time: "3:45 PM" },
        { sender: "Neha", text: "Perfect! Let's sign up. Excited to work with you! 🎉", time: "3:50 PM" }
      ]
    }
  ]

  return (
    <section id="testimonials" className="relative py-20 px-4 bg-dark-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid pointer-events-none opacity-50"></div>
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent-cyan/10 rounded-full blur-[120px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-5 rounded-full border border-white/15 bg-white/5 text-sm font-medium text-gray-300">
            Testimonials
          </div>
          <h2 className="text-4xl font-bold mb-4 text-gradient">What Our Clients Say</h2>
          <p className="text-gray-400 text-lg">Real conversations with happy clients across the globe</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="glass-effect rounded-2xl overflow-hidden border border-white/10 hover:border-accent-blue/30 transition duration-300">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border-b border-white/10">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue font-bold text-white">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-white leading-tight">{testimonial.name}</p>
                  <p className="text-xs text-gray-400">{testimonial.company}</p>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-accent-cyan">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                  online
                </span>
              </div>

              {/* Messages */}
              <div className="p-4 space-y-3 bg-dark-800/40" style={{ maxHeight: '350px', overflowY: 'auto' }}>
                {testimonial.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.sender === 'Volochain' ? 'justify-start' : 'justify-end'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${
                        msg.sender === 'Volochain'
                          ? 'bg-white/10 text-gray-100 rounded-tl-sm'
                          : 'bg-gradient-to-r from-accent-purple to-accent-blue text-white rounded-tr-sm'
                      }`}
                    >
                      <p className="text-sm">{msg.text}</p>
                      <p className={`flex items-center justify-end gap-1 text-[10px] mt-1 ${
                        msg.sender === 'Volochain' ? 'text-gray-400' : 'text-white/70'
                      }`}>
                        {msg.time}
                        {msg.sender !== 'Volochain' && <FiCheck className="text-xs" />}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
