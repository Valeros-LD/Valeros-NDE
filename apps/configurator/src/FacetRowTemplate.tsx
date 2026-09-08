import type { ObjectFieldTemplateProps } from '@rjsf/utils';

const facetFieldOrder = ['name', 'label', 'icon', 'hidden'];

export function FacetRowTemplate({ properties }: ObjectFieldTemplateProps) {
  return (
    <div className="flex items-end gap-3">
      {facetFieldOrder.map((name) => {
        const prop = properties.find((p) => p.name === name);
        return prop ? (
          <div key={name} className="flex-1">
            {prop.content}
          </div>
        ) : null;
      })}
    </div>
  );
}
