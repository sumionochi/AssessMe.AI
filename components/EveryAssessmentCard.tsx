"use client"
import { api } from '@/convex/_generated/api';
import { useQuery } from 'convex/react';
import React from 'react'
import AssessmentDisplay from './AssessmentDisplay';

type Props = {}

const EveryAssessmentCard = (props: Props) => {
  const EveryAssessment = useQuery(api.assess.get);
  return (
    <>
    {EveryAssessment?.map((assessment) => (
        <AssessmentDisplay assessment={assessment} key={assessment._id} />
      ))}
    </>
  )
}

export default EveryAssessmentCard