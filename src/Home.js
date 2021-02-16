import React, { Fragment, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import { Container } from 'reactstrap';
import {Tye} from './assets/Tye.JPG'



function Home() {

    const [splitContainer, setSplitContainer] = useState("split-container")
    
    return (
        <Container className="home-body" fluid="true" >
            <div className={splitContainer} >
                <div className="split left" onMouseEnter={() => setSplitContainer('hover-left')} onMouseLeave={() => setSplitContainer('split-container')} >
                    <h1 className="h1-home">Work</h1>
                </div>
                <div className="split right" onMouseEnter={() => setSplitContainer('hover-right')} onMouseLeave={() => setSplitContainer('split-container')}>
                    <h1 className="h1-home">Play</h1>
                    <div class="container">
        <div class="row">
          <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="our-team">
              <div class="picture">
                <img class="img-fluid" src="src/assets/Tye.JPG" />
              </div>
              <div class="team-content">
                <h3 class="name">Tye Hadfield</h3>
                <h4 class="title">Web Developer</h4>
              </div>
              <ul class="social">
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-facebook" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-twitter" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-google-plus" aria-hidden="true"></a></li>
                <li><a href="https://codepen.io/collection/XdWJOQ/" class="fa fa-linkedin" aria-hidden="true"></a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>
                    
                </div>
            </div>
        </Container>
    )
} 

export default Home


