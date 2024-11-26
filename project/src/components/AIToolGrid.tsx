import React from 'react';
import AITool from './AITool';

const tools = [
  {
    title: 'Face Swapping',
    url: 'https://instantx-sd35-ip-adapter.hf.space',
    description: 'Advanced AI-powered face swapping tool with high-quality results and real-time processing.'
  },
  {
    title: 'Screenshot To Html',
    url: 'https://screenshot-to-code.com',
    description: 'Convert any screenshot or design into clean, responsive HTML/CSS code instantly.'
  },
  {
    title: 'Stablediffusion Infinity',
    url: 'https://huggingface.co/spaces/lnyan/stablediffusion-infinity',
    description: 'Create endless AI-generated images with advanced stable diffusion models.'
  },
  {
    title: 'Applio',
    url: 'https://github.com/IAHispano/Applio',
    description: 'Open-source AI application framework for rapid development and deployment.'
  },
  {
    title: 'Hand Writing',
    url: 'https://handwriting-generator.com',
    description: 'Generate realistic handwritten text using advanced AI algorithms.'
  },
  {
    title: 'IP-Adapter-FaceID Plus',
    url: 'https://huggingface.co/spaces/multimodalart/IP-Adapter-FaceID',
    description: 'Advanced face recognition and adaptation tool for AI applications.'
  },
  {
    title: 'RAGArch',
    url: 'https://huggingface.co/spaces/microsoft/RAGARCH',
    description: 'Retrieval-Augmented Generation architecture for improved AI responses.'
  },
  {
    title: 'SeamlessM4T',
    url: 'https://huggingface.co/spaces/facebook/seamless_m4t',
    description: 'Multilingual and multimodal translation tool powered by advanced AI.'
  },
  {
    title: 'Seamless AI',
    url: 'https://seamless.ai',
    description: 'AI-powered platform for automated lead generation and sales intelligence.'
  },
  {
    title: 'Object Detection',
    url: 'https://huggingface.co/spaces/facebook/detr-resnet-50',
    description: 'State-of-the-art object detection using DETR architecture.'
  },
  {
    title: 'Video YouTube Translator',
    url: 'https://translatevideo.com',
    description: 'Automatically translate YouTube videos into multiple languages.'
  },
  {
    title: 'Outfit Anyone',
    url: 'https://huggingface.co/spaces/PKUWilliamYang/Outfit-Anyone',
    description: 'Virtual try-on technology powered by AI for clothing visualization.'
  }
];

export default function AIToolGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {tools.map((tool) => (
        <AITool key={tool.title} {...tool} />
      ))}
    </div>
  );
}