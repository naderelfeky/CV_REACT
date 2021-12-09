export default function Body(){
return(
    <main>

        <section className="left">
            <div className="left-image">
                <img src="https://i0.wp.com/www.almnsa.com/wp-content/uploads/2021/05/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%A8%D8%B1%D9%88%D9%81%D8%A7%D9%8A%D9%84-%D8%AC%D8%AF%D9%8A%D8%AF%D8%A9-20216.jpeg"/>
                <h2> Nader Elfeky</h2>
            </div>



            <div className="personal">
                <ul>
                    <li><i className="fas fa-briefcase"></i>SoftWare Engineering</li>
                    <li><i className="fas fa-street-view"></i>London, UK</li>
                    <li><i className="fas fa-envelope"></i>Mahmoudshetawy231@gmail.com</li>
                    <li><i className="fas fa-phone"></i>01029085024</li>
                </ul>
                <hr/>
            </div>



            <div className="skilles">
                <h3><i className="fas fa-cog"></i>Skills</h3>
                <ul>
                    <li>
                        <p>Object-Oriented Programming</p>
                        <progress className="progress" max="100" value="90"></progress>
                    </li>
                    <li>
                        <p>Html-Css</p>
                        <progress className="progress" max="100" value="70"></progress>
                    </li>
                    <li>
                        <p>Algorithms</p>
                        <progress className="progress" max="100" value="50"></progress>
                    </li>
                    <li>
                        <p>Problem Solving </p>
                        <progress className="progress" max="100" value="30"></progress>


                    </li>
                </ul>
            </div>




            <div className="languages">
                <h3><i className="fas fa-language"></i>languages</h3>
                <ul>
                    <li>
                        <p>English</p>
                        <progress className="progress" max="100" value="70">70%</progress>
                    </li>
                    <li>
                        <p>Spanish</p>
                        <progress className="progress" max="100" value="90">90%</progress>
                    </li>
                    <li>
                        <p>German</p>
                        <progress className="progress" max="100" value="50">50%</progress>
                    </li>
                </ul>
            </div>



        </section>




        <section className="right">

            <div className="experiencel">
                <h1><i className="fas fa-briefcase"></i>Work experiences </h1>



                <ul>

                    <li>Front End Developer</li>
                    <li className="data"><i className="fas fa-calendar "></i>Jan 2021 -
                        <span className="current">current</span>
                    </li>

                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat non nam consectetur deleniti
                        hic maiores doloribus molestias enim animi cum. Ipsam quo minima ea officiis. Veritatis nisi
                        inventore hic et?
                    </li>
                </ul>

                <hr/>

                <ul>
                    <li>Web Developer</li>
                    <li className="data"><i className="fas fa-calendar "></i>Jan 2021 -
                        <span className="current">current</span>
                    </li>
                    <li>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente ea, assumenda
                        facilis modi cum animi, rerum ex reiciendis nobis saepe, iusto aspernatur commodi veniam
                        quisquam in ducimus unde porro.
                    </li>
                </ul>


                <hr/>

                <ul>
                    <li> Developer</li>
                    <li className="data"><i className="fas fa-calendar "></i>Jan 2021 -
                        <span className="current">current</span>
                    </li>
                    <li>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit maxime vero error a cumque.
                        Labore officiis pariatur voluptates, cumque, quia quis id rerum vitae, similique ad
                        necessitatibus placeat ipsa aut.
                    </li>
                </ul>




            </div>


            <div className="education">

                <h1><i className="fas fa-university"></i>Education</h1>

                <ul>
                    <li>Computer and information </li>
                    <li className="data"><i className="fas fa-calendar "></i>Jan - 2021
                    </li>
                    <li>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit . Eveniet possimus veritatis
                        voluptatibus
                    </li>
                </ul>

                <hr/>


                <ul>
                    <li> Minufiya University </li>
                    <li className="data"><i className="fas fa-calendar "></i>Jan - 2021
                    </li>
                    <li>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit . Eveniet possimus veritatis
                        voluptatibus
                    </li>
                </ul>


                <hr/>

                <ul>
                    <li>Design course </li>
                    <li className="data"><i className="fas fa-calendar "></i>Jan -2021

                    </li>

                    <li>
                        Lorem ipsum, dolor sit amet consectetur
                        adipisicing elit . Eveniet possimus veritatis
                        voluptatibus
                    </li>
                </ul>

            </div>

        </section>

    </main>
    );
}