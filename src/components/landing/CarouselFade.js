import Carousel from 'react-bootstrap/Carousel';

function CarouselFade(props) {
  const items = props.items;

  const startIndex = items.indexOf(
    items.find((item) => item.id === props.startId)
  );

  const reorderItems = items
    .slice(startIndex)
    .concat(items.slice(0, startIndex));

  return (
    <Carousel fade interval={null}>
      {reorderItems.map((item) => (
        <Carousel.Item key={item.id}>
          <img
            className="m-auto d-block w-100"
            src={item.img}
            alt={item.titleZh}
          />
          <Carousel.Caption>
            <span className="fs-5 fw-medium me-2">{item.titleZh}</span>
            <span className="ff-girassol">{item.titleEn}</span>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFade;
