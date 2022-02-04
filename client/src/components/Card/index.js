function Card(props) {
    return (
      <div className="card col-md-5 col-sm-12 ms-4 mb-5 border border-2 border-dark">
          <div className="img-container">
              <img alt={props.name} src={props.image} />
          </div>
          <div className="card-body">
              <h5 className='card-title'>
                  {props.name}
              </h5>
              <h6 className='card-text'>
                  {props.description}
              </h6>
          </div>
      </div>
    );
  }
  
  export default Card;