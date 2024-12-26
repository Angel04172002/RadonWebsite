import AccordionItem from "./AccordionItem/AccordionItem";


export default function Accordion({ accordionItems }) {


    return (
        <div className="accordion accordion-flush" id="accordionFlushExample">
            {accordionItems.map(item => <AccordionItem
                    key={item._id}
                    title={item.title}
                    content={item.content}
                    renderTimes={item.renderTimes}
                />
            )}
        </div>
    )
}