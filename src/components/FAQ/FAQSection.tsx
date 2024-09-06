import React, { useState } from 'react';

interface FAQItemProps {
  title: string;
  children: React.ReactNode;
}

function FAQItem({ title, children }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>{title}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
}

export function FAQSection() {
  return (
    <div>
      <FAQItem title="¿Cómo me registro?">
        Instrucciones de registro...
      </FAQItem>
      <FAQItem title="¿Dónde puedo aparcar?">
        Información sobre aparcamiento...
      </FAQItem>
    </div>
  );
}