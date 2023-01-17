import React from 'react';
import useTitle from '../../hooks/useTitle';
import './Blog.css';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='p-3 blogs'>
            <h2 className='my-3 fw-bold text-dark'>Requirement Question and Answer This Assignment</h2>
            <div className='blog'>
            <h4>What are the different ways to manage a state in a React application?</h4>
                <p>React is an amazing framework but far from perfect, and one of the areas where it falls short is state management.</p>
                <h6>1. Local State</h6>
                <h6>2. Hooks</h6>
                <h6>3. Lifted State</h6>
                <h6>4. React Context</h6>
                <h6>5. Global State libraries</h6>
                <h6>6. fetched data</h6>
            </div>
            <div className="blog">
                <h4>How does prototypical inheritance work?</h4>
                <p>You might not think this question applies to you, especially if you come from a classical background. But if you use objects, functions, or arrays, you're probably already using prototypes, and can benefit from learning the logic behind them. This course explores the mechanics of inheritance in JavaScript by showing how prototypes work as chained references to other objects. Learn to take full advantage of prototype shortcuts to make your work simpler and faster…and debug them if you hit a snag.</p>
            </div>
            <div className="blog">
                <h4>What is a unit test? Why should we write unit tests?</h4>
                <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important. In his book "Working Effectively with Legacy Code", author Michael Feathers states that such tests are not unit tests when they rely on external systems: “If it talks to the database, it talks across the network, it touches the file system, it requires system configuration, or it can't be run at the same time as any other test."Modern versions of unit testing can be found in frameworks like JUnit, or testing tools like TestComplete. Look a little further and you will find SUnit, the mother of all unit testing frameworks created by Kent Beck, and a reference in chapter 5 of The Art of Software Testing . Before that, it's mostly a mystery. I asked Jerry Weinberg about his experiences with unit testing -- "We did unit testing in 1956. As far as I knew, it was always done, as long as there were computers".</p>
            </div>
            <div className="blog">
                <h4>React vs. Angular vs. Vue?</h4>
                <p>Web developers are always at crossroads where they have to decide among a range of development frameworks and choose one for their project. It is a common topic of debate among developers on how to pick a framework for their next big project. Some frameworks which have become the most popular among developers and causing the dilemma are ReactJS, VueJS, and Angular. A simple difference between these three is that React is a UI library, and Vue is a progressive framework. However, Angular is a full-fledged front-end framework. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers. This guide focuses on helping you decide which framework to pick before starting your next project.</p>
            </div>
        </div>
    );
};

export default Blog;