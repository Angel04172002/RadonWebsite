import Link from 'next/link';
// import './Resources.css';
import '../../public/info-page.css'

export default function Resources() {

    return (

        <div className='container mt-5'>

            <div className='main-container row'>

                <div className='col-md-6'>
                    <h1 className='display-4 main-title-page'>Качество на въздуха</h1>
                    <p className="display-6 paragraph-page">Дишането на здравословен въздух е жизненоважно за вашето здраве и благополучие. Научете как да следите замърсителите в дома си и да намалите риска от излагане.</p>

                </div>

                <div className='inner-container col-md-5'>

                    <Link className="nav-link navbtn" href="/what-is-radon">
                        <img className="hover-image" src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/radon-sensor-icon-with-text.png" data-src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/radon-sensor-icon-with-text.png" alt="radon-sensor-icon-with-text" />
                    </Link>


                    <Link className='nav-link navbtn' href="/what-is-particulate-matter">
                        <img class="hover-image" src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/PM-sensor-icon-with-text-atmosphere.png" data-src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/PM-sensor-icon-with-text-atmosphere.png" alt="PM-sensor-icon-with-text-atmosphere"></img>
                    </Link>

                    <Link className='nav-link navbtn' href="/what-is-carbon-dioxide">

                        <img class="hover-image" src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/co2-sensor-icon-with-text.png" data-src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/co2-sensor-icon-with-text.png" alt="co2-sensor-icon-with-text"></img>
                    </Link>



                    <Link className="nav-link navbtn" href="/what-is-mold">
                        <img className="hover-image" src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/mold-sensor-icon-with-text.png" data-src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/mold-sensor-icon-with-text.png" alt="mold-sensor-icon-with-text" />
                    </Link>


                    <Link className='nav-link navbtn' href="/what-is-humidity">
                        <img className="hover-image" src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/humidity-sensor-icon-with-text.png" data-src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/humidity-sensor-icon-with-text.png" alt="humidity-sensor-icon-with-text" />
                    </Link>

                    <Link className='nav-link navbtn' href="/what-is-voc">

                        <img className="hover-image" src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/Airthings-Sensor-EN-US-VOC-Atmosphere_web.png" data-src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/Airthings-Sensor-EN-US-VOC-Atmosphere_web.png" alt="Airthings-Sensor-EN-US-VOC-Atmosphere_web" />

                    </Link>


                    <Link className='nav-link navbtn' href="/what-is-pollen">

                        <img className="hover-image" src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/pollen-sensor-icon-with-text-Atmosphere.png" data-src="https://4406702.fs1.hubspotusercontent-na1.net/hubfs/4406702/Website/Images/icons/sensors/with-text/blue/pollen-sensor-icon-with-text-Atmosphere.png" alt="pollen-sensor-icon-with-text-Atmosphere" />

                    </Link>


                </div>

            </div>            

        </div>
    )

}