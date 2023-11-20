export interface QuestionQuiz {
  title: string
  description: string
  hour: string;
  questions: Question[]
  results: Results
  image: string
}

export interface Question {
  id: number
  question: string
  options: Option[]
}

export interface Option {
  id: number
  name: string
  alias: string
}

export interface Results {
  A: string
  B: string
  C?: string
  D?: string
}
