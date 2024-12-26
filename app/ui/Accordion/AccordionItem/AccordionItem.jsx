import './AccordionItem.css';

export default function AccordionItem({
    title,
    content,
    renderTimes,
    
}) {

    const h2Id = `flush-heading${renderTimes}`;
    const buttonBsTarget = `#flush-collapse${renderTimes}`;
    const buttonBsControl = `flush-collapse${renderTimes}`;



    return (

        <div className="accordion-item">
            <h2 className="accordion-header" id={h2Id}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={buttonBsTarget} aria-expanded="false" aria-controls={buttonBsControl}>
                    {title}
                </button>
            </h2>
            <div id={buttonBsControl} className="accordion-collapse collapse" aria-labelledby={h2Id} data-bs-parent="#accordionFlushExample">
                <div className="accordion-body" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </div>
    )
}