import '../../public/info-page.css';
import './WhatIsRadon.css';

import { RadonAccordionItemOne } from './radon-accordion-items/RadonAccordionItems';
import { RadonAccordionItemTwo } from './radon-accordion-items/RadonAccordionItems';
import { RadonAccordionItemThree } from './radon-accordion-items/RadonAccordionItems';

import Accordion from '../ui/Accordion/Accordion';



const accordionItems = [

    {
        _id: '1',
        title: 'Здравни проблеми, свързани с радон: факти',
        content: RadonAccordionItemOne(),
        renderTimes: 'One'
    },
    {
        _id: '2',
        title: 'Откъде идва радонът?',
        content: RadonAccordionItemTwo(),
        renderTimes: 'Two'
    },
    {
        _id: '3',
        title: 'Радон, радиоактивност и ДНК',
        content: RadonAccordionItemThree(),
        renderTimes: 'Three'
    },
    {
        _id: '4',
        title: 'Радон в дома ми',
        content: 'Съвременните сгради често са добре изолирани, за да се намалят разходите за енергия. Малкият въздушен поток обаче може да позволи на радона да се натрупа до високи нива и да предизвика дългосрочно облъчване. Вентилацията, която може да бъде толкова проста, колкото отварянето на прозореца, често е решение за поддържане на безопасни нива на радон. Чрез дългосрочно наблюдение можете да разберете кога нивата започват да се повишават и да действате по подходящ начин.',
        renderTimes: 'Four'
    },
    {
        _id: '5',
        title: 'Radonmap.com',
        content: 'Radonmap.com използва сензори на Airthings от цял свят, за да показва нивата на радон в реално време, разбити по местоположение и анонимизирани. Вижте приблизителните изчисления на годишния и месечния риск в тази лесна за използване интерактивна карта! Съседът ви може да има различни нива на радон от вас, затова е важно да наблюдавате собствения си дом.',
        renderTimes: 'Five'
    },
    {
        _id: '6',
        title: 'Кой е чувствителен към радон?',
        content: '',
        renderTimes: 'Six'
    },
    {
        _id: '7',
        title: 'Защо се променят нивата на радон?',
        content: 'Нивата на радон се променят с течение на времето. Ето защо е толкова важно да измервате непрекъснато, за да сте сигурни, че нивата ви остават ниски.',
        renderTimes: 'Seven'
    }
];


export default function WhatIsRadon() {


    return (

        <div className='container mt-5'>

            <div className='main-container row inner-container1'>

                <div className='col-md-6'>
                    <h1 className='display-4 main-title-page'>Какво е радон?</h1>
                    <p className="display-6 paragraph-page">Радонът е невидим газ, който се образува в земната кора. Той заобикаля всеки от нас като част от въздуха, който дишаме.</p>
                    <p className="display-8 paragraph-page2">Проблемът е във високите нива за дълъг период от време. Чрез дългосрочно наблюдение на радон можете да бъдете предупредени за високи нива и да направите малки промени, за да подобрите въздуха, който дишате.</p>
                </div>

            </div>


            <div className="row inner-container2">

                <p className="display-5 accordion-main-title">Всичко, което трябва да знаете за радон</p>

                <Accordion accordionItems={accordionItems} />

            </div>
        </div>

    )

}
