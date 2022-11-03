import './Homepage.css';

function Homepage(props){
  const img= '../Assets/Image/';

  return(
    <div>
    <h1>
    Welcome to BabaKings
    </h1>
      <p>
    Babakings is all about bringing you those little
     things which really matters at the same time fun and informative.
    </p>

    <div className="homepage">
    <div>

    <h2>
      Survey
    </h2>

    <img src={img+props.surveyimg} alt={props.surveyalt}/>

    <p>
    Surveys is all about answering questions about a product, service or anything
    as honestly as possible. These are just basic things based on your experience
    and you do not even need to think before answering them.
    </p>
    </div>

    <div>
    <h2>
  Cryptocurrency
    </h2>

    <img src={img+props.cryptoimg} alt={props.cryptoalt}/>

      <p>
      <br/>
      <br/>
      <br/>
    I normally break this down into Crypto to mean encrypted, well secured and so on then currency
    meaning currency offcourse. So, it means currency well secured. This here is really not about
    teaching this topic but to give insight about earning a little from Cryptocurrency
     without any prior knowledge.
    </p>
    </div>

    <div>
    <h2>
    Games
    </h2>

    <img src={img+props.gamesimg} alt={props.gamesalt}/>

    <p>
    <br/>
    <br/>
    <br/>
    There are games that pays when you play. Here is to show you about those ones that pays
     some little amount with little effort and having fun at the same time.
    </p>
    </div>

      </div>
    </div>
  )
}

export default Homepage;
