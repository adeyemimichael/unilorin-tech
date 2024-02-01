import 'animate.css';

const Animation = () => {
  return (
    <div>
      <div className="  text-center h-screen m-screen font-brico text-2xl mt-10  p-8"> 
        <h1 className=' animate__animated animate__bounceIn  font-brico text-[50px]  font-medium'>Animation</h1>
        <div className="wrapper">

<div className="container">
  <input type="radio" name="slide" id="c1 " checked></input>
  <label htmlFor="c1" className="card">
<div className="row">
<div className="icons">1</div>
<div className="description">
<h4>Winter</h4>
<p>Lorem ipsum dolor sit minima enim distinctio id quod quibusdam.</p>
</div>
</div>
  </label>
  <input type="radio" name="slide" id="c2"></input>
  <label htmlFor="c2" className="card">
<div className="row">
<div className="icons">2</div>
<div className="description">
<h4>Animals</h4>
<p>Lorem ipsum dolor sit minima enim distinctio id quod quibusdam.</p>
</div>
</div>
  </label>
  <input type="radio" name="slide" id="c3"></input>
  <label htmlFor="c3" className="card">
<div className="row">
<div className="icons">3</div>
<div className="description">
<h4>Globalization</h4>
<p>Lorem ipsum dolor sit minima enim distinctio id quod quibusdam.</p>
</div>
</div>
  </label>
  <input type="radio" name="slide" id="c4"  ></input>
  <label htmlFor="c4" className="card">
<div className="row">
<div className="icons">4</div>
<div className="description">
<h4>Digital Technology</h4>
<p>Lorem ipsum dolor sit minima enim distinctio id quod quibusdam.</p>
</div>
</div>
  </label>
</div>
</div>
</div>

    </div>
  )
}

export default Animation