import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { MessageSquare, Phone, Bot, Code, Shield, Zap } from 'lucide-react';
import chattingImage from '@/assets/images/chatting.svg';
import codeAdd from '@/assets/images/codeadd.svg';
const LandingPage = () => {
  const features = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Intelligent Chat",
      description: "Engage your customers with natural, context-aware conversations powered by advanced AI"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Voice Integration",
      description: "Seamlessly handle voice calls with AI that understands and responds naturally"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Custom Chatbots",
      description: "Build and deploy chatbots tailored to your specific business needs"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Easy Integration",
      description: "Simple API integration with your existing applications and workflows"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade encryption and security measures to protect your data"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-time Processing",
      description: "Lightning-fast responses with minimal latency for seamless interactions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-900 mb-6 ">
              Transform Customer Communication with <span className="text-blue-600">Dial AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Supercharge your customer service with AI-powered chat and voice solutions that seamlessly integrate into your applications.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
              <Button className='text-black' size="lg" variant="outline">
                View Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-8 flex justify-center">
          <img
            src={chattingImage.src}
            height={400}
          
            alt="Dial AI Interface"
            className="rounded-lg border-0"
          />
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Powerful Features for Modern Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Integrate AI Communication in Minutes
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Our simple API and SDK make it easy to add powerful AI capabilities to your applications. Get started with just a few lines of code.
              </p>
              <div className="bg-gray-800 rounded-lg p-6 text-white font-mono text-sm">
                <pre>
                  {`// Initialize Dial AI
const dialAI = new DialAI({
  apiKey: 'your-api-key'
});

// Create a chatbot instance
const chatbot = await dialAI.createBot({
  name: 'Customer Support',
  model: 'advanced-gpt4'
});`}
                </pre>
              </div>
            </div>
            <div className="relative">
              <img
                src={codeAdd.src}
                alt="Integration Demo"
                className="rounded-lg "
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Customer Experience?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of businesses already using Dial AI to deliver exceptional customer service.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
            Start Free Trial
          </Button>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;