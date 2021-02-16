<div onMouseEnter={() => setDisplayContent('bring-forward')}   onMouseLeave={getCountTimeout} >
<div className="split right" onMouseEnter={() => setSplitContainer('hover-right')} onMouseLeave={() => setSplitContainer('split-container')}>
         <h1 className="h1-home">About Me</h1>
         <Row className={`justify-content-center ${displayContent} `}  >

<div onMouseEnter={() => setDisplayContentReverse('bring-forward-reverse')}   onMouseLeave={getCountTimeoutReverse} >
<div className="split left" onMouseEnter={() => setSplitContainer('hover-left')} onMouseLeave={() => setSplitContainer('split-container')} >
        <h1 className="h1-home">Work</h1>
        <Row className={`justify-content-center ${displayContentReverse} `}  >