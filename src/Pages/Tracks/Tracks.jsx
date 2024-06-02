import cybersecurityImg from "../../assets/cybersecurity.jpg";
import uiuxImg from "../../assets/uiux.jpg";
import webdevImg from "../../assets/webdev.jpg";
import madImg from "../../assets/mad.jpg";
import cloudImg from "../../assets/cloud.jpg";
import powerbiImg from "../../assets/powerbi.jpg";
import "./Tracks.css";

const Tracks = () => {
  return (
    <section className="tracks">
      <h2 className="tracks-section">Available Tracks</h2>
      <div className="track-container">
        <div className="tracks-container-items">
          <div className="para">
            <img src={cybersecurityImg} alt="cybersecurity image" />
          </div>
          <div className="para-text">
            <h3>Cybersecurity</h3>
            <p>
              Students who choose the Cyber Security track will delve into the
              critical aspects of protecting systems, networks, and data from
              cyber threats. Throughout this track, they will learn about
              various security protocols, ethical hacking, encryption
              techniques, and threat analysis. They will engage in hands-on
              projects and real-world scenarios to apply their knowledge in
              identifying and mitigating security vulnerabilities. By the end of
              the track, students will be equipped with the skills to safeguard
              digital environments, conduct security audits, and implement
              robust security measures to protect against cyber attacks.
            </p>
            <button type="button">Enroll Now</button>
          </div>
        </div>

        <div className="tracks-container-items">
          <div className="para-text">
            <h3>UI/UX Design</h3>
            <p>
              Students who enroll in the UI/UX Design track will explore the
              principles of creating user-friendly and visually appealing
              interfaces. They will learn about user research, wireframing,
              prototyping, and usability testing. Through practical projects and
              interactive workshops, students will gain hands-on experience in
              designing intuitive user interfaces and enhancing user
              experiences. By the end of the track, students will be proficient
              in using industry-standard design tools and techniques, enabling
              them to create effective, user-centric designs for websites and
              mobile applications.
            </p>
            <button type="button">Enroll Now</button>
          </div>
          <div className="para">
            <img src={uiuxImg} alt="cybersecurity image" />
          </div>
        </div>

        <div className="tracks-container-items">
          <div className="para">
            <img src={webdevImg} alt="cybersecurity image" />
          </div>
          <div className="para-text">
            <h3>Web Development</h3>
            <p>
              Students who pursue the Web Development track will gain
              comprehensive knowledge in building dynamic and responsive
              websites. They will learn the fundamentals of front-end
              development using HTML, CSS, and JavaScript, as well as back-end
              development with technologies such as Node.js, Express, and
              databases. Through hands-on projects and collaborative coding
              sessions, students will develop the skills to create both the
              client-side and server-side of web applications. By the end of the
              track, students will be capable of designing, developing, and
              deploying full-stack web applications, equipped with the expertise
              to build robust and scalable websites.
            </p>
            <button type="button">Enroll Now</button>
          </div>
        </div>

        <div className="tracks-container-items">
          <div className="para-text">
            <h3>Mobile Application Development</h3>
            <p>
              Students who opt for the Mobile Apps Development track will learn
              to design and build applications for mobile devices. They will
              explore the basics of mobile app development using platforms such
              as Android and iOS, gaining proficiency in languages like Java,
              Kotlin, Swift, and Dart. Through hands-on projects and interactive
              sessions, students will develop the skills to create user-friendly
              and efficient mobile applications. By the end of the track,
              students will be adept at building, testing, and deploying mobile
              apps, ready to deliver engaging and high-performance solutions for
              smartphones and tablets.
            </p>
            <button type="button">Enroll Now</button>
          </div>
          <div className="para">
            <img src={madImg} alt="cybersecurity image" />
          </div>
        </div>

        <div className="tracks-container-items">
          <div className="para">
            <img src={cloudImg} alt="cybersecurity image" />
          </div>
          <div className="para-text">
            <h3>Cloud Engineering</h3>
            <p>
              Students who choose the Cloud Engineering track will dive into the
              world of cloud computing and its applications. They will learn
              about various cloud service providers such as AWS, Google Cloud,
              and Microsoft Azure, and understand how to design, deploy, and
              manage scalable and secure cloud infrastructures. Through
              practical projects and hands-on labs, students will gain
              experience in cloud architecture, virtualization,
              containerization, and DevOps practices. By the end of the track,
              students will be capable of leveraging cloud technologies to build
              and maintain robust cloud-based solutions, ensuring high
              availability and performance for applications and services.
            </p>
            <button type="button">Enroll Now</button>
          </div>
        </div>

        <div className="tracks-container-items">
          <div className="para-text">
            <h3>Power</h3>
            <p>
              Students who select the Power Platform track will explore the
              capabilities of Microsoft's Power Platform, which includes Power
              BI, Power Apps, Power Automate, and Power Virtual Agents. They
              will learn how to create custom business applications, automate
              workflows, analyze data, and build chatbots with minimal coding.
              Through hands-on projects and interactive workshops, students will
              gain practical experience in leveraging these tools to enhance
              business processes and drive data-driven decision-making. By the
              end of the track, students will be proficient in developing
              integrated solutions using the Power Platform, enabling them to
              transform organizational operations and improve efficiency.
            </p>
            <button type="button">Enroll Now</button>
          </div>
          <div className="para">
            <img src={powerbiImg} alt="cybersecurity image" />
          </div>
        </div>
      </div>
      <div className="form-container">
        <h3 className="en">Enroll Now</h3>
        <form action="" className="form-content">
          <label htmlFor="fname">FullName</label>
          <br />
          <input type="text" id="fname" placeholder="fullname" />
          <br />
          <label htmlFor="email">Email Address</label>
          <br />
          <input type="text" id="email" placeholder="email address" />
          <br />
          <label htmlFor="courses">Current Course</label>
          <br />
          <select name="courses" id="courses">
            <option value="course">Software engineering</option>
            <option value="course">Computer science</option>
            <option value="course">Computer Technology</option>
            <option value="course">BBIT</option>
          </select>
          <br />
          <label htmlFor="yr">Year of Study</label>
          <br />
          <input type="text" id="yr" />
          <br />
          <label htmlFor="track">Tracks</label>
          <br />
          <select name="tracks" id="tracks">
            <option value="course">cybersecurity</option>
            <option value="course">UI/UX</option>
            <option value="course">Web development</option>
            <option value="course">Mobile development</option>
            <option value="course">Cloud engineering</option>
            <option value="course">Power</option>
          </select>
        </form>
      </div>
    </section>
  );
};
export default Tracks;
