//rfc
import React from "react";
import { Link } from "react-router-dom";

// import '../css/miuul.css'
 import image1 from "../img/5.png";
 import image2 from "../img/6.png";
 import image3 from "../img/dünya.png";
 import image4 from "../img/function.png";
 import image5 from "../img/style.png";
 import image6 from "../img/Transition.png";


// EXPORT
export default function MiuulMain() {
  return (
    // <div className="w-75" style={{ marginTop: "200px" }}>
    //   <Link to="/miuul/spa/list">
    //     <img src={myViewPicture} className="w-75" />
    //   </Link> 
    //   </div>

      <>
  {/* header start */}
  <header id="miuul_header_id">
    {/* <img src="" alt="miuul picture isn't show" /> */}
    <h1 id="miuul_header_heading_id">Miuul Frontend Eğitimine Hoşgeldiniz</h1>
    <p id="miuul_header_parag_id">Html5, Css3, Js, Bootstrap, Tailwind, Node</p>
    <a href="#" id="miuul_linkedin_id" className="miuul_header_icon">
      <i className="fa-brands fa-linkedin" />
    </a>
    <a href="#" id="miuul_youtube_id" className="miuul_header_icon">
      <i className="fa-brands fa-youtube" />
    </a>
    <a href="#" id="miuul_github_id" className="miuul_header_icon">
      <i className="fa-brands fa-github" />
    </a>
  </header>
  {/* header end */}
  {/* main start */}
  <main>
    {/* About Start */}
    <section id="section_about_me_id">
      <h2 className="section_h2_id text-center text-capitalize mb-4">
        About Me
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img src={image1} alt="" srcSet="" />
          </div>
          <div className="col-6">
            <h2 className="text-center display-4 text-black">About </h2>
            <p className="miuul_line_clamp15  text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ut
              repudiandae harum quo numquam laboriosam? Ex alias, quam omnis
              illum eum quasi rerum eos architecto repellendus ab amet tenetur
              iusto! Iure, ipsum non? Quisquam, tempore. Nisi, necessitatibus
              inventore soluta corporis architecto voluptatum. Magnam, corrupti
              dicta doloribus, saepe porro nostrum sapiente nulla quaerat sint
              omnis, dolorem laudantium amet possimus quos exercitationem?
              Explicabo ipsum et incidunt id odio ipsa soluta nisi rem,
              voluptatum non ratione temporibus consequatur modi officia.
              Inventore beatae consequatur rem accusamus, nobis sapiente
              commodi, a autem, porro praesentium tempore. Obcaecati beatae
              corporis expedita hic recusandae, ex earum dolorem, laborum
              voluptate doloribus cumque vitae optio deleniti fugit quaerat? In
              facilis incidunt rem aliquid numquam nihil repellat ex nemo
              laboriosam doloremque.
            </p>
          </div>
        </div>
      </div>
    </section>
    {/* About End */}
    {/* Blog Start */}
    <section id="section_blog_id">
      <h2 className="section_h2_id text-center text-capitalize mb-4">Blog</h2>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <img className="card-img-top"  src={image2}  alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={image3} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={image4} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img
                className="card-img-top"
                src={image2}
                alt="Title"
              />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={image6} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={image3} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={image3} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={image4} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div className="card">
              <img className="card-img-top" src={image1} alt="Title" />
              <div className="card-body">
                <h4 className="card-title">Blog-1</h4>
                <p className="card-text miuul_line_clamp5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptate quas quae cupiditate. Vitae id sit non velit
                  necessitatibus laudantium esse, consectetur maiores incidunt
                  veritatis! Laboriosam ad minima similique ratione voluptatum.
                  Eveniet nisi ab fugiat earum perspiciatis vel repudiandae
                  beatae aliquid praesentium ex tenetur a aliquam, in numquam
                  excepturi quaerat assumenda, molestias esse nesciunt dolor
                  odio libero at! Tempore, a id?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Blog End */}
    {/* Contact Start */}
    <section id="section_contact_id">
      <h2 className="section_h2_id text-center text-capitalize mb-4">
        Contact
      </h2>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  width="100%"
                  frameBorder={0}
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://maps.google.com/maps?width=977&height=686&hl=en&q=istanbul&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                />
                <a href="https://connectionsgame.org/">Connections Puzzle</a>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html:
                    ".mapouter{position:relative;text-align:right;width:100%;height:686px;}.gmap_canvas {overflow:hidden;background:none!important;width:100%;height:686px;}.gmap_iframe {height:686px!important;}"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Contact End */}
  </main>
  {/* main end */}
  {/* back to top start */}
  <a href="#miuul_header_id" id="miuul_back_to_top_id">
    <i className="fa-solid fa-arrow-up" />
  </a>
  {/* back to top start */}
</>

    
  );
}
