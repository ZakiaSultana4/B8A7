<ul>
<li><h1 className="text-2xl">Feature--1 : </h1></li><br>
</ul>
<img src="Rectangle 2-2.png">
<ul>

<li>Course Name: Introduction to C Programming.</li><br>
<li>Course details: C programming is Called the Mother of all Programming Language.You have to learn c programming language if you will be a good programmer.You will learn from us how c programming works from basic to advance.This course will be taken by Rahat Khan Pathan.He is a Software Engineer and he Crack the Microsoft in 2020.</li><br><br>
</ul>
<hr>

<ul>
<li ><h1 className="text-2xl">Feature--2 : </h1> </li><br>
</ul>

<img src="Rectangle 2.png">
<ul>
<li>Course Name: Introduction to OOP Python.<br></li>
<li>Course details:In Python, object-oriented Programming (OOPs) is a programming paradigm that uses objects and classes in programming.It is the most popular programming language in the world.This course will be taken by Jhankar sir.He is the SEO of Programmin Hero and Phitron.</li><br>
</ul>
<hr>
<ul>
<li ><h1 className="text-2xl">Feature--3 : </h1> </li><br>
</ul>

<img src="Rectangle 2-3.png">
<ul>
<li>Course Name: Introduction to OOP Python.<br></li>
<li>Course details:Algorithms are widely used throughout all areas of IT. In mathematics, computer programming and computer science, an algorithm usually refers to a small procedure that solves a recurrent problem.This course will be taken my Shahad sir .He is a Software Engineer and a university Teacher</li><br>
</ul>
<hr>

<p> Here I Discuss how I managed the state in my assignment project .</p>
<p>In order to implement state in my components, React provides with a hook called useState. </p>
<h1>How i manage The useState Hook:<h1><br>
<ul>
<li>First i import the hook from React: import { useState } from 'react' </li>
<li><p>Then i initialize the state:</p><br>  
  <p>const [courses, setCourses] = useState([])</p><br>
 <p> const [selectCourses, setSelectCourses] = useState([])</p><br>
 <p> const [cost, setcost] = useState(0)</p><br>
  <p> const [price, setprice] = useState(0)</p><br>
  </li>
</ul><br>
<p>In First Example,Here i provide a variable name for the state (courses) and a function name i'll use every time i need to update that state (setCourses). Last, i set the initial value of the state ([]), which will be the value loaded by default every time the app starts.</p><br>
<p>In Second Example,Here i provide a variable name for the state (selectCourses) and a function name i'll use every time i need to update that state (setSelectCourses). Last, i set the initial value of the state ([]), which will be the value loaded by default every time the app starts.</p><br>
<p>In thurd Example,Here i provide a variable name for the state (cost) and a function name i'll use every time i need to update that state (setcost). Last, i set the initial value of the state (0), which will be the value loaded by default every time the app starts.</p><br>
<p>In fourth Example,Here i provide a variable name for the state (price) and a function name i'll use every time i need to update that state (setprice). Last, i set the initial value of the state (0), which will be the value loaded by default every time the app starts.</p><br>
<p>Lastly, as mentioned above, every time i want to update the state i have to use the function i declared:setCourses To use it, i  need to call it passing it the new state i want as a parameter. That is, if i want to add 1 to the previous estate, i call setCourses([]). </p>
 
 <h1>How i manage The useEffect Hook:<h1><br>
<p>To manage The useEffect Hook ,At first i decleared the useEffect hook.Then React import the  useEffect hook from React
.Then i load data from data.json by using useEffect hook.<p><br>
<h3>The useEffect hook takes two arguments. <h3>
<p>useEffect(callback, [dependencies]); </p>
<ol>
<li>A callback function to define and clean up a side effect.</li>

<li>An optional dependency array that ensures when to run a side effect defined inside the callback function</li>

</ol>
<p>The callback function i pass to the useEffect hook runs the side effects. React runs it on every render of a component by default. However, side effects can be expensive and performance-intensive to run on every render. i can control it using the dependency array argument we pass to the useEffect hook.</p>