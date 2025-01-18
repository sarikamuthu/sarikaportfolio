"use client";
import React, { useState } from "react";
import { FaLink } from "react-icons/fa";

interface Publication {
  id: number;
  title: string;
  volume: string;
  anthologyId: string;
  link: string;
  description: string;
}

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);

  
  const publications = [
    {
      id: 1,
      title: "Hate Speech Detection using Transformer Model",
      volume: "Proceedings of the 6th Workshop on Challenges and Applications of Automated Extraction of Socio-political Events from Text",
      anthologyId: "2023.case-1.11",
      link: "https://aclanthology.org/2023.case-1.11/",
      description: "This task highlights the importance of detecting hate speech in text-embedded images.By leveraging deep learning models,this research aims to uncover the connection between hate speech and the entities it targets."
    },
    {
      id: 2,
      title: "Depression Detection System from Social Media Text using Transformer Models",
      volume: " Proceedings of the Second Workshop on Language Technology for Equality, Diversity and Inclusion",
      anthologyId: "2022.ltedi-1.26",
      link: "https://aclanthology.org/2022.ltedi-1.26/",
      description: "Depression is a common mental illness that involves sadness and lack of interest in all day-to-day activities. The task is to classify the social media text as signs of depression into three labels namely “not depressed”, “moderately depressed”, and “severely depressed”. We have build a system using Deep Learning Model “Transformers”. Transformers provides thousands of pretrained models to perform tasks on different modalities such as text, vision, and audio. The multi-class classification model used in our system is based on the ALBERT model."
    },
    {
      id: 3,
      title: "Troll Meme Classification in Tamil using Transformer Models",
      volume: "Proceedings of the Second Workshop on Speech and Language Technologies for Dravidian Languages",
      anthologyId: "2022.dravidianlangtech-1.21",
      link: "https://aclanthology.org/2022.dravidianlangtech-1.21/",
      description: "The ACL shared task of DravidianLangTech-2022 for Troll Meme classification is a binary classification task that involves identifying Tamil memes as troll or not-troll. Classification of memes is a challenging task since memes express humour and sarcasm in an implicit way. Team SSN_MLRG1 tested and compared results obtained by using three models namely BERT, ALBERT and XLNET. The XLNet model outperformed the other two models in terms of various performance metrics."
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="heading">
        My <span className="text-purple">Publications</span>
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        {publications.map((pub) => (
          <div
            key={pub.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-6"
            onClick={() => setSelectedPublication(pub)}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{pub.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{pub.volume}</p>
            <p className="text-xs text-gray-500 mb-4">Anthology ID: {pub.anthologyId}</p>
            
            <button
              className="flex lg:text-xl md:text-xs text-sm"
              onClick={(e) => {
                e.stopPropagation();
                window.open(pub.link, "_blank");
              }}
              style={{ color: 'darkblue' }}
            >
              <FaLink />
              <span>Publication Link</span>
            </button>
          </div>
        ))}
      </div>

      {selectedPublication && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPublication(null)}
        >
          <div
            className="bg-white rounded-xl p-6 max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-4">{selectedPublication.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPublication.description}</p>
            <div className="flex justify-end">
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setSelectedPublication(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Publications;
