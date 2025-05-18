import { ContactForm } from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions or want to learn more? We'd love to hear from you.
              Fill out the form and we'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-900">Email</h3>
                <p className="mt-1 text-gray-600">contact@example.com</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                <p className="mt-1 text-gray-600">+1 (555) 123-4567</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-900">Address</h3>
                <p className="mt-1 text-gray-600">
                  123 Example Street<br />
                  City, State 12345<br />
                  United States
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <ContactForm formId={1} />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 