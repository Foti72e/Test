import React from 'react';
import { ExternalLink } from 'lucide-react';

interface AIToolProps {
  title: string;
  url: string;
  description: string;
}

export default function AITool({ title, url, description }: AIToolProps) {
  return (
    <a
      href={url}
      className="block p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-emerald-500/50 shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group"
      target="_self"
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
            {title}
          </h3>
          <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-emerald-400 transition-colors" />
        </div>
        <p className="text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>
    </a>
  );
}