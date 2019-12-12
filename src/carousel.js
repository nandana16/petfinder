import React from "react";

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  };
  //   constructor(props){
  //       super(props);
  //       this.handleIndexClick=this.handleIndexClick.bind(this);
  //   }
  static getDerivedStateFromProps({ media }) {
    let photos = [];
    if (media && media.photos && media.photos.photo) {
      photos = media.photos.photo.filter((photo) => photo["@size"] === "pn");
    }
    return { photos };
  }
  handleIndexClick = (event) => {
    this.setState({
      active: +event.target.dataset.index
    });
  };
  render() {
    const { photos, active, value } = this.state;
    return (
      <div className="Carousel">
        <img src={photos[active].value} alt="primary animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            /* eslint-disable-next-line*/
            <img
              onClick={this.handleIndexClick}
              key={photo.value}
              data-index={index}
              src={(photo, value)}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}
// Carousel.getDerivedStateFromProp
// Carousel.render
// const c=new Carousel
// c.render

export default Carousel;
