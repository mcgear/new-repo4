import React, { useEffect, useRef } from "react";

interface Props {
  templateId: string;
  className?: string;
}

const TemplateInjector: React.FC<Props> = ({ templateId, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const template = document.getElementById(templateId);

    if (template) {
      const html = template.innerHTML;

      if (ref.current) {
        ref.current.innerHTML = html;
      }
    }
  }, [templateId]);

  return (
    <div ref={ref} className={className}>
    </div>
  );
};

export default TemplateInjector;
