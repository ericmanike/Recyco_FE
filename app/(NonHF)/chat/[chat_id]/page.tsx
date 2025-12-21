'use client'
import { Field, Formik, Form } from 'formik'
import * as Yup from 'yup'
import { ArrowUpToLine } from 'lucide-react'
import { use, useState, useRef, useEffect } from 'react'
import AnimatedBackground from '@/components/animatedBg'


interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function Page({ params }: { params: Promise<{ chat_id: string }> }) {
  const { chat_id } = use(params)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! How can I help you today?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const validationSchema = Yup.object({
    message: Yup.string()
      .min(1, 'Message cannot be empty')
      .required('Message is required'),
  })

  const handleSendMessage = async (values: { message: string }, { resetForm }: any) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: values.message,
      sender: 'user',
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    resetForm()

    // Simulate bot typing
    setIsTyping(true)

    // Simulate bot response (replace with actual API call)
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: `You said: "${values.message}". This is a simulated response for chat ID: ${chat_id}`,
        sender: 'bot',
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <>
      <AnimatedBackground />
      <div className='sticky m-auto flex justify-center items-center min-h-screen p-4'>
        <div className='h-[90vh] bg-white/90 backdrop-blur-sm md:w-[500px] w-full rounded-[20px] relative shadow-2xl flex flex-col'>
          {/* Header */}
          <div className='flex gap-3 border-b-2 border-gray-300 p-4 rounded-t-[20px] bg-white'>
            <img
              src={'/Wastocash1.png'}
              alt='logo'
              className='w-10 h-10 rounded-full object-cover'
            />
            <div className='flex flex-col'>
              <span className='font-semibold text-gray-800'>WastoCash Assistant</span>
              <span className='text-xs text-gray-500'>Chat ID: {chat_id}</span>
            </div>
          </div>

          {/* Messages Container */}
          <div className='flex-1 overflow-y-scroll p-4 space-y-4'>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    msg.sender === 'user'
                      ? 'bg-green-500 text-white rounded-br-none'
                      : 'bg-gray-200 text-gray-800 rounded-bl-none'
                  }`}
                >
                  <p className='text-sm break-word'>{msg.text}</p>
                  <span className='text-xs opacity-70 mt-1 block'>
                    {msg.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className='flex justify-start'>
                <div className='bg-gray-200 rounded-2xl rounded-bl-none px-4 py-3'>
                  <div className='flex space-x-2'>
                    <div className='w-2 h-2 bg-gray-500 rounded-full animate-bounce'></div>
                    <div
                      className='w-2 h-2 bg-gray-500 rounded-full animate-bounce'
                      style={{ animationDelay: '0.2s' }}
                    ></div>
                    <div
                      className='w-2 h-2 bg-gray-500 rounded-full animate-bounce'
                      style={{ animationDelay: '0.4s' }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Form */}
          <div className='p-4 bg-white border-t border-gray-200 rounded-b-[20px]'>
            <Formik
              initialValues={{ message: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSendMessage}
            >
              {({ errors, touched, isSubmitting, values }) => (
                <Form className='flex gap-2 items-end'>
                  <div className='flex-1'>
                    <Field
                      as='textarea'
                      name='message'
                      placeholder='Type your message...'
                      rows={1}
                      className='w-full rounded-xl p-3 outline-none border-2 border-gray-300 focus:border-green-500 resize-none transition-all'
                      onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          if (values.message.trim()) {
                            e.currentTarget.form?.requestSubmit()
                          }
                        }
                      }}
                    />
                    {touched.message && errors.message && (
                      <div className='text-red-500 text-xs mt-1 px-1'>{errors.message}</div>
                    )}
                  </div>

                  <button
                    type='submit'
                    disabled={isSubmitting || !values.message.trim()}
                    className='bg-green-500 hover:bg-green-600 p-3 rounded-full text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
                  >
                    <ArrowUpToLine className='w-5 h-5' />
                  </button>
                </Form>
              )}
            </Formik>
            <p className='text-center text-xs text-gray-400 mt-2'>
              Press Enter to send, Shift+Enter for new line
            </p>
          </div>
        </div>
      </div>
    </>
  )
}