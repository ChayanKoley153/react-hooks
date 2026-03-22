import { useState } from "react";

export default function Accordion() {
    const [activeSection, setActiveSection] = useState(null);

    const sections = [
        { title: "Section 1", content: "Content 1" },
        { title: "Section 2", content: "Content 2" },
        { title: "Section 3", content: "Content 3" },
    ];

    const toogleSection = (index) => {
        setActiveSection((prev) => prev === index ? null : index);
    }

    // console.log(activeSection, "current state");

    return (
        <div>
            {sections.map((section, index) => (
                <div key={index}>
                    <div
                        onClick={() => toogleSection(index)}
                        style={{ cursor: "pointer", fontWeight: "bold" }}
                    >
                        {section.title}
                    </div>

                    {activeSection === index && <div>{section.content}</div>}
                </div>
            ))}
        </div>
    )
}

