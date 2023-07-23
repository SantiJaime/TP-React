import React, { useEffect } from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Ej13 = () => {
  const [country, setCountry] = useState("AR");
  const [city, setCity] = useState("San Miguel de Tucumán");
  const [error, setError] = useState(false);
  const [weather, setWeather] = useState({});

  const getWeather = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=7c335b0c2600bd8036959eec6e72259a&units=metric`
      );
      const data = await response.json();

      if (response.status === 200) setWeather(data);
      else setError(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getWeather();
  }, [getWeather]);

  const [formValues, setFormValues] = useState({
    country: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };
  const handleClick = () => {
    const { city, country } = formValues;

    setCountry(country.toUpperCase());
    setCity(city);
  };
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Form className="w-75 my-5 bg-gradient bg-black p-4 text-white rounded-4">
          <Form.Group className="mb-3" controlId="countryId">
            <Form.Label>Ingrese el país</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="Ejemplo: AR | BR | ES"
              name="country"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="cityId">
            <Form.Label>Ingrese la ciudad</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              placeholder="Ejemplo: San Miguel de Tucumán | Madrid | Roma"
              name="city"
            />
          </Form.Group>
          <div className="text-end">
            <Button variant="light" onClick={handleClick}>
              Submit
            </Button>
          </div>
        </Form>
      </Container>
      <Container>
        <hr />
        {error ? (
          <h4 className="text-center">
            El pais y/o ciudad ingresados son incorrectos
          </h4>
        ) : (
          <div className="d-flex justify-content-center">
            <Card style={{ width: "20rem" }}>
              <Card.Body>
                {weather.weather ? (
                  <img
                    src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    className="w-25"
                  />
                ) : (
                  ""
                )}
                <Card.Title className="text-center">
                  {country} | {city}{" "}
                </Card.Title>
                <Card.Text>
                  <li>Temperatura: {weather.main?.temp} ºC</li>
                  <li>Sensación térmica: {weather.main?.feels_like} ºC</li>
                  <li>Humedad: {weather.main?.humidity}%</li>
                  <li>
                    Clima: {weather.weather ? weather.weather[0].main : ""} |{" "}
                    {weather.weather ? weather.weather[0].description : ""}
                  </li>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        )}
      </Container>
    </>
  );
};

export default Ej13;
