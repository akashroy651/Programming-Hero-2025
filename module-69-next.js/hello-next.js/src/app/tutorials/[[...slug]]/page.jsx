import Title from '@/components/Title';
import React from 'react';

const TutorialPages = async ({ params }) => {
    // const {technology, topic, page_no,subject } = await params;
    // console.log(result)

const { slug } = await params;

const [ technology, topic, page_no,subject ] = slug || [];
// console.log(result)
console.log(slug)
    return (
        <div>
            This is tutorial page 
            <Title>{technology} tutorials</Title>
            <h2>{topic}</h2> <hr/>
            <div>
                <h3>{subject}</h3>
                <p> page no : {page_no}</p>
            </div>

        </div>
    );
};

export default TutorialPages;