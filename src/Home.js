import React, {  useState } from 'react';
import { Container,Row} from 'reactstrap';
import Tye from './assets/Tye.JPG'



function Home() {

 

    const [splitContainer, setSplitContainer] = useState("")
    const [displayContent, setDisplayContent] = useState("")
    const [displayContentReverse, setDisplayContentReverse] = useState("")


    const getCountTimeout = () => {
        setDisplayContent("take")
        setTimeout(() => {
            console.log("test")
            setDisplayContent("display-none");
        },1000);
      };

    


    

    
    //   ${splitContainer} - add to line 32 after done
    // ${displayContent} - add to line 40 after done


    return (
    <Container className="home-body" fluid="true" >
        <div className={` ${splitContainer}`} >
                <div  >
                    <div className="split left" onMouseEnter={() => setSplitContainer('hover-left')} onMouseLeave={() => setSplitContainer('split-container')} >
                        <h1 className="h1-home">Work</h1>

                        <Row className={`justify-content-center ${displayContentReverse} `}  >
                                    <div className="our-team" style={{width: "75vw", padding: "20px", margin: "20px", marginTop:"90px"}}>
                                    <div className="picture">
                                        <img className="img-fluid" src={Tye} />
                                    </div>
                                    <div className="team-content">
                                        <h2 className="name">Tye Hadfield</h2>
                                        <h3 className="title">Web Developer & Lover of life</h3>
                                        <h4 className="sub-title">Below is a little of my life!</h4>
                                    </div>
                                    </div>
                        </Row>
                    </div>
            <div onMouseEnter={() => setDisplayContent('bring-forward')}   onMouseLeave={getCountTimeout} >
                <div className="split right" onMouseEnter={() => setSplitContainer('hover-right')} onMouseLeave={() => setSplitContainer('split-container')}>
                         <h1 className="h1-home">About Me</h1>
                            
                                <div className="our-team" style={{width: "75vw", padding: "20px", margin: "20px", marginTop:"90px"}}>
                                <div className="picture">
                                    <img className="img-fluid" src={Tye} />
                                </div>
                                <div className="team-content">
                                    <h2 className="name">Tye Hadfield</h2>
                                    <h3 className="title">Web Developer & Lover of life</h3>
                                    <h4 className="sub-title">Below is a little of my life!</h4>
                                </div>
                                </div>
                         <Row className={`justify-content-center ${displayContent} `}  >
                            <Row style={{marginTop: "40px"}}>
                                <div className="masonry">
                                    <div className="grid">
                                        <img src="https://source.unsplash.com/random/1" />
                                        <div className="grid__body">
                                        <div className="relative">
                                            <a className="grid__link" target="_blank" href="/" ></a>
                                            <h1 className="grid__title">Title 1</h1>
                                            <p className="grid__author">Mario Rossi</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <img src="https://source.unsplash.com/random/2" />
                                        <div className="grid__body">
                                        <div className="relative">
                                            <a className="grid__link" target="_blank" href="/" ></a>
                                            <h1 className="grid__title">Title 1</h1>
                                            <p className="grid__author">Mario Rossi</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <img src="https://source.unsplash.com/random/3" />
                                        <div className="grid__body">
                                        <div className="relative">
                                            <a className="grid__link" target="_blank" href="/" ></a>
                                            <h1 className="grid__title">Title 1</h1>
                                            <p className="grid__author">Mario Rossi</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <img src="https://source.unsplash.com/random/4" />
                                        <div className="grid__body">
                                        <div className="relative">
                                            <a className="grid__link" target="_blank" href="/" ></a>
                                            <h1 className="grid__title">Title 1</h1>
                                            <p className="grid__author">Mario Rossi</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <img src="https://source.unsplash.com/random/5" />
                                        <div className="grid__body">
                                        <div className="relative">
                                            <a className="grid__link" target="_blank" href="/" ></a>
                                            <h1 className="grid__title">Title 1</h1>
                                            <p className="grid__author">Mario Rossi</p>
                                        </div>
                                        </div>
                                    </div>
                                    <div className="grid">
                                        <img src="https://source.unsplash.com/random/6" />
                                        <div className="grid__body">
                                        <div className="relative">
                                            <a className="grid__link" target="_blank" href="/" ></a>
                                            <h1 className="grid__title">Title 1</h1>
                                            <p className="grid__author">Mario Rossi</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </Row>
                        </Row>
                    </div>
                </div>
            </div>
        </div>
    </Container>
    )
} 

export default Home




{/* <Row className={`justify-content-center ${displayContent} `} style={{marginTop: "100px"}} >
    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
        <div className="our-team">
        <div className="picture">
            <img className="img-fluid" src={Tye} />
        </div>
        <div className="team-content">
            <h3 className="name">Tye Hadfield</h3>
            <h4 className="title">Web Developer</h4>
        </div>
        </div>
    </div>
</Row> */}