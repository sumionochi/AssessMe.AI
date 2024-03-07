import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export type Assess = {
  id: string;

  name: string;
  jobProfile: string;
  jobtype: string;
  companyName: string;
  jobRequirements: string;

  level: string;
  questions: string[];

  userId: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Automated_Assess = {
  id: string;

  name: string;
  jobProfile: string;
  jobtype: string;
  companyName: string;
  jobRequirements: string;

  level: string;
  questions: string[];

  userId: string;
  createdAt: Date;
  updatedAt: Date;
};



export type  Result ={
  id              :string
  name            :string
  jobProfile      :string
  jobtype         :string
  companyName     :string
  jobRequirements :string

  level     :string
  questions :Question[]

  overview  :string
  analytics :Analytics[]

  userId   :string
  createdAt :Date

  
}


export type Automated_Result= {
  id              :string
  name            :string
  jobProfile      :string
  jobtype         :string
  companyName     :string
  jobRequirements :string

  level     :string
  questions :Question[]

  overview  :string
  analytics :Analytics[]

  userId    :string
  createdAt :Date

}

export type Analytics= {
  id:string
  parameter:string
  points    :         Number
  maxPoints  :        Number
  result      :       Result        
  resultId     :      string
  automated_Result   : Automated_Result
  automated_ResultId: string
}

export type  Question= {
  id                 :string            
  question           :string
  answer             :string
  isAI               :Boolean
  strengths          :Strength[]
  improvements       :Improvement[]
  result             :Result           
  resultId           :string           
  automated_Result   :Automated_Result 
  automated_ResultId :string
}

export type Strength = {
  id              :string
  feedbackHeading :string
  feedback        :string

  question   :Question 
  questionId :string   
}

export type Improvement = {
  id              :string 
  feedbackHeading :string
  feedback        :string

  question   :Question 
  questionId :string    
}
