export type Project = {
  slug: string;
  number: string;
  category: string;
  title: string;
  description: string;

  result: string;
  resultLabel: string;

  stack: string[];

  featured?: boolean;

  overview: string;
  role: string;
  focus: string;
  timeline: string;

  challenge: string;
  approach: string[];

  outcome: string;

  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "mental-health",
    number: "01",
    category: "MACHINE LEARNING · TIME SERIES",
    title: "Mental Health Predictive Analysis",

    description:
      "Comparative machine learning and deep learning study for predicting student stress and psychological well-being from longitudinal passive sensing data.",

    result: "0.86",
    resultLabel: "F1 SCORE",

    stack: [
      "Python",
      "Pandas",
      "Scikit-Learn",
      "XGBoost",
      "LSTM",
      "GRU",
    ],

    featured: true,

    overview:
      "A comparative predictive modeling study focused on identifying patterns in longitudinal passive sensing data and evaluating multiple machine learning approaches.",

    role:
      "Data preparation, exploratory analysis, feature engineering, model development, evaluation, and experiment comparison.",

    focus:
      "Time-series prediction",

    timeline:
      "Research project",

    challenge:
      "The main challenge was working with longitudinal behavioral data where patterns can change over time. The system needed to preserve temporal information while still allowing different model families to be compared fairly.",

    approach: [
      "Cleaned and explored longitudinal sensing data.",
      "Designed features representing behavioral and temporal patterns.",
      "Compared classical machine learning models with recurrent neural networks.",
      "Evaluated models using consistent validation and performance metrics.",
    ],

    outcome:
      "The final experiments reached an F1 score of 0.86, providing a strong baseline for further experimentation with temporal modeling.",
  },

  {
    slug: "visual-speech",
    number: "02",
    category: "COMPUTER VISION · DEEP LEARNING",
    title: "Indonesian Visual Speech Recognition",

    description:
      "End-to-end visual speech recognition system using a hybrid ResNet50V2 + BiGRU architecture.",

    result: "95.49%",
    resultLabel: "ACCURACY",

    stack: [
      "PyTorch",
      "ResNet50V2",
      "BiGRU",
      "Computer Vision",
    ],

    featured: true,

    overview:
      "An end-to-end visual speech recognition system that learns speech information from sequences of facial and mouth-region images.",

    role:
      "Dataset preparation, image preprocessing, model architecture design, training, evaluation, and experiment analysis.",

    focus:
      "Visual sequence modeling",

    timeline:
      "Deep learning project",

    challenge:
      "Visual speech recognition requires understanding both spatial information from individual frames and temporal relationships between consecutive frames.",

    approach: [
      "Prepared and normalized visual speech sequences.",
      "Used ResNet50V2 to extract spatial visual representations.",
      "Passed frame-level representations into a BiGRU for temporal modeling.",
      "Evaluated the final model using classification accuracy and validation performance.",
    ],

    outcome:
      "The hybrid architecture achieved 95.49% accuracy on the evaluated dataset.",
  },

  {
    slug: "birdclef",
    number: "03",
    category: "AUDIO CLASSIFICATION · DEEP LEARNING",
    title: "BirdCLEF 2026",

    description:
      "Wildlife audio classification pipeline using passive acoustic monitoring, augmentation, Mel-Spectrograms, CNNs, and temporal modeling.",

    result: "0.78145",
    resultLabel: "LEADERBOARD",

    stack: [
      "Python",
      "Librosa",
      "CNN",
      "RNN",
      "Audio Processing",
    ],

    featured: true,

    overview:
      "An audio classification pipeline designed to identify bird species from environmental recordings using spectrogram-based deep learning.",

    role:
      "Audio preprocessing, feature extraction, augmentation, model experimentation, and evaluation.",

    focus:
      "Bioacoustic classification",

    timeline:
      "Competition project",

    challenge:
      "Environmental recordings contain background noise, overlapping sounds, and varying recording conditions, making robust audio representation an important part of the pipeline.",

    approach: [
      "Processed raw environmental audio into model-ready segments.",
      "Applied augmentation to increase variation in training samples.",
      "Converted audio signals into Mel-Spectrogram representations.",
      "Experimented with convolutional and temporal architectures.",
    ],

    outcome:
      "The resulting pipeline achieved a 0.78145 leaderboard score.",
  },

  {
    slug: "hand-gesture",
    number: "04",
    category: "COMPUTER VISION",
    title: "Hand Gesture Recognition",

    description:
      "CNN-based image classification system for Rock-Paper-Scissors hand gestures.",

    result: "94%",
    resultLabel: "VALIDATION ACCURACY",

    stack: [
      "Python",
      "CNN",
      "Image Augmentation",
    ],

    overview:
      "A computer vision classification project that recognizes Rock-Paper-Scissors hand gestures from images.",

    role:
      "Dataset preparation, augmentation, CNN training, and validation.",

    focus:
      "Image classification",

    timeline:
      "Machine learning project",

    challenge:
      "The model needed to generalize across differences in hand position, scale, and image conditions.",

    approach: [
      "Prepared and normalized image data.",
      "Applied image augmentation to improve generalization.",
      "Trained a convolutional neural network.",
      "Evaluated model performance on validation data.",
    ],

    outcome:
      "The model achieved approximately 94% validation accuracy.",
  },

  {
    slug: "recommendation",
    number: "05",
    category: "MACHINE LEARNING",
    title: "Book Recommendation System",

    description:
      "Collaborative-filtering recommendation system based on user rating patterns.",

    result: "0.78",
    resultLabel: "RMSE",

    stack: [
      "Python",
      "Collaborative Filtering",
      "Scikit-Learn",
    ],

    overview:
      "A recommendation system that uses historical user-rating patterns to generate personalized book recommendations.",

    role:
      "Data preparation, recommendation logic, model development, and evaluation.",

    focus:
      "Recommendation systems",

    timeline:
      "Machine learning project",

    challenge:
      "The system needed to identify meaningful relationships between users and items from sparse rating data.",

    approach: [
      "Prepared user-item interaction data.",
      "Analyzed rating distributions and user behavior.",
      "Implemented collaborative filtering.",
      "Evaluated prediction quality using RMSE.",
    ],

    outcome:
      "The resulting system reached an RMSE of approximately 0.78.",
  },

  {
    slug: "article-management",
    number: "06",
    category: "SOFTWARE ENGINEERING",
    title: "Web Article Management System",

    description:
      "Multi-role article management platform developed by a 13-member agile team.",

    result: "4.25/5",
    resultLabel: "QUALITY SCORE",

    stack: [
      "Laravel",
      "Agile",
      "Kanban",
      "Authentication",
    ],

    overview:
      "A multi-role web application for managing article content through an agile development workflow.",

    role:
      "Software development within a 13-member agile team, including implementation, integration, and testing.",

    focus:
      "Web application engineering",

    timeline:
      "Team project",

    challenge:
      "The project required coordinating multiple contributors while maintaining consistent functionality across role-based workflows.",

    approach: [
      "Defined application roles and access boundaries.",
      "Implemented article management functionality.",
      "Used Laravel for backend application development.",
      "Worked through an agile Kanban-based development process.",
    ],

    outcome:
      "The project received a 4.25/5 quality evaluation.",
  },
];