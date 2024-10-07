import React from 'react'
import { ProgressCircular } from './progress'

function Main() {
    const skills = [
        {
            percent: 90,
            title: "React"
        },
        {
            percent: 90,
            title: "Next.js"
        },
        {
            percent: 90,
            title: "Redux"
        },
        {
            percent: 80,
            title: "JQuery"
        },
        {
            percent: 90,
            title: "Javascript"
        },
        {
            percent: 85,
            title: "Typescript"
        },
        {
            percent: 90,
            title: "Tailwind"
        },
        {
            percent: 70,
            title: "Bootstrap"
        },
        {
            percent: 70,
            title: "Node.js"
        },
        {
            percent: 85,
            title: "Docker"
        },
        {
            percent: 70,
            title: "Mongo"
        },
        {
            percent: 75,
            title: "git"
        }
    ]
    return (
        <section className="fcc flex flex-col mb-10 px-5">
            <div className='fcc flex-col mb-8'>
                <h2 className="text-2xl font-bold mb-4 text-primary">skills</h2>
                <p className="text-center font-light text-lg">
                    I am a proficient web developer with a strong foundation in various programming languages ​​and technologies.
                    <br />
                    My expertise includes:
                </p>
            </div>
            <div className='flex gap-x-10 gap-y-14 flex-wrap max-w-7xl justify-center'>
                {skills.map((items, index) => (
                    <ProgressCircular key={index} percent={items.percent} title={items.title} />
                ))}
            </div>
        </section>
    )
}

export default Main