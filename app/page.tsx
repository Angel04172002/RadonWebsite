import './Home.css';

export default function Page() {

  return (

    <div className='container mt-5'>


      <div className='row'>

        <div className='col-md-7'>

          <h1 className='display-4 home-title'>Интелигентни монитори за качество на въздуха и пречистватели, на които можете да се доверите</h1>
          <p className='display-6 home-paragraph'>Променете състоянието си на съществуване с Airthings. Нашите продукти могат да ви помогнат да подобрите качеството на въздуха в помещението, което води до по-добър фокус, успокояване на алергиите и подобряване на съня, като същевременно осигуряват цялостно по-здравословен дом.</p>

        </div>

        <div className='col-md-5'>

          <img className='animate-image-home' width={'50%'} src="https://cdn.britannica.com/14/22314-050-04B2DD0D/element-radon-symbol-square-Rn-properties-some.jpg" alt="Image" />

        </div>
        

      </div>


    </div>
  )
}
