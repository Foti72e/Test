import React, { useState } from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';

interface AITool {
  name: string;
  url: string;
  description: string;
}

const aiTools: AITool[] = [
  {
    name: 'Llama Mesh',
    url: 'https://zhengyi-llama-mesh.hf.space',
    description: 'Advanced face swapping AI tool'
  },
  {
    name: 'Screenshot To Html',
    url: 'https://screenshot-to-code.com',
    description: 'Convert screenshots to HTML code'
  },
  {
    name: 'Stablediffusion Infinity',
    url: 'https://stability.ai',
    description: 'Advanced image generation'
  },
  {
    name: 'RAGArch',
    url: 'https://ragarch.com',
    description: 'AI-powered architecture assistant'
  },
  {
    name: 'SeamlessM4T',
    url: 'https://seamlessm4t.com',
    description: 'Multilingual AI translation'
  },
  {
    name: 'Seamless AI',
    url: 'https://seamless.ai',
    description: 'AI-powered sales intelligence'
  },
  {
    name: 'Object Detection',
    url: 'https://objectdetection.ai',
    description: 'Real-time object detection'
  },
  {
    name: 'Video YouTube Translator',
    url: 'https://videotranslator.ai',
    description: 'Translate YouTube videos'
  },
  {
    name: 'Outfit Anyone',
    url: 'https://outfitanyone.ai',
    description: 'Virtual try-on for any clothing'
  }
];

function App() {
  const [selectedTool, setSelectedTool] = useState<AITool | null>(null);

  const handleToolClick = (tool: AITool) => {
    setSelectedTool(tool);
  };

  const handleBack = () => {
    setSelectedTool(null);
  };

  if (selectedTool) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="p-4 border-b border-gray-700">
          <button
            onClick={handleBack}
            className="flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Tools</span>
          </button>
        </div>
        <iframe
          src={selectedTool.url}
          className="w-full h-[calc(100vh-64px)]"
          title={selectedTool.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">AI Tools Directory</h1>
        <p className="text-gray-400 text-center mb-12">Click on any tool to access it directly</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiTools.map((tool) => (
            <div
              key={tool.name}
              onClick={() => handleToolClick(tool)}
              className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-gray-700/50 border border-gray-700/50"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{tool.name}</h2>
                <ExternalLink className="w-5 h-5 text-teal-400" />
              </div>
              <p className="text-gray-400">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
