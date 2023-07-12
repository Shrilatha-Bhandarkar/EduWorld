import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
const Course=()=>{
    return(
      <>
        <dic class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="card">
                    <img  src="https://img.freepik.com/free-icon/css_318-698167.jpg "
                    alt="loading..."
                    height="250px"
                    width="250px"
                    />
                    <div class="card-body">
                        <h1 class="card-header">CSS</h1>
                        <p class="card-text"></p>
                          <p class="card-text">CSS is the acronym of “Cascading Style Sheets”. 
                          CSS is a computer language for laying out and structuring web pages (HTML or XML) language for laying out and. 
                           </p>
                           <button 
                          class="btn btn-danger"
                          data-bs-toggle="collapse"
                          data-bs-target="#first"
                            >Read more</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                <div class="card">
                    <img  src="https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png "
                    alt="loading..."
                    height="250px"
                    width="350px"
                    />
                    <div class="card-body">
                        <h1 class="card-header">JAVA</h1>
                        <p class="card-text"></p>
                          <p class="card-text">Java is a high-level, class-based,
                           object-oriented programming language that is designed to have as few implementation dependencies as 
                           possible. 
                           </p>
                           <button 
                          class="btn btn-danger"
                          data-bs-toggle="collapse"
                          data-bs-target="#first"
                            >Read more</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                <div class="card">
                    <img  src="https://static.vecteezy.com/system/resources/previews/006/020/770/original/brain-tech-mind-data-logo-free-vector.jpg "
                    alt="loading..."
                    height="250px"
                    width="250px"
                    />
                    <div class="card-body">
                        <h1 class="card-header">Data science</h1>
                        <p class="card-text"></p>
                          <p class="card-text">A data scientistis a professional who creates programming code and combines it with
                           statistical knowledge to create insights from data
                           </p>
                           <button 
                          class="btn btn-danger"
                          data-bs-toggle="collapse"
                          data-bs-target="#first"
                            >Read more</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                <div class="card">
                    <img  src="https://png.pngtree.com/png-vector/20190615/ourmid/pngtree-learningmachinemachine-learningscience-blue-icon-on-abstra-png-image_1487001.jpg "
                    alt="loading..."
                    height="250px"
                    width="250px"
                    />
                    <div class="card-body">
                        <h1 class="card-header">AIML</h1>
                        <p class="card-text"></p>
                          <p class="card-text">Machine learning is a branch of artificial intelligence (AI) 
                           which focuses on the use of data and algorithms to imitate the way that humans
                           learn, gradually improving its accuracy
                           </p>
                           <button 
                          class="btn btn-danger"
                          data-bs-toggle="collapse"
                          data-bs-target="#first"
                            >Read more</button>
                        </div>
                    </div>
                </div>
            </div>
    </dic>
        <div class="row">
            
            </div>
      </>
    )
}

export default Course;