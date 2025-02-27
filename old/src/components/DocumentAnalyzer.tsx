import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, FileText, Download, X, Loader, AlertCircle } from 'lucide-react';
import { analyzeDocument } from '../utils/openai';
import Tesseract from 'tesseract.js';

interface AnalysisResult {
  text: string;
  analysis: string;
}

const DocumentAnalyzer: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type === 'application/pdf' || file.type.startsWith('image/')) {
        setFile(file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
        setError('');
      } else {
        setError('Please upload a PDF or image file.');
      }
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && (file.type === 'application/pdf' || file.type.startsWith('image/'))) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      setError('');
    } else {
      setError('Please upload a PDF or image file.');
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const processDocument = async () => {
    if (!file) return;

    setIsProcessing(true);
    setError('');

    try {
      // Extract text from image using Tesseract
      const { data: { text } } = await Tesseract.recognize(
        preview,
        'eng',
        { logger: m => console.log(m) }
      );

      // Analyze the extracted text using OpenAI
      const analysis = await analyzeDocument(text);

      if (analysis.includes("currently unavailable")) {
        setError("OpenAI API key is not configured. Document analysis is disabled.");
        setIsProcessing(false);
        return;
      }

      setResult({ text, analysis });
    } catch (err) {
      console.error('Processing error:', err);
      setError('Failed to process document. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadResults = () => {
    if (!result) return;
    
    const jsonString = JSON.stringify(result, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document_analysis.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const resetAnalyzer = () => {
    setFile(null);
    setPreview('');
    setResult(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold">AI Document Analysis</h2>
        <p className="text-gray-400">
          Upload any document to get an instant AI-powered analysis
        </p>
      </div>

      {!file && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-2 border-dashed border-white/20 rounded-lg p-8"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <div className="text-center space-y-4">
            <Upload className="w-12 h-12 mx-auto text-gray-400" />
            <div className="space-y-2">
              <p className="text-lg">Drag and drop your document here</p>
              <p className="text-sm text-gray-400">or</p>
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf,image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                Browse Files
              </button>
            </div>
            <p className="text-sm text-gray-400">Supports PDF and image files</p>
          </div>
        </motion.div>
      )}

      {error && (
        <div className="text-red-500 text-center">
          <AlertCircle className="w-6 h-6 mx-auto mb-2" />
          {error}
        </div>
      )}

      {file && !isProcessing && !result && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="space-y-4"
        >
          <div className="border border-white/20 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span>{file.name}</span>
              </div>
              <button
                onClick={resetAnalyzer}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {preview && (
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <img
                  src={preview}
                  alt="Document preview"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
            )}
          </div>
          <button
            onClick={processDocument}
            className="w-full px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
          >
            Analyze Document
          </button>
        </motion.div>
      )}

      {isProcessing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center space-y-4"
        >
          <Loader className="w-12 h-12 mx-auto animate-spin" />
          <p>Processing your document...</p>
        </motion.div>
      )}

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Analysis Results</h3>
              <button
                onClick={downloadResults}
                className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
              >
                <Download className="w-4 h-4" />
                Export Results
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="border border-white/20 rounded-lg p-6">
                <h4 className="font-semibold mb-4">AI Analysis</h4>
                <div className="prose prose-invert max-w-none">
                  {result.analysis.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="border border-white/20 rounded-lg p-6">
                <h4 className="font-semibold mb-4">Extracted Text</h4>
                <pre className="whitespace-pre-wrap text-sm text-gray-400">
                  {result.text}
                </pre>
              </div>
            </div>

            <div className="text-center">
              <button
                onClick={resetAnalyzer}
                className="px-4 py-2 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
              >
                Analyze Another Document
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DocumentAnalyzer;